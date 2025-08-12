import { useState, useEffect } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#') return;

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <div className="logo-icon">
            <div className="logo-cube">
              <div className="cube-face cube-front"></div>
              <div className="cube-face cube-back"></div>
              <div className="cube-face cube-right"></div>
              <div className="cube-face cube-left"></div>
              <div className="cube-face cube-top"></div>
              <div className="cube-face cube-bottom"></div>
            </div>
          </div>
          <span className="logo-text">Glim</span>
          <span className="logo-badge">Beta</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="nav-link">
            Home
          </a>
          <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="nav-link">
            Features
          </a>
          <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="nav-link">
            How it Works
          </a>
          {/* Removed Pricing and API Docs from desktop */}
        </nav>

        {/* CTA Buttons */}
        <div className="header-cta desktop-cta">
          <button 
            className="btn-primary"
            onClick={(e) => handleNavClick(e, '#early-access')}
          >
            <span>Get Started</span>
            <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-content">
          <nav className="mobile-nav-links">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="mobile-nav-link">
              <span className="mobile-link-icon">⚡</span>
              <span>Home</span>
            </a>
            <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="mobile-nav-link">
              <span className="mobile-link-icon">🔄</span>
              <span>Features</span>
            </a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="mobile-nav-link">
              <span className="mobile-link-icon">🔒</span>
              <span>How it Works</span>
            </a>
            {/* Removed Pricing and API Docs from mobile */}
          </nav>

          <div className="mobile-nav-cta">
            <button
              className="mobile-btn-primary"
              onClick={(e) => handleNavClick(e, '#early-access')}
            >
              <span>Get Started</span>
              <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
