import { TemplateConfig } from './index';

export const cryptoTemplate: TemplateConfig = {
  name: 'Crypto Template',
  description: 'Professional cryptocurrency and blockchain websites with calculators, policies, and trading information.',
  
  generateHtml: (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.businessName} - Cryptocurrency Platform</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <i class="fab fa-bitcoin"></i>
                <span>${data.businessName}</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#calculator">Calculator</a></li>
                <li><a href="#policies">Policies</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Welcome to the Future of Finance</h1>
                <p>${data.description}</p>
                <div class="hero-buttons">
                    <a href="#calculator" class="btn btn-primary">Try Calculator</a>
                    <a href="#about" class="btn btn-secondary">Learn More</a>
                </div>
            </div>
            <div class="crypto-prices">
                <div class="price-card">
                    <div class="crypto-icon"><i class="fab fa-bitcoin"></i></div>
                    <div class="crypto-info">
                        <span class="crypto-name">Bitcoin</span>
                        <span class="crypto-price" data-crypto="BTC">Loading...</span>
                    </div>
                </div>
                <div class="price-card">
                    <div class="crypto-icon"><i class="fab fa-ethereum"></i></div>
                    <div class="crypto-info">
                        <span class="crypto-name">Ethereum</span>
                        <span class="crypto-price" data-crypto="ETH">Loading...</span>
                    </div>
                </div>
                <div class="price-card">
                    <div class="crypto-icon">◎</div>
                    <div class="crypto-info">
                        <span class="crypto-name">Solana</span>
                        <span class="crypto-price" data-crypto="SOL">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2>About Our Platform</h2>
            <div class="about-grid">
                <div class="about-card">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Secure Trading</h3>
                    <p>Bank-level security with multi-layer protection for your digital assets.</p>
                </div>
                <div class="about-card">
                    <i class="fas fa-chart-line"></i>
                    <h3>Real-time Data</h3>
                    <p>Live market data and analytics to make informed trading decisions.</p>
                </div>
                <div class="about-card">
                    <i class="fas fa-users"></i>
                    <h3>Expert Support</h3>
                    <p>24/7 customer support from cryptocurrency experts.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="calculator" class="calculator">
        <div class="container">
            <h2>Cryptocurrency Calculator</h2>
            <div class="calc-container">
                <div class="calc-input">
                    <label for="amount">Amount</label>
                    <input type="number" id="amount" placeholder="Enter amount" value="1">
                </div>
                <div class="calc-select">
                    <label for="fromCurrency">From</label>
                    <select id="fromCurrency">
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="SOL">Solana (SOL)</option>
                        <option value="USDT">Tether (USDT)</option>
                    </select>
                </div>
                <div class="calc-convert">
                    <button id="convertBtn" class="btn btn-primary">
                        <i class="fas fa-exchange-alt"></i>
                    </button>
                </div>
                <div class="calc-select">
                    <label for="toCurrency">To</label>
                    <select id="toCurrency">
                        <option value="USD">US Dollar (USD)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="GBP">British Pound (GBP)</option>
                        <option value="INR">Indian Rupee (INR)</option>
                        <option value="AED">UAE Dirham (AED)</option>
                    </select>
                </div>
                <div class="calc-result">
                    <div id="result" class="result-display">0.00 USD</div>
                </div>
            </div>
        </div>
    </section>

    <section id="policies" class="policies">
        <div class="container">
            <h2>Policies & Compliance</h2>
            <div class="policies-grid">
                <div class="policy-card">
                    <i class="fas fa-file-contract"></i>
                    <h3>AML Policy</h3>
                    <p>Our Anti-Money Laundering policy ensures compliance with international regulations and protects against financial crimes.</p>
                    <a href="#" class="policy-link">Read Full Policy</a>
                </div>
                <div class="policy-card">
                    <i class="fas fa-user-shield"></i>
                    <h3>KYC Procedures</h3>
                    <p>Know Your Customer procedures help us verify user identities and maintain platform security.</p>
                    <a href="#" class="policy-link">Learn More</a>
                </div>
                <div class="policy-card">
                    <i class="fas fa-balance-scale"></i>
                    <h3>Terms of Service</h3>
                    <p>Comprehensive terms governing the use of our platform and services.</p>
                    <a href="#" class="policy-link">View Terms</a>
                </div>
                <div class="policy-card">
                    <i class="fas fa-lock"></i>
                    <h3>Privacy Policy</h3>
                    <p>How we collect, use, and protect your personal information and trading data.</p>
                    <a href="#" class="policy-link">Privacy Details</a>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${data.contactEmail || 'support@crypto.com'}</span>
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
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 ${data.businessName}. All rights reserved. Cryptocurrency trading involves risk.</p>
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
    color: #fff;
    background: #0a0e1a;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.navbar {
    background: rgba(10, 14, 26, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #1a2332;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${data.colorScheme === 'blue' ? '#3b82f6' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           '#f7931a'};
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.nav-brand i {
    font-size: 2rem;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #a0a9c0;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: ${data.colorScheme === 'blue' ? '#3b82f6' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           '#f7931a'};
    text-shadow: 0 0 10px currentColor;
}

.hero {
    background: linear-gradient(135deg, #0a0e1a 0%, #1a2332 100%);
    padding: 120px 0 80px;
    text-align: center;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    background: linear-gradient(45deg, 
        ${data.colorScheme === 'blue' ? '#3b82f6, #60a5fa' : 
          data.colorScheme === 'green' ? '#10b981, #34d399' :
          data.colorScheme === 'purple' ? '#8b5cf6, #a78bfa' :
          data.colorScheme === 'red' ? '#ef4444, #f87171' :
          data.colorScheme === 'orange' ? '#f97316, #fb923c' :
          data.colorScheme === 'teal' ? '#14b8a6, #2dd4bf' :
          '#f7931a, #ffab00'});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 2s infinite;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #a0a9c0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 4rem;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: linear-gradient(45deg, 
        ${data.colorScheme === 'blue' ? '#3b82f6, #1d4ed8' : 
          data.colorScheme === 'green' ? '#10b981, #047857' :
          data.colorScheme === 'purple' ? '#8b5cf6, #6d28d9' :
          data.colorScheme === 'red' ? '#ef4444, #dc2626' :
          data.colorScheme === 'orange' ? '#f97316, #ea580c' :
          data.colorScheme === 'teal' ? '#14b8a6, #0d9488' :
          '#f7931a, #ffab00'});
    color: #0a0e1a;
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
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.btn-primary:hover::before {
    left: 100%;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(247, 147, 26, 0.3);
    animation: glow 1s ease-in-out infinite alternate;
}

.btn-secondary {
    background: transparent;
    color: ${data.colorScheme === 'blue' ? '#3b82f6' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           '#f7931a'};
    border: 2px solid ${data.colorScheme === 'blue' ? '#3b82f6' : 
                      data.colorScheme === 'green' ? '#10b981' :
                      data.colorScheme === 'purple' ? '#8b5cf6' :
                      data.colorScheme === 'red' ? '#ef4444' :
                      data.colorScheme === 'orange' ? '#f97316' :
                      data.colorScheme === 'teal' ? '#14b8a6' :
                      '#f7931a'};
    position: relative;
    overflow: hidden;
}

.btn-secondary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${data.colorScheme === 'blue' ? '#3b82f6' : 
               data.colorScheme === 'green' ? '#10b981' :
               data.colorScheme === 'purple' ? '#8b5cf6' :
               data.colorScheme === 'red' ? '#ef4444' :
               data.colorScheme === 'orange' ? '#f97316' :
               data.colorScheme === 'teal' ? '#14b8a6' :
               '#f7931a'};
    transition: left 0.3s;
    z-index: -1;
}

.btn-secondary:hover::before {
    left: 0;
}

.btn-secondary:hover {
    color: #0a0e1a;
    transform: translateY(-2px);
}

.crypto-prices {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

.price-card {
    background: rgba(26, 35, 50, 0.5);
    border: 1px solid #1a2332;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: transform 0.3s;
}

.price-card:hover {
    transform: translateY(-5px);
}

.crypto-icon {
    font-size: 2rem;
    color: #f7931a;
    width: 50px;
    text-align: center;
}

.crypto-info {
    display: flex;
    flex-direction: column;
}

.crypto-name {
    font-weight: 600;
    color: #fff;
}

.crypto-price {
    color: #4ade80;
    font-weight: 500;
}

section {
    padding: 80px 0;
}

.about {
    background: #1a2332;
}

h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #fff;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.about-card {
    background: rgba(10, 14, 26, 0.5);
    border: 1px solid #1a2332;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s;
}

.about-card:hover {
    transform: translateY(-5px);
}

.about-card i {
    font-size: 3rem;
    color: #f7931a;
    margin-bottom: 1rem;
}

.about-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
}

.about-card p {
    color: #a0a9c0;
}

.calculator {
    background: #0a0e1a;
}

.calc-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
    align-items: end;
}

.calc-input, .calc-select {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.calc-convert {
    display: flex;
    justify-content: center;
}

.calc-result {
    grid-column: 1 / -1;
    text-align: center;
    margin-top: 2rem;
}

label {
    color: #a0a9c0;
    font-weight: 500;
}

input, select {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #1a2332;
    background: rgba(26, 35, 50, 0.5);
    color: #fff;
    font-size: 1rem;
}

.result-display {
    background: rgba(26, 35, 50, 0.5);
    border: 1px solid #1a2332;
    border-radius: 12px;
    padding: 2rem;
    font-size: 2rem;
    font-weight: 700;
    color: #4ade80;
}

.policies {
    background: #1a2332;
}

.policies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.policy-card {
    background: rgba(10, 14, 26, 0.5);
    border: 1px solid #1a2332;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
}

.policy-card i {
    font-size: 2.5rem;
    color: #f7931a;
    margin-bottom: 1rem;
}

.policy-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #fff;
}

.policy-card p {
    color: #a0a9c0;
    margin-bottom: 1.5rem;
}

.policy-link {
    color: #f7931a;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.3s;
}

.policy-link:hover {
    opacity: 0.8;
}

.contact {
    background: #0a0e1a;
}

.contact-content {
    text-align: center;
}

.contact-info {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.1rem;
}

.contact-item i {
    color: #f7931a;
    font-size: 1.5rem;
}

.footer {
    background: #1a2332;
    color: #a0a9c0;
    text-align: center;
    padding: 2rem 0;
    border-top: 1px solid #1a2332;
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .calc-container {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .contact-info {
        flex-direction: column;
        gap: 1rem;
    }
}

/* Additional animations */
@keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes glow {
    0% { box-shadow: 0 10px 20px rgba(247, 147, 26, 0.3); }
    100% { box-shadow: 0 10px 30px rgba(247, 147, 26, 0.6); }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.price-card {
    animation: float 3s ease-in-out infinite;
}

.price-card:nth-child(1) { animation-delay: 0s; }
.price-card:nth-child(2) { animation-delay: 1s; }
.price-card:nth-child(3) { animation-delay: 2s; }

.policy-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.about-card:hover {
    transform: translateY(-5px) rotate(1deg);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}`,

  generateJs: (data: any) => `
// Mock crypto prices (in a real app, this would come from an API)
const cryptoPrices = {
    BTC: { USD: 45000, EUR: 38000, GBP: 32000, INR: 3600000, AED: 165000 },
    ETH: { USD: 3200, EUR: 2700, GBP: 2300, INR: 256000, AED: 11700 },
    SOL: { USD: 150, EUR: 127, GBP: 108, INR: 12000, AED: 550 },
    USDT: { USD: 1, EUR: 0.85, GBP: 0.72, INR: 80, AED: 3.67 }
};

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update crypto prices display
function updateCryptoPrices() {
    document.querySelectorAll('[data-crypto]').forEach(element => {
        const crypto = element.getAttribute('data-crypto');
        if (cryptoPrices[crypto]) {
            // Simulate price fluctuation
            const basePrice = cryptoPrices[crypto].USD;
            const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
            const currentPrice = basePrice * (1 + variation);
            element.textContent = '$' + currentPrice.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }
    });
}

// Calculator functionality
function updateCalculator() {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultElement = document.getElementById('result');
    
    if (cryptoPrices[fromCurrency] && cryptoPrices[fromCurrency][toCurrency]) {
        const rate = cryptoPrices[fromCurrency][toCurrency];
        const result = amount * rate;
        
        resultElement.textContent = result.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + ' ' + toCurrency;
    } else {
        resultElement.textContent = '0.00 ' + toCurrency;
    }
}

// Convert button functionality
document.getElementById('convertBtn').addEventListener('click', () => {
    const fromSelect = document.getElementById('fromCurrency');
    const toSelect = document.getElementById('toCurrency');
    
    // Swap the values
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    
    updateCalculator();
});

// Calculator input listeners
document.getElementById('amount').addEventListener('input', updateCalculator);
document.getElementById('fromCurrency').addEventListener('change', updateCalculator);
document.getElementById('toCurrency').addEventListener('change', updateCalculator);

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations
document.querySelectorAll('.about-card, .price-card, .policy-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Initialize
updateCryptoPrices();
updateCalculator();

// Update prices every 10 seconds
setInterval(updateCryptoPrices, 10000);`
};
