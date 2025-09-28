import { TemplateConfig } from './index';

export const minimalistTemplate: TemplateConfig = {
  name: 'Minimalist Template',
  description: 'Clean and simple design perfect for portfolios, personal websites, and creative professionals.',
  
  generateHtml: (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.businessName}</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-brand">${data.businessName}</div>
            <div class="nav-links">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-content">
                <h1>${data.businessName}</h1>
                <p class="hero-subtitle">${data.description}</p>
            </div>
        </section>

        <section id="about" class="section">
            <div class="container">
                <h2>About</h2>
                <p>A passionate professional focused on creating meaningful and impactful work. I believe in the power of simplicity and thoughtful design.</p>
            </div>
        </section>

        <section id="work" class="section">
            <div class="container">
                <h2>Work</h2>
                <div class="work-grid">
                    <div class="work-item">
                        <h3>Project One</h3>
                        <p>A brief description of this project and its impact.</p>
                    </div>
                    <div class="work-item">
                        <h3>Project Two</h3>
                        <p>Another project that showcases skills and creativity.</p>
                    </div>
                    <div class="work-item">
                        <h3>Project Three</h3>
                        <p>A third project demonstrating range and expertise.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="section">
            <div class="container">
                <h2>Contact</h2>
                <div class="contact-content">
                    <p>Let's work together on your next project.</p>
                    <div class="contact-info">
                        <a href="mailto:${data.contactEmail || 'hello@example.com'}">${data.contactEmail || 'hello@example.com'}</a>
                        ${data.phone ? `<a href="tel:${data.phone}">${data.phone}</a>` : ''}
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 ${data.businessName}</p>
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

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #2c3e50;
    background: ${data.colorScheme === 'dark' ? '#1a1a1a' : '#ffffff'};
    transition: all 0.3s ease;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 100;
    border-bottom: 1px solid #f0f0f0;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.nav-brand {
    font-weight: 600;
    font-size: 1.1rem;
    color: ${data.colorScheme === 'blue' ? '#3b82f6' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           data.colorScheme === 'dark' ? '#ffffff' :
           '#2c3e50'};
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #7f8c8d;
    font-weight: 400;
    font-size: 0.95rem;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: ${data.colorScheme === 'blue' ? '#3b82f6' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           data.colorScheme === 'dark' ? '#ffffff' :
           '#2c3e50'};
    transform: translateY(-2px);
}

.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 300;
    color: #2c3e50;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #7f8c8d;
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto;
}

.section {
    padding: 6rem 0;
}

.section:nth-child(even) {
    background: #f8f9fa;
}

h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 2rem;
    text-align: center;
}

.work-grid {
    display: grid;
    gap: 3rem;
    margin-top: 3rem;
}

.work-item {
    text-align: center;
    padding: 2rem;
}

.work-item h3 {
    font-size: 1.3rem;
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 1rem;
}

.work-item p {
    color: #7f8c8d;
    font-size: 1rem;
    max-width: 400px;
    margin: 0 auto;
}

.contact-content {
    text-align: center;
}

.contact-content p {
    font-size: 1.1rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.contact-info a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: opacity 0.3s ease;
}

.contact-info a:hover {
    opacity: 0.7;
}

.footer {
    background: #2c3e50;
    color: #ecf0f1;
    text-align: center;
    padding: 2rem 0;
}

.footer p {
    font-size: 0.9rem;
    font-weight: 300;
}

@media (max-width: 768px) {
    .nav {
        padding: 1rem;
    }
    
    .nav-links {
        gap: 1.5rem;
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .section {
        padding: 4rem 0;
    }
}

@media (max-width: 480px) {
    .nav-links {
        display: none;
    }
    
    .hero-content h1 {
        font-size: 2rem;
    }
}`,

  generateJs: (data: any) => `
// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simple fade-in animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to work items
document.querySelectorAll('.work-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(item);
});

// Header background on scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 1px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
});`
};
