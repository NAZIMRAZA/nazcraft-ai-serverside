import { users, websites, contactMessages, type User, type InsertUser, type Website, type InsertWebsite, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByFirebaseUid(firebaseUid: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: Partial<User>): Promise<User | undefined>;
  getAllUsers(): Promise<User[]>;

  // Website operations
  getWebsite(id: number): Promise<Website | undefined>;
  getWebsitesByUserId(userId: number): Promise<Website[]>;
  createWebsite(website: InsertWebsite): Promise<Website>;
  updateWebsite(id: number, website: Partial<Website>): Promise<Website | undefined>;
  getAllWebsites(): Promise<Website[]>;

  // Contact message operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private websites: Map<number, Website>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentWebsiteId: number;
  private currentMessageId: number;

  constructor() {
    this.users = new Map();
    this.websites = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentWebsiteId = 1;
    this.currentMessageId = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async getUserByFirebaseUid(firebaseUid: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.firebaseUid === firebaseUid);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = {
      ...insertUser,
      id,
      emailVerified: insertUser.emailVerified ?? false,
      createdAt: new Date(),
      phone: insertUser.phone ?? null,
      address: insertUser.address ?? null
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: number, userUpdate: Partial<User>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...userUpdate };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  // Website operations
  async getWebsite(id: number): Promise<Website | undefined> {
    return this.websites.get(id);
  }

  async getWebsitesByUserId(userId: number): Promise<Website[]> {
    return Array.from(this.websites.values()).filter(website => website.userId === userId);
  }

  async createWebsite(insertWebsite: InsertWebsite): Promise<Website> {
    const id = this.currentWebsiteId++;
    const website: Website = {
      ...insertWebsite,
      id,
      generatedHtml: null,
      generatedCss: null,
      generatedJs: null,
      previewUrl: null,
      downloadUrl: null,
      createdAt: new Date(),
      userId: insertWebsite.userId ?? null,
      phone: insertWebsite.phone ?? null,
      address: insertWebsite.address ?? null,
      contactEmail: insertWebsite.contactEmail ?? null,
      colorScheme: insertWebsite.colorScheme ?? null
    };
    this.websites.set(id, website);
    return website;
  }

  async updateWebsite(id: number, websiteUpdate: Partial<Website>): Promise<Website | undefined> {
    const website = this.websites.get(id);
    if (!website) return undefined;
    
    const updatedWebsite = { ...website, ...websiteUpdate };
    this.websites.set(id, updatedWebsite);
    return updatedWebsite;
  }

  async getAllWebsites(): Promise<Website[]> {
    return Array.from(this.websites.values());
  }

  // Contact message operations
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

import { DatabaseStorage } from "./database-storage";

export const storage = new MemStorage();
