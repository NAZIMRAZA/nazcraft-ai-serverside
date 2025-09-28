import { TemplateConfig } from './index';

export const chatTemplate: TemplateConfig = {
  name: 'Chat Template',
  description: 'Real-time messaging platforms with user authentication and admin management.',
  
  generateHtml: (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.businessName} - Chat Platform</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <div class="app-container">
        <!-- Login Screen -->
        <div id="loginScreen" class="login-screen">
            <div class="login-container">
                <div class="login-header">
                    <i class="fas fa-comments"></i>
                    <h1>${data.businessName}</h1>
                    <p>${data.description}</p>
                </div>
                
                <div class="login-form">
                    <h2>Sign In to Chat</h2>
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="loginUserId">User ID</label>
                            <input type="text" id="loginUserId" placeholder="Enter your unique user ID" required>
                        </div>
                        <div class="form-group">
                            <label for="loginEmail">Email</label>
                            <input type="email" id="loginEmail" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword">Password</label>
                            <input type="password" id="loginPassword" placeholder="Enter your password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-sign-in-alt"></i>
                            Sign In
                        </button>
                    </form>
                    
                    <div class="divider">
                        <span>or</span>
                    </div>
                    
                    <button id="showRegister" class="btn btn-secondary">
                        <i class="fas fa-user-plus"></i>
                        Create New Account
                    </button>
                </div>
            </div>
        </div>

        <!-- Registration Screen -->
        <div id="registerScreen" class="login-screen hidden">
            <div class="login-container">
                <div class="login-header">
                    <i class="fas fa-comments"></i>
                    <h1>${data.businessName}</h1>
                    <p>Create your account to start chatting</p>
                </div>
                
                <div class="login-form">
                    <h2>Create Account</h2>
                    <form id="registerForm">
                        <div class="form-group">
                            <label for="registerUserId">Choose User ID</label>
                            <input type="text" id="registerUserId" placeholder="Choose a unique user ID" required>
                        </div>
                        <div class="form-group">
                            <label for="registerName">Display Name</label>
                            <input type="text" id="registerName" placeholder="Enter your display name" required>
                        </div>
                        <div class="form-group">
                            <label for="registerEmail">Email</label>
                            <input type="email" id="registerEmail" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label for="registerPassword">Password</label>
                            <input type="password" id="registerPassword" placeholder="Create a password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-user-plus"></i>
                            Create Account
                        </button>
                    </form>
                    
                    <div class="divider">
                        <span>or</span>
                    </div>
                    
                    <button id="showLogin" class="btn btn-secondary">
                        <i class="fas fa-sign-in-alt"></i>
                        Back to Sign In
                    </button>
                </div>
            </div>
        </div>

        <!-- Chat Interface -->
        <div id="chatInterface" class="chat-interface hidden">
            <!-- Sidebar -->
            <div class="sidebar">
                <div class="sidebar-header">
                    <div class="user-info">
                        <div class="user-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="user-details">
                            <span class="user-name" id="currentUserName">User</span>
                            <span class="user-status online">Online</span>
                        </div>
                    </div>
                    <button class="btn-icon" id="logoutBtn" title="Logout">
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
                </div>
                
                <div class="sidebar-section">
                    <div class="section-header">
                        <h3>Add Friend</h3>
                    </div>
                    <div class="add-friend">
                        <input type="text" id="friendUserId" placeholder="Enter friend's user ID">
                        <button id="addFriendBtn" class="btn btn-small">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                
                <div class="sidebar-section">
                    <div class="section-header">
                        <h3>Friends</h3>
                    </div>
                    <div class="friends-list" id="friendsList">
                        <div class="empty-state">
                            <i class="fas fa-users"></i>
                            <p>No friends yet. Add some friends to start chatting!</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chat Area -->
            <div class="chat-area">
                <div class="chat-header">
                    <div class="chat-info">
                        <div class="chat-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="chat-details">
                            <span class="chat-name" id="chatName">Select a friend to start chatting</span>
                            <span class="chat-status" id="chatStatus"></span>
                        </div>
                    </div>
                    <div class="chat-actions">
                        <button class="btn-icon" title="Call">
                            <i class="fas fa-phone"></i>
                        </button>
                        <button class="btn-icon" title="Video Call">
                            <i class="fas fa-video"></i>
                        </button>
                        <button class="btn-icon" title="More">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                    </div>
                </div>
                
                <div class="messages-container" id="messagesContainer">
                    <div class="welcome-message">
                        <i class="fas fa-comments"></i>
                        <h3>Welcome to ${data.businessName}</h3>
                        <p>Select a friend from the sidebar to start a conversation</p>
                    </div>
                </div>
                
                <div class="message-input-container" id="messageInputContainer">
                    <div class="message-input">
                        <button class="btn-icon" title="Attach File">
                            <i class="fas fa-paperclip"></i>
                        </button>
                        <input type="text" id="messageInput" placeholder="Type a message..." disabled>
                        <button class="btn-icon" id="sendBtn" title="Send Message" disabled>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Info Modal -->
    <div id="contactModal" class="modal hidden">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Contact Information</h3>
                <button class="btn-icon" id="closeContactModal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${data.contactEmail || 'support@chat.com'}</span>
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
    </div>

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
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #f0f2f5;
    color: #1c1e21;
    height: 100vh;
    overflow: hidden;
}

.app-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Login/Register Screens */
.login-screen {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
}

.login-container {
    background: white;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    width: 100%;
}

.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.login-header i {
    font-size: 3rem;
    color: #667eea;
    margin-bottom: 1rem;
}

.login-header h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1c1e21;
    margin-bottom: 0.5rem;
}

.login-header p {
    color: #65676b;
    font-size: 0.9rem;
}

.login-form h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #1c1e21;
    font-size: 1.5rem;
    font-weight: 600;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #1c1e21;
    font-size: 0.9rem;
}

.form-group input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e4e6ea;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    background: #f8f9fa;
}

.form-group input:focus {
    outline: none;
    border-color: #667eea;
    background: white;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    min-height: 48px;
}

.btn-primary {
    background: #667eea;
    color: white;
    width: 100%;
}

.btn-primary:hover {
    background: #5a6fd8;
    transform: translateY(-1px);
}

.btn-secondary {
    background: #f8f9fa;
    color: #1c1e21;
    border: 2px solid #e4e6ea;
    width: 100%;
}

.btn-secondary:hover {
    background: #e4e6ea;
}

.btn-small {
    padding: 8px 12px;
    font-size: 0.875rem;
    min-height: auto;
}

.btn-icon {
    background: none;
    border: none;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    color: #65676b;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
}

.btn-icon:hover {
    background: #f0f2f5;
    color: #1c1e21;
}

.divider {
    text-align: center;
    margin: 20px 0;
    position: relative;
}

.divider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e4e6ea;
}

.divider span {
    background: white;
    padding: 0 15px;
    color: #65676b;
    font-size: 0.875rem;
}

.hidden {
    display: none !important;
}

/* Chat Interface */
.chat-interface {
    height: 100vh;
    display: flex;
    background: white;
}

/* Sidebar */
.sidebar {
    width: 320px;
    background: #f8f9fa;
    border-right: 1px solid #e4e6ea;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.sidebar-header {
    padding: 20px;
    border-bottom: 1px solid #e4e6ea;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #667eea;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
}

.user-details {
    display: flex;
    flex-direction: column;
}

.user-name {
    font-weight: 600;
    color: #1c1e21;
    font-size: 0.9rem;
}

.user-status {
    font-size: 0.75rem;
    color: #65676b;
}

.user-status.online {
    color: #42b883;
}

.sidebar-section {
    padding: 20px;
    border-bottom: 1px solid #e4e6ea;
}

.section-header {
    margin-bottom: 15px;
}

.section-header h3 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #1c1e21;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.add-friend {
    display: flex;
    gap: 8px;
}

.add-friend input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #e4e6ea;
    border-radius: 20px;
    font-size: 0.875rem;
    background: white;
}

.add-friend input:focus {
    outline: none;
    border-color: #667eea;
}

.friends-list {
    max-height: 400px;
    overflow-y: auto;
}

.friend-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.3s ease;
}

.friend-item:hover {
    background: #e4e6ea;
    padding-left: 8px;
    padding-right: 8px;
}

.friend-item.active {
    background: #667eea;
    color: white;
    padding-left: 8px;
    padding-right: 8px;
}

.friend-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #667eea;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.875rem;
    position: relative;
}

.friend-item.active .friend-avatar {
    background: rgba(255, 255, 255, 0.2);
}

.friend-info {
    flex: 1;
}

.friend-name {
    font-weight: 500;
    font-size: 0.875rem;
}

.friend-id {
    font-size: 0.75rem;
    opacity: 0.7;
}

.online-indicator {
    width: 8px;
    height: 8px;
    background: #42b883;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 2px solid #f8f9fa;
}

.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #65676b;
}

.empty-state i {
    font-size: 2rem;
    margin-bottom: 10px;
    opacity: 0.5;
}

.empty-state p {
    font-size: 0.875rem;
    line-height: 1.4;
}

/* Chat Area */
.chat-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.chat-header {
    padding: 20px;
    border-bottom: 1px solid #e4e6ea;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
}

.chat-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.chat-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #667eea;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
}

.chat-details {
    display: flex;
    flex-direction: column;
}

.chat-name {
    font-weight: 600;
    color: #1c1e21;
    font-size: 1rem;
}

.chat-status {
    font-size: 0.75rem;
    color: #65676b;
}

.chat-actions {
    display: flex;
    gap: 8px;
}

.messages-container {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background: #f8f9fa;
    display: flex;
    flex-direction: column;
}

.welcome-message {
    text-align: center;
    padding: 60px 20px;
    color: #65676b;
}

.welcome-message i {
    font-size: 3rem;
    margin-bottom: 20px;
    opacity: 0.5;
}

.welcome-message h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #1c1e21;
}

.message {
    margin-bottom: 15px;
    display: flex;
    align-items: flex-end;
    gap: 8px;
}

.message.own {
    flex-direction: row-reverse;
}

.message-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #667eea;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.75rem;
    flex-shrink: 0;
}

.message-content {
    max-width: 70%;
}

.message-bubble {
    padding: 12px 16px;
    border-radius: 18px;
    font-size: 0.875rem;
    line-height: 1.4;
    word-wrap: break-word;
}

.message:not(.own) .message-bubble {
    background: white;
    color: #1c1e21;
    border-bottom-left-radius: 4px;
}

.message.own .message-bubble {
    background: #667eea;
    color: white;
    border-bottom-right-radius: 4px;
}

.message-time {
    font-size: 0.75rem;
    color: #65676b;
    margin-top: 4px;
    text-align: center;
}

.message-input-container {
    padding: 20px;
    background: white;
    border-top: 1px solid #e4e6ea;
}

.message-input {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #f0f2f5;
    border-radius: 20px;
    padding: 8px 16px;
}

.message-input input {
    flex: 1;
    border: none;
    background: none;
    padding: 8px 0;
    font-size: 0.875rem;
    color: #1c1e21;
}

.message-input input:focus {
    outline: none;
}

.message-input input:disabled {
    color: #65676b;
}

/* Modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    border-radius: 12px;
    max-width: 400px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid #e4e6ea;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-header h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1c1e21;
}

.modal-body {
    padding: 20px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.875rem;
}

.contact-item i {
    color: #667eea;
    width: 20px;
    text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
    
    .sidebar.active {
        transform: translateX(0);
    }
    
    .chat-interface {
        position: relative;
    }
    
    .login-container {
        padding: 30px 20px;
    }
    
    .message-content {
        max-width: 85%;
    }
}

/* Custom Scrollbar */
.friends-list::-webkit-scrollbar,
.messages-container::-webkit-scrollbar {
    width: 6px;
}

.friends-list::-webkit-scrollbar-track,
.messages-container::-webkit-scrollbar-track {
    background: #f0f2f5;
}

.friends-list::-webkit-scrollbar-thumb,
.messages-container::-webkit-scrollbar-thumb {
    background: #c1c7cd;
    border-radius: 3px;
}

.friends-list::-webkit-scrollbar-thumb:hover,
.messages-container::-webkit-scrollbar-thumb:hover {
    background: #a8b3ba;
}`,

  generateJs: (data: any) => `
class ChatApp {
    constructor() {
        this.currentUser = null;
        this.friends = [];
        this.activeChat = null;
        this.messages = {};
        this.users = [];
        
        this.initializeElements();
        this.bindEvents();
        this.initializeApp();
    }
    
    initializeElements() {
        // Screens
        this.loginScreen = document.getElementById('loginScreen');
        this.registerScreen = document.getElementById('registerScreen');
        this.chatInterface = document.getElementById('chatInterface');
        
        // Login form
        this.loginForm = document.getElementById('loginForm');
        this.showRegisterBtn = document.getElementById('showRegister');
        
        // Register form
        this.registerForm = document.getElementById('registerForm');
        this.showLoginBtn = document.getElementById('showLogin');
        
        // Chat interface
        this.currentUserName = document.getElementById('currentUserName');
        this.logoutBtn = document.getElementById('logoutBtn');
        this.friendsList = document.getElementById('friendsList');
        this.addFriendBtn = document.getElementById('addFriendBtn');
        this.friendUserIdInput = document.getElementById('friendUserId');
        
        // Chat area
        this.chatName = document.getElementById('chatName');
        this.chatStatus = document.getElementById('chatStatus');
        this.messagesContainer = document.getElementById('messagesContainer');
        this.messageInput = document.getElementById('messageInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.messageInputContainer = document.getElementById('messageInputContainer');
        
        // Modal
        this.contactModal = document.getElementById('contactModal');
        this.closeContactModal = document.getElementById('closeContactModal');
    }
    
    bindEvents() {
        // Form submissions
        this.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        this.registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        
        // Screen switching
        this.showRegisterBtn.addEventListener('click', () => this.showRegisterScreen());
        this.showLoginBtn.addEventListener('click', () => this.showLoginScreen());
        
        // Chat functionality
        this.logoutBtn.addEventListener('click', () => this.handleLogout());
        this.addFriendBtn.addEventListener('click', () => this.addFriend());
        this.friendUserIdInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addFriend();
        });
        
        // Message sending
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Modal
        this.closeContactModal.addEventListener('click', () => this.hideContactModal());
        this.contactModal.addEventListener('click', (e) => {
            if (e.target === this.contactModal) this.hideContactModal();
        });
    }
    
    initializeApp() {
        // Initialize with some demo users for testing
        this.users = [
            { userId: 'demo1', name: 'Demo User 1', email: 'demo1@example.com', password: 'password', online: true },
            { userId: 'demo2', name: 'Demo User 2', email: 'demo2@example.com', password: 'password', online: false },
            { userId: 'admin', name: 'Administrator', email: 'admin@example.com', password: 'admin', online: true }
        ];
        
        // Check if user is already logged in (localStorage)
        const savedUser = localStorage.getItem('chatAppUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.showChatInterface();
        } else {
            this.showLoginScreen();
        }
    }
    
    showLoginScreen() {
        this.loginScreen.classList.remove('hidden');
        this.registerScreen.classList.add('hidden');
        this.chatInterface.classList.add('hidden');
    }
    
    showRegisterScreen() {
        this.registerScreen.classList.remove('hidden');
        this.loginScreen.classList.add('hidden');
        this.chatInterface.classList.add('hidden');
    }
    
    showChatInterface() {
        this.chatInterface.classList.remove('hidden');
        this.loginScreen.classList.add('hidden');
        this.registerScreen.classList.add('hidden');
        
        if (this.currentUser) {
            this.currentUserName.textContent = this.currentUser.name;
            this.loadFriends();
        }
    }
    
    handleLogin(e) {
        e.preventDefault();
        
        const userId = document.getElementById('loginUserId').value.trim();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        // Simple validation
        const user = this.users.find(u => 
            u.userId === userId && u.email === email && u.password === password
        );
        
        if (user) {
            this.currentUser = user;
            localStorage.setItem('chatAppUser', JSON.stringify(user));
            this.showChatInterface();
            this.showNotification('Login successful!', 'success');
        } else {
            this.showNotification('Invalid credentials. Try demo1/demo1@example.com/password', 'error');
        }
    }
    
    handleRegister(e) {
        e.preventDefault();
        
        const userId = document.getElementById('registerUserId').value.trim();
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        
        // Check if user ID already exists
        if (this.users.find(u => u.userId === userId)) {
            this.showNotification('User ID already exists. Please choose another.', 'error');
            return;
        }
        
        // Check if email already exists
        if (this.users.find(u => u.email === email)) {
            this.showNotification('Email already registered. Please use another.', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            userId,
            name,
            email,
            password,
            online: true
        };
        
        this.users.push(newUser);
        this.currentUser = newUser;
        localStorage.setItem('chatAppUser', JSON.stringify(newUser));
        
        this.showChatInterface();
        this.showNotification('Account created successfully!', 'success');
    }
    
    handleLogout() {
        this.currentUser = null;
        this.friends = [];
        this.activeChat = null;
        this.messages = {};
        
        localStorage.removeItem('chatAppUser');
        localStorage.removeItem('chatAppFriends');
        localStorage.removeItem('chatAppMessages');
        
        this.showLoginScreen();
        this.showNotification('Logged out successfully!', 'success');
    }
    
    addFriend() {
        const friendUserId = this.friendUserIdInput.value.trim();
        
        if (!friendUserId) {
            this.showNotification('Please enter a friend\\'s user ID', 'error');
            return;
        }
        
        if (friendUserId === this.currentUser.userId) {
            this.showNotification('You cannot add yourself as a friend', 'error');
            return;
        }
        
        // Check if friend exists
        const friend = this.users.find(u => u.userId === friendUserId);
        if (!friend) {
            this.showNotification('User not found. Try demo1, demo2, or admin', 'error');
            return;
        }
        
        // Check if already friends
        if (this.friends.find(f => f.userId === friendUserId)) {
            this.showNotification('Already friends with this user', 'error');
            return;
        }
        
        this.friends.push(friend);
        this.saveFriends();
        this.renderFriends();
        this.friendUserIdInput.value = '';
        
        this.showNotification(\`Added \${friend.name} as a friend!\`, 'success');
    }
    
    loadFriends() {
        const savedFriends = localStorage.getItem('chatAppFriends');
        if (savedFriends) {
            this.friends = JSON.parse(savedFriends);
        }
        
        const savedMessages = localStorage.getItem('chatAppMessages');
        if (savedMessages) {
            this.messages = JSON.parse(savedMessages);
        }
        
        this.renderFriends();
    }
    
    saveFriends() {
        localStorage.setItem('chatAppFriends', JSON.stringify(this.friends));
    }
    
    saveMessages() {
        localStorage.setItem('chatAppMessages', JSON.stringify(this.messages));
    }
    
    renderFriends() {
        if (this.friends.length === 0) {
            this.friendsList.innerHTML = \`
                <div class="empty-state">
                    <i class="fas fa-users"></i>
                    <p>No friends yet. Add some friends to start chatting!</p>
                </div>
            \`;
            return;
        }
        
        this.friendsList.innerHTML = this.friends.map(friend => \`
            <div class="friend-item" data-user-id="\${friend.userId}">
                <div class="friend-avatar">
                    <i class="fas fa-user"></i>
                    \${friend.online ? '<div class="online-indicator"></div>' : ''}
                </div>
                <div class="friend-info">
                    <div class="friend-name">\${friend.name}</div>
                    <div class="friend-id">@\${friend.userId}</div>
                </div>
            </div>
        \`).join('');
        
        // Add click events to friend items
        this.friendsList.querySelectorAll('.friend-item').forEach(item => {
            item.addEventListener('click', () => {
                const userId = item.dataset.userId;
                this.selectChat(userId);
            });
        });
    }
    
    selectChat(friendUserId) {
        const friend = this.friends.find(f => f.userId === friendUserId);
        if (!friend) return;
        
        this.activeChat = friend;
        
        // Update active friend styling
        this.friendsList.querySelectorAll('.friend-item').forEach(item => {
            item.classList.remove('active');
        });
        this.friendsList.querySelector(\`[data-user-id="\${friendUserId}"]\`).classList.add('active');
        
        // Update chat header
        this.chatName.textContent = friend.name;
        this.chatStatus.textContent = friend.online ? 'Online' : 'Last seen recently';
        
        // Enable message input
        this.messageInput.disabled = false;
        this.sendBtn.disabled = false;
        this.messageInput.placeholder = \`Message \${friend.name}...\`;
        
        // Load and display messages
        this.renderMessages(friendUserId);
        
        // Focus message input
        this.messageInput.focus();
    }
    
    renderMessages(friendUserId) {
        const chatId = this.getChatId(this.currentUser.userId, friendUserId);
        const chatMessages = this.messages[chatId] || [];
        
        if (chatMessages.length === 0) {
            this.messagesContainer.innerHTML = \`
                <div class="welcome-message">
                    <i class="fas fa-comments"></i>
                    <h3>Start a conversation</h3>
                    <p>Send a message to \${this.activeChat.name} to begin chatting</p>
                </div>
            \`;
            return;
        }
        
        this.messagesContainer.innerHTML = chatMessages.map(message => {
            const isOwn = message.senderId === this.currentUser.userId;
            const time = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            return \`
                <div class="message \${isOwn ? 'own' : ''}">
                    <div class="message-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-bubble">\${this.escapeHtml(message.text)}</div>
                        <div class="message-time">\${time}</div>
                    </div>
                </div>
            \`;
        }).join('');
        
        // Scroll to bottom
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    sendMessage() {
        const text = this.messageInput.value.trim();
        
        if (!text || !this.activeChat) return;
        
        const message = {
            id: Date.now(),
            senderId: this.currentUser.userId,
            receiverId: this.activeChat.userId,
            text: text,
            timestamp: Date.now()
        };
        
        const chatId = this.getChatId(this.currentUser.userId, this.activeChat.userId);
        
        if (!this.messages[chatId]) {
            this.messages[chatId] = [];
        }
        
        this.messages[chatId].push(message);
        this.saveMessages();
        
        // Clear input
        this.messageInput.value = '';
        
        // Re-render messages
        this.renderMessages(this.activeChat.userId);
        
        // Simulate auto-reply (for demo purposes)
        setTimeout(() => {
            this.simulateReply();
        }, 1000 + Math.random() * 2000);
    }
    
    simulateReply() {
        if (!this.activeChat) return;
        
        const replies = [
            "That's interesting!",
            "I see what you mean.",
            "Thanks for sharing!",
            "How are you doing?",
            "Great to hear from you!",
            "What do you think about that?",
            "I agree with you.",
            "That sounds good!",
            "Tell me more about it.",
            "Nice!"
        ];
        
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        const replyMessage = {
            id: Date.now(),
            senderId: this.activeChat.userId,
            receiverId: this.currentUser.userId,
            text: randomReply,
            timestamp: Date.now()
        };
        
        const chatId = this.getChatId(this.currentUser.userId, this.activeChat.userId);
        
        if (!this.messages[chatId]) {
            this.messages[chatId] = [];
        }
        
        this.messages[chatId].push(replyMessage);
        this.saveMessages();
        
        // Re-render messages if this chat is still active
        if (this.activeChat.userId === replyMessage.senderId) {
            this.renderMessages(this.activeChat.userId);
        }
    }
    
    getChatId(userId1, userId2) {
        return [userId1, userId2].sort().join('_');
    }
    
    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = \`notification \${type}\`;
        notification.innerHTML = \`
            <div class="notification-content">
                <i class="fas fa-\${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>\${message}</span>
            </div>
        \`;
        
        // Add styles
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#42b883' : '#e74c3c'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            z-index: 2000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        \`;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    showContactModal() {
        this.contactModal.classList.remove('hidden');
    }
    
    hideContactModal() {
        this.contactModal.classList.add('hidden');
    }
}

// Initialize the chat app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ChatApp();
});

// Add some additional styling for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = \`
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-content i {
        font-size: 1.1rem;
    }
    
    .notification-content span {
        font-weight: 500;
        font-size: 0.9rem;
    }
\`;
document.head.appendChild(notificationStyles);`
};
