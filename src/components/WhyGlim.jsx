// WhyGlim.jsx
import { useState, useEffect } from "react";
import "../styles/whyGlim.css";
import { FaRocket, FaShieldAlt, FaGlobe, FaChartLine, FaClock, FaMoneyBillWave } from "react-icons/fa";

const WhyGlim = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="why-glim-section" id="features">
      <div className="why-glim-container">
        <div className="why-glim-header">
          <h2>Why SaaS companies choose Glim for international payments</h2>
          <p>
            Built specifically for modern businesses that need fast, transparent, 
            and cost-effective cross-border payments. Starting with the most 
            demanding corridor and expanding globally.
          </p>
        </div>

        <div className="why-glim-content">
          <div className="why-glim-left">
            <div className="visual-hero">
              <div className="money-flow-container">
                <div className="country-node india">
                  <div className="flag">🇮🇳</div>
                  <div className="country-label">India</div>
                  <div className="currency">₹ INR</div>
                </div>

                <div className="flow-path">
                  <div className={`money-particle ${animationPhase === 0 ? 'active' : ''}`}>💸</div>
                  <div className={`money-particle ${animationPhase === 1 ? 'active' : ''}`}>💰</div>
                  <div className={`money-particle ${animationPhase === 2 ? 'active' : ''}`}>💳</div>
                  
                  <div className="glim-logo">
                    <div className="logo-circle">G</div>
                    <div className="processing-text">Processing...</div>
                  </div>

                  <div className="flow-line">
                    <div className="flow-animation"></div>
                  </div>
                </div>

                <div className="country-node usa">
                  <div className="flag">🇺🇸</div>
                  <div className="country-label">United States</div>
                  <div className="currency">$ USD</div>
                </div>
              </div>

              <div className="flow-stats">
                <div className="stat-item">
                  <div className="stat-value"> 30 min</div>
                  <div className="stat-label">Settlement Time</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">70%</div>
                  <div className="stat-label">Cost Savings</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">1.5%</div>
                  <div className="stat-label">Flat Fee</div>
                </div>
              </div>

              <div className="savings-highlight">
                <div className="savings-card">
                  <div className="savings-amount">Save up to 70%</div>
                  <div className="savings-text">on international payment fees</div>
                </div>
                <div className="speed-card">
                  <div className="speed-amount">30 min</div>
                  <div className="speed-text">average settlement time</div>
                </div>
              </div>
            </div>
          </div>

          <div className="why-glim-right">
            <div className="features-grid">
              <div className="feature-card premium">
                <div className="feature-icon">
                  <FaMoneyBillWave />
                </div>
                <h4>Transparent Pricing, No Hidden Fees</h4>
                <p>
                  What you see is what you pay. Our 1.5% flat fee includes everything - 
                  no surprise charges, no markup on exchange rates, no withdrawal fees.
                </p>
                <div className="feature-badge">Up to 70% savings</div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaClock />
                </div>
                <h4>Lightning Fast Settlements</h4>
                <p>
                  Your clients pay, you receive money in under 30 minutes. 
                  No more waiting 3-5 business days for wire transfers.
                </p>
                <div className="feature-badge">30 min average</div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaChartLine />
                </div>
                <h4>Real Mid-Market Exchange Rates</h4>
                <p>
                  Get the same rates that banks use to trade with each other. 
                  No 3-4% markup like traditional processors.
                </p>
                <div className="feature-badge">Bank-level rates</div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaShieldAlt />
                </div>
                <h4>Enterprise-Grade Security</h4>
                <p>
                  Bank-level security with full regulatory compliance across all 
                  jurisdictions. Your money is protected at every step.
                </p>
                <div className="feature-badge">Fully regulated</div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaRocket />
                </div>
                <h4>Built for SaaS Workflows</h4>
                <p>
                  Integrate with your billing system, automate recurring payments, 
                  and get real-time notifications for every transaction.
                </p>
                <div className="feature-badge">API-first</div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaGlobe />
                </div>
                <h4>Global Expansion Ready</h4>
                <p>
                  Starting with the high-demand corridors, expanding to serve 
                  businesses worldwide. One platform for all your international payments.
                </p>
                <div className="feature-badge">Coming soon</div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-glim-cta">
          <div className="cta-content">
            <h3>Ready to cut your payment costs by 70%?</h3>
            <p>Join forward-thinking SaaS companies already saving thousands monthly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGlim;
