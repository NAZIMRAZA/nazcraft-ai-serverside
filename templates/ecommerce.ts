import { TemplateConfig } from './index';

export const ecommerceTemplate: TemplateConfig = {
  name: 'E-commerce Template',
  description: 'Complete online store solution with product catalog, shopping cart, admin panel, and payment integration capabilities.',
  
  generateHtml: (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.businessName} - Online Store</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="container">
                <div class="nav-brand">
                    <i class="fas fa-store"></i>
                    <span>${data.businessName}</span>
                </div>
                <div class="nav-links">
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="nav-actions">
                    <button class="search-btn" onclick="toggleSearch()">
                        <i class="fas fa-search"></i>
                    </button>
                    <button class="cart-btn" onclick="toggleCart()">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">0</span>
                    </button>
                </div>
            </div>
        </nav>
        
        <div class="search-bar" id="searchBar">
            <div class="container">
                <input type="text" placeholder="Search products..." id="searchInput">
                <button onclick="searchProducts()"><i class="fas fa-search"></i></button>
            </div>
        </div>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h1>Welcome to ${data.businessName}</h1>
                <p>${data.description}</p>
                <a href="#products" class="btn btn-primary">Shop Now</a>
            </div>
        </section>

        <section id="products" class="products">
            <div class="container">
                <h2>Featured Products</h2>
                <div class="product-filters">
                    <button class="filter-btn active" data-category="all">All</button>
                    <button class="filter-btn" data-category="electronics">Electronics</button>
                    <button class="filter-btn" data-category="clothing">Clothing</button>
                    <button class="filter-btn" data-category="accessories">Accessories</button>
                </div>
                
                <div class="products-grid" id="productsGrid">
                    <!-- Products will be dynamically loaded here -->
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <h2>About Our Store</h2>
                <div class="about-content">
                    <div class="about-text">
                        <p>We are committed to providing high-quality products at competitive prices. Our curated selection ensures that every item meets our strict standards for quality and value.</p>
                        <div class="features">
                            <div class="feature">
                                <i class="fas fa-shipping-fast"></i>
                                <span>Free Shipping</span>
                            </div>
                            <div class="feature">
                                <i class="fas fa-undo"></i>
                                <span>Easy Returns</span>
                            </div>
                            <div class="feature">
                                <i class="fas fa-shield-alt"></i>
                                <span>Secure Payment</span>
                            </div>
                        </div>
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
                        <span>${data.contactEmail || 'shop@store.com'}</span>
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
    </main>

    <!-- Shopping Cart Sidebar -->
    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
            <h3>Shopping Cart</h3>
            <button onclick="toggleCart()" class="close-btn">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="cart-items" id="cartItems">
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <strong>Total: $<span id="cartTotal">0.00</span></strong>
            </div>
            <button class="btn btn-primary checkout-btn" onclick="checkout()">
                Checkout
            </button>
        </div>
    </div>

    <!-- Product Modal -->
    <div class="modal" id="productModal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="modal-body" id="modalBody">
                <!-- Product details will be loaded here -->
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>${data.businessName}</h3>
                    <p>Your trusted online shopping destination.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 ${data.businessName}. All rights reserved.</p>
            </div>
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
    background: #f8f9fa;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.navbar {
    padding: 1rem 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
           '#e74c3c'};
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-brand i {
    font-size: 1.8rem;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: ${data.colorScheme === 'blue' ? '#3b82f6' : 
           data.colorScheme === 'green' ? '#10b981' :
           data.colorScheme === 'purple' ? '#8b5cf6' :
           data.colorScheme === 'red' ? '#ef4444' :
           data.colorScheme === 'orange' ? '#f97316' :
           data.colorScheme === 'teal' ? '#14b8a6' :
           '#e74c3c'};
    transform: translateY(-2px);
}

.nav-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.search-btn, .cart-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    color: #666;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.3s;
    position: relative;
}

.search-btn:hover, .cart-btn:hover {
    background: #f8f9fa;
    color: #e74c3c;
}

.cart-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #e74c3c;
    color: white;
    font-size: 0.7rem;
    padding: 2px 6px;
    border-radius: 50%;
    min-width: 18px;
    text-align: center;
}

.search-bar {
    background: #f8f9fa;
    border-top: 1px solid #e9ecef;
    padding: 1rem 0;
    display: none;
}

.search-bar.active {
    display: block;
}

.search-bar .container {
    display: flex;
    gap: 1rem;
    max-width: 600px;
}

.search-bar input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
}

.search-bar button {
    padding: 0.75rem 1.5rem;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
}

.search-bar button:hover {
    background: #c0392b;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 120px 0 80px;
    text-align: center;
    margin-top: 80px;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: #e74c3c;
    color: white;
}

.btn-primary:hover {
    background: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
}

.products {
    padding: 80px 0;
    background: #fff;
}

.products h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.product-filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.75rem 1.5rem;
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 25px;
    color: #666;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

.filter-btn.active,
.filter-btn:hover {
    background: #e74c3c;
    color: white;
    border-color: #e74c3c;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
}

.product-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.product-image {
    width: 100%;
    height: 200px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: #ddd;
}

.product-info {
    padding: 1.5rem;
}

.product-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.product-price {
    font-size: 1.3rem;
    font-weight: 700;
    color: #e74c3c;
    margin-bottom: 1rem;
}

.add-to-cart {
    width: 100%;
    padding: 0.75rem;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
}

.add-to-cart:hover {
    background: #c0392b;
}

.about {
    padding: 80px 0;
    background: #f8f9fa;
}

.about h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.about-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 3rem;
}

.features {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
}

.feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.feature i {
    font-size: 2rem;
    color: #e74c3c;
    margin-bottom: 0.5rem;
}

.feature span {
    font-weight: 600;
    color: #2c3e50;
}

.contact {
    padding: 80px 0;
    background: #fff;
}

.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2c3e50;
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
    color: #e74c3c;
    font-size: 1.5rem;
}

.cart-sidebar {
    position: fixed;
    top: 0;
    right: -400px;
    width: 400px;
    height: 100vh;
    background: #fff;
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    z-index: 2000;
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
}

.cart-sidebar.active {
    right: 0;
}

.cart-header {
    padding: 1.5rem;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-header h3 {
    margin: 0;
    color: #2c3e50;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #666;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background 0.3s;
}

.close-btn:hover {
    background: #f8f9fa;
}

.cart-items {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
}

.empty-cart {
    text-align: center;
    padding: 3rem 1rem;
    color: #999;
}

.empty-cart i {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.cart-item {
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #f0f0f0;
}

.cart-item-image {
    width: 60px;
    height: 60px;
    background: #f8f9fa;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ddd;
}

.cart-item-info {
    flex: 1;
}

.cart-item-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.cart-item-price {
    color: #e74c3c;
    font-weight: 600;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.quantity-btn {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    background: #f8f9fa;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
}

.quantity-btn:hover {
    background: #e9ecef;
}

.quantity {
    padding: 0.25rem 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
    min-width: 50px;
}

.cart-footer {
    padding: 1.5rem;
    border-top: 1px solid #e9ecef;
}

.cart-total {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.2rem;
}

.checkout-btn {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
}

.modal {
    display: none;
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

.modal-content {
    background-color: #fff;
    margin: 5% auto;
    padding: 0;
    border-radius: 12px;
    width: 90%;
    max-width: 600px;
    position: relative;
    max-height: 80vh;
    overflow-y: auto;
}

.modal .close {
    position: absolute;
    top: 15px;
    right: 20px;
    color: #666;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
}

.modal .close:hover {
    color: #333;
}

.footer {
    background: #2c3e50;
    color: #ecf0f1;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
    margin-bottom: 1rem;
    color: #fff;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section ul li a:hover {
    color: #fff;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #34495e;
    color: #bdc3c7;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
    }
    
    .features {
        flex-direction: column;
        gap: 2rem;
    }
    
    .contact-info {
        flex-direction: column;
        gap: 1rem;
    }
    
    .cart-sidebar {
        width: 100%;
        right: -100%;
    }
    
    .modal-content {
        width: 95%;
        margin: 10% auto;
    }
}`,

  generateJs: (data: any) => `
// Mock product data
const products = [
    { id: 1, title: "Wireless Headphones", price: 99.99, category: "electronics", image: "🎧" },
    { id: 2, title: "Smart Watch", price: 199.99, category: "electronics", image: "⌚" },
    { id: 3, title: "Designer T-Shirt", price: 29.99, category: "clothing", image: "👕" },
    { id: 4, title: "Leather Jacket", price: 149.99, category: "clothing", image: "🧥" },
    { id: 5, title: "Sunglasses", price: 79.99, category: "accessories", image: "🕶️" },
    { id: 6, title: "Backpack", price: 59.99, category: "accessories", image: "🎒" },
    { id: 7, title: "Smartphone", price: 699.99, category: "electronics", image: "📱" },
    { id: 8, title: "Running Shoes", price: 89.99, category: "clothing", image: "👟" },
];

let cart = [];
let filteredProducts = products;

// Search functionality
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
    );
    renderProducts();
}

// Cart functionality
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = \`
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        \`;
    } else {
        cartItems.innerHTML = cart.map(item => \`
            <div class="cart-item">
                <div class="cart-item-image">\${item.image}</div>
                <div class="cart-item-info">
                    <div class="cart-item-title">\${item.title}</div>
                    <div class="cart-item-price">$\${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(\${item.id}, -1)">-</button>
                        <input type="text" class="quantity" value="\${item.quantity}" readonly>
                        <button class="quantity-btn" onclick="updateQuantity(\${item.id}, 1)">+</button>
                        <button class="quantity-btn" onclick="removeFromCart(\${item.id})" style="margin-left: 1rem; color: #e74c3c;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        \`).join('');
    }
}

// Product display
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = filteredProducts.map(product => \`
        <div class="product-card" onclick="showProductModal(\${product.id})">
            <div class="product-image">\${product.image}</div>
            <div class="product-info">
                <div class="product-title">\${product.title}</div>
                <div class="product-price">$\${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(\${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    \`).join('');
}

// Product filters
function filterProducts(category) {
    filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts();
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(\`[data-category="\${category}"]\`).classList.add('active');
}

// Product modal
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = \`
        <div style="padding: 2rem;">
            <div style="text-align: center; margin-bottom: 2rem;">
                <div style="font-size: 6rem; margin-bottom: 1rem;">\${product.image}</div>
                <h2 style="margin-bottom: 1rem; color: #2c3e50;">\${product.title}</h2>
                <div style="font-size: 2rem; color: #e74c3c; font-weight: 700; margin-bottom: 2rem;">$\${product.price.toFixed(2)}</div>
            </div>
            <div style="margin-bottom: 2rem;">
                <p style="color: #666; line-height: 1.6;">
                    This is a high-quality product with excellent features and great value. 
                    Perfect for your needs with modern design and reliable performance.
                </p>
            </div>
            <button class="btn btn-primary" onclick="addToCart(\${product.id}); closeModal();" style="width: 100%; padding: 1rem; font-size: 1.1rem;">
                Add to Cart - $\${product.price.toFixed(2)}
            </button>
        </div>
    \`;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(\`Thank you for your order! Total: $\${total.toFixed(2)}\\n\\nThis is a demo. In a real store, you would be redirected to payment processing.\`);
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    toggleCart();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartDisplay();
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-category'));
        });
    });
    
    // Search input
    document.getElementById('searchInput').addEventListener('input', function(e) {
        if (e.target.value === '') {
            filteredProducts = products;
            renderProducts();
        }
    });
    
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('productModal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartBtn = document.querySelector('.cart-btn');
        
        if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target) && cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    });
});

// Smooth scrolling for navigation
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

// Apply animations to product cards
setTimeout(() => {
    document.querySelectorAll('.product-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = \`opacity 0.6s ease \${index * 0.1}s, transform 0.6s ease \${index * 0.1}s\`;
        observer.observe(el);
    });
}, 100);`
};
