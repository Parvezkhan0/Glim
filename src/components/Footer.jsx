import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <h2>Glim</h2>
              <div className="logo-tagline">Lightning-fast cross-border payments</div>
            </div>
            <p className="footer-description">
              Revolutionizing B2B payments with sub-30 minute settlements between India and USA. 
              Experience the future of international transfers with up to 70% lower fees.
            </p>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/company/gilmpay/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="Follow GlimPay on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h3>Product</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#hero">Join Waitlist</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="#early-access">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3>Legal & Support</h3>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div class="footer-legal">
              <span>&copy; 2025 GlimPay. All rights reserved.</span>
              <div className="launch-status">
                <span className="status-badge">🚀 Pre-Launch</span>
              </div>
            </div>
            <div className="footer-badges">
              <div className="compliance-badge">
                <span className="badge-icon">🛡️</span>
                <span>Bank-Grade Security</span>
              </div>
              <div className="compliance-badge">
                <span className="badge-icon">⚡</span>
                <span>&lt;30min Settlement</span>
              </div>
              <div className="compliance-badge">
                <span className="badge-icon">🌍</span>
                <span>India ↔ USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
