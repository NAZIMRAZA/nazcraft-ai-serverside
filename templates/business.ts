import { TemplateConfig } from './index';

export const businessTemplate: TemplateConfig = {
  name: 'Business Template',
  description: 'Professional corporate websites with contact forms, service pages, and portfolio sections.',
  
  generateHtml: (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.businessName} - Professional Services</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <h1>${data.businessName}</h1>
            </div>
            <div class="nav-menu">
                <a href="#home" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Welcome to ${data.businessName}</h1>
                <p>${data.description}</p>
                <a href="#contact" class="btn btn-primary">Get Started</a>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2>About Us</h2>
            <p>We are a professional services company dedicated to delivering excellence and building lasting relationships with our clients.</p>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <i class="fas fa-chart-line"></i>
                    <h3>Strategy Consulting</h3>
                    <p>Expert guidance to help your business grow and succeed.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-cogs"></i>
                    <h3>Implementation</h3>
                    <p>Professional implementation of solutions tailored to your needs.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-support"></i>
                    <h3>Support</h3>
                    <p>Ongoing support to ensure your continued success.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>${data.contactEmail || 'contact@business.com'}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>${data.phone || '+1 (555) 123-4567'}</span>
                </div>
                ${data.address ? `<div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${data.address}</span>
                </div>` : ''}
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 ${data.businessName}. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`,

  generateCss: (data: any) => `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.navbar {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.nav-brand h1 {
    color: ${data.colorScheme === 'blue' ? '#2563eb' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           '#1f2937'};
    font-size: 1.5rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-menu {
    display: flex;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #374151;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${data.colorScheme === 'blue' ? '#2563eb' : 
               data.colorScheme === 'green' ? '#10b981' :
               data.colorScheme === 'purple' ? '#8b5cf6' :
               data.colorScheme === 'red' ? '#ef4444' :
               data.colorScheme === 'orange' ? '#f97316' :
               data.colorScheme === 'teal' ? '#14b8a6' :
               '#1f2937'};
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: ${data.colorScheme === 'blue' ? '#2563eb' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           '#1f2937'};
}

.nav-link:hover::after {
    width: 100%;
}

.hero {
    background: linear-gradient(135deg, 
        ${data.colorScheme === 'blue' ? '#3b82f6, #1d4ed8' : 
          data.colorScheme === 'green' ? '#10b981, #047857' :
          data.colorScheme === 'purple' ? '#8b5cf6, #6d28d9' :
          data.colorScheme === 'red' ? '#ef4444, #dc2626' :
          data.colorScheme === 'orange' ? '#f97316, #ea580c' :
          data.colorScheme === 'teal' ? '#14b8a6, #0d9488' :
          '#6b7280, #374151'});
    color: white;
    padding: 120px 0 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="white" opacity="0.1"><polygon points="0,0 1000,100 1000,0"/></svg>');
    background-size: cover;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    animation: fadeInUp 1s ease-out;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.9;
    animation: fadeInUp 1s ease-out 0.3s both;
}

.btn {
    display: inline-block;
    padding: 12px 32px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    animation: fadeInUp 1s ease-out 0.6s both;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

.btn-primary {
    background: #fff;
    color: ${data.colorScheme === 'blue' ? '#2563eb' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           '#1f2937'};
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
}

.btn-primary:hover::before {
    left: 100%;
}

section {
    padding: 80px 0;
}

.about {
    background: #f8fafc;
}

.services {
    background: #fff;
}

.contact {
    background: #1f2937;
    color: white;
}

h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #1a202c;
}

.contact h2 {
    color: white;
}

.about p {
    font-size: 1.1rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    color: #6b7280;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.service-card {
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.3s; }
.service-card:nth-child(3) { animation-delay: 0.5s; }

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.service-card i {
    font-size: 3rem;
    color: ${data.colorScheme === 'blue' ? '#3b82f6' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           '#6b7280'};
    margin-bottom: 1rem;
    background: linear-gradient(45deg, currentColor, currentColor);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1a202c;
}

.service-card p {
    color: #6b7280;
    line-height: 1.6;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.1rem;
    padding: 1.5rem;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.contact-item:hover {
    transform: translateY(-5px);
}

.contact-item i {
    color: ${data.colorScheme === 'blue' ? '#60a5fa' : 
           data.colorScheme === 'green' ? '#34d399' :
           data.colorScheme === 'purple' ? '#a78bfa' :
           data.colorScheme === 'red' ? '#f87171' :
           data.colorScheme === 'orange' ? '#fb923c' :
           data.colorScheme === 'teal' ? '#2dd4bf' :
           '#9ca3af'};
    font-size: 1.5rem;
}

.footer {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 2rem 0;
    margin-top: 0;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .hero p {
        font-size: 1.1rem;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-info {
        grid-template-columns: 1fr;
    }
    
    .container {
        padding: 0 15px;
    }
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Additional animations */
@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.service-card:hover {
    animation: pulse 0.6s ease-in-out;
}

.btn-primary:hover {
    animation: bounce 0.6s ease-in-out;
}

/* Particle background effect */
.hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white" opacity="0.3"/></svg>') repeat;
    background-size: 50px 50px;
    animation: float 20s infinite linear;
}

@keyframes float {
    0% { transform: translateY(0px); }
    100% { transform: translateY(-100px); }
}`,

  generateJs: (data: any) => `
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll with smooth transition
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all service cards for animation
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Add loading animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // Add hover effects to contact items
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 800);
    }

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = \`translateY(\${rate}px)\`;
        });
    }

    // Add click analytics tracking
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function(e) {
            const elementType = this.tagName.toLowerCase();
            const elementText = this.textContent.trim();
            const elementHref = this.getAttribute('href') || 'N/A';
            
            console.log('Element clicked:', {
                type: elementType,
                text: elementText,
                href: elementHref,
                timestamp: new Date().toISOString()
            });
        });
    });

    // Add form interaction if contact form exists
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});

// Window load event for additional functionality
window.addEventListener('load', function() {
    // Fade in all elements
    document.body.style.opacity = '1';
    
    // Add performance monitoring
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    }
});

// Error handling
window.addEventListener('error', function(e) {
    console.warn('Script error caught:', e.message);
});`
};
