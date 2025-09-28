import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js"; // FINAL FIX
import { insertUserSchema, insertWebsiteSchema, insertContactMessageSchema } from "./shared/schema.js"; // FINAL FIX
import { businessTemplate, minimalistTemplate, cryptoTemplate, ecommerceTemplate, chatTemplate } from "./templates/index.js"; // FINAL FIX
import { z } from "zod";
import JSZip from "jszip";

const templates = {
  business: businessTemplate,
  minimalist: minimalistTemplate,
  crypto: cryptoTemplate,
  ecommerce: ecommerceTemplate,
  chat: chatTemplate
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth routes
  app.post("/api/auth/sync", async (req, res) => {
    try {
      const { firebaseUid, email, displayName, emailVerified } = req.body;
      
      let user = await storage.getUserByFirebaseUid(firebaseUid);
      
      if (user) {
        // Update existing user
        user = await storage.updateUser(user.id, { emailVerified });
      } else {
        // Create new user with minimal data from Firebase
        const userData = {
          firebaseUid,
          email,
          firstName: displayName?.split(' ')[0] || '',
          lastName: displayName?.split(' ').slice(1).join(' ') || '',
          emailVerified: emailVerified || false
        };
        user = await storage.createUser(userData);
      }
      
      res.json(user);
    } catch (error) {
      console.error("Auth sync error:", error);
      res.status(500).json({ message: "Failed to sync user" });
    }
  });

  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.json(user);
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Failed to register user" });
    }
  });

  // Website generation routes
  app.post("/api/websites/generate", async (req, res) => {
    try {
      // Handle userId validation separately to avoid Zod errors
      const { userId, ...restData } = req.body;
      
      // Validate the rest of the data
      const websiteData = insertWebsiteSchema.omit({ userId: true }).parse(restData);
      
      const template = templates[websiteData.template as keyof typeof templates];
      if (!template) {
        return res.status(400).json({ message: "Invalid template" });
      }

      // Use null for userId to allow anonymous website generation
      let validUserId = null;
      if (userId && typeof userId === 'number' && userId > 0 && userId <= 2147483647) {
        validUserId = userId;
      }
      // Don't create anonymous user, allow null userId for now

      // Generate website files
      const html = template.generateHtml(websiteData);
      const css = template.generateCss(websiteData);
      const js = template.generateJs(websiteData);

      // Create website record with proper userId
      const website = await storage.createWebsite({
        ...websiteData,
        userId: validUserId,
        name: websiteData.name || `${websiteData.businessName} Website`
      });

      // Update with generated content
      const updatedWebsite = await storage.updateWebsite(website.id, {
        generatedHtml: html,
        generatedCss: css,
        generatedJs: js,
        previewUrl: `${process.env.BASE_URL || 'http://localhost:5000'}/api/websites/${website.id}/preview`,
        downloadUrl: `${process.env.BASE_URL || 'http://localhost:5000'}/api/websites/${website.id}/download`
      });

      res.json(updatedWebsite || website);
    } catch (error) {
      console.error("Website generation error:", error);
      res.status(500).json({ message: "Failed to generate website" });
    }
  });

  // Website download endpoint
  app.get("/api/websites/:id/download", async (req, res) => {
    try {
      const website = await storage.getWebsite(parseInt(req.params.id));
      if (!website) {
        return res.status(404).json({ message: "Website not found" });
      }

      const zip = new JSZip();
      zip.file("index.html", website.generatedHtml || "");
      zip.file("styles.css", website.generatedCss || "");
      zip.file("script.js", website.generatedJs || "");

      const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });
      
      res.setHeader("Content-Type", "application/zip");
      res.setHeader("Content-Disposition", `attachment; filename="${website.name}.zip"`);
      res.send(zipBuffer);
    } catch (error) {
      console.error("Download error:", error);
      res.status(500).json({ message: "Failed to download website" });
    }
  });

  // Website preview endpoint  
  app.get("/api/websites/:id/preview", async (req, res) => {
    try {
      const website = await storage.getWebsite(parseInt(req.params.id));
      if (!website) {
        return res.status(404).json({ message: "Website not found" });
      }

      res.setHeader("Content-Type", "text/html");
      res.send(website.generatedHtml || "<h1>Website not generated</h1>");
    } catch (error) {
      console.error("Preview error:", error);
      res.status(500).json({ message: "Failed to preview website" });
    }
  });

  app.get("/api/websites/:id/preview", async (req, res) => {
    try {
      const websiteId = parseInt(req.params.id);
      const website = await storage.getWebsite(websiteId);
      
      if (!website || !website.generatedHtml) {
        return res.status(404).json({ message: "Website not found" });
      }

      // Inject CSS and JS into HTML
      const fullHtml = website.generatedHtml
        .replace('<link rel="stylesheet" href="styles.css">', `<style>${website.generatedCss}</style>`)
        .replace('<script src="script.js"></script>', `<script>${website.generatedJs}</script>`);

      res.setHeader('Content-Type', 'text/html');
      res.send(fullHtml);
    } catch (error) {
      console.error("Preview error:", error);
      res.status(500).json({ message: "Failed to load preview" });
    }
  });

  app.get("/api/websites/:id/download", async (req, res) => {
    try {
      const websiteId = parseInt(req.params.id);
      const website = await storage.getWebsite(websiteId);
      
      if (!website || !website.generatedHtml) {
        return res.status(404).json({ message: "Website not found" });
      }

      // Create ZIP file with website source
      const zip = new JSZip();
      zip.file("index.html", website.generatedHtml);
      zip.file("styles.css", website.generatedCss || "");
      zip.file("script.js", website.generatedJs || "");
      zip.file("README.md", `# ${website.businessName} Website\n\nGenerated by Nazcraft\n\n## Files\n- index.html: Main HTML file\n- styles.css: CSS styles\n- script.js: JavaScript functionality\n\n## Usage\nOpen index.html in your browser to view the website.`);

      const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });
      
      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', `attachment; filename="${website.businessName.replace(/[^a-zA-Z0-9]/g, '_')}_website.zip"`);
      res.send(zipBuffer);
    } catch (error) {
      console.error("Download error:", error);
      res.status(500).json({ message: "Failed to generate download" });
    }
  });

  // Contact routes
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      res.json(message);
    } catch (error) {
      console.error("Contact message error:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Admin routes
  app.get("/api/admin/users", async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Admin users error:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });

  app.get("/api/admin/websites", async (req, res) => {
    try {
      const websites = await storage.getAllWebsites();
      res.json(websites);
    } catch (error) {
      console.error("Admin websites error:", error);
      res.status(500).json({ message: "Failed to fetch websites" });
    }
  });

  app.get("/api/admin/messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Admin messages error:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}