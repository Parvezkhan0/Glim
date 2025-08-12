import { useState } from 'react';
import '../styles/components/hero.css';
import { submitLead } from '../services/firestoreService';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await submitLead({ email });
      setStatus(response.success ? 'success' : 'error');
      if (response.success) setEmail('');
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div className="hero-container" id="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-icon">⚡</span>
            <span>Sub-30 minute settlements</span>
          </div>

          <h1 className="hero-title">
            Cross-border payments,
            <span className="hero-highlight">reimagined</span>
          </h1>

          <p className="hero-subtitle">
            Skip the banks. Skip the delays. Send money from India to USA in under 30 minutes 
            with 70% lower fees than traditional providers.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">&lt;30min</div>
              <div className="stat-label">Settlement Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">70%</div>
              <div className="stat-label">Lower Fees</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available</div>
            </div>
          </div>

          <form className="email-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                Get Early Access
                <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="form-message success">
              <svg className="message-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Thanks! We'll reach out within 24 hours.
            </div>
          )}
          {status === 'error' && (
            <div className="form-message error">
              <svg className="message-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Something went wrong. Please try again.
            </div>
          )}
        </div>

        <div className="hero-right">
          <div className="dashboard-image-container">
            <img 
              src="/howitworks/dashboard.png.png" 
              alt="Glim Dashboard - Cross-border payment interface showing recent transfer from India to USA" 
              className="dashboard-image" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
