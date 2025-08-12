import { useState } from 'react';
import { ArrowRight, Check, Calculator, Globe, Shield, Zap } from 'lucide-react';
import '../styles/PricingPage.css';

const PricingPage = ({ onClose }) => {
  const [transferAmount, setTransferAmount] = useState('');
  const [calculatedFee, setCalculatedFee] = useState(null);

  const calculateFee = (amount) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return null;

    if (numAmount <= 1000) return 18;
    if (numAmount <= 5000) return 90;
    if (numAmount <= 10000) return 150;
    if (numAmount <= 15000) return 225;
    if (numAmount <= 20000) return Math.round(numAmount * 0.01 + 200);
    return Math.round(numAmount * 0.01 + 200);
  };

  const handleCalculate = () => {
    const fee = calculateFee(transferAmount);
    setCalculatedFee(fee);
  };

  const pricingTiers = [
    { range: 'Up to $1,000', fee: '$18', popular: false },
    { range: '$1,001 - $5,000', fee: '$90', popular: false },
    { range: '$5,001 - $10,000', fee: '$150', popular: true },
    { range: '$10,001 - $15,000', fee: '$225', popular: false },
    { range: '$15,001 - $20,000', fee: '1% + $200', popular: false },
    { range: '$20,001+', fee: '1% + $200', popular: false }
  ];

  const features = [
    { icon: <Globe className="w-5 h-5" />, title: 'Global Reach', desc: 'Send to 190+ countries' },
    { icon: <Shield className="w-5 h-5" />, title: 'Bank-Level Security', desc: 'End-to-end encryption' },
    { icon: <Zap className="w-5 h-5" />, title: 'Fast Transfers', desc: 'Same-day processing' },
    { icon: <Calculator className="w-5 h-5" />, title: 'Transparent Fees', desc: 'No hidden charges' }
  ];

  return (
    <div className="pricing-overlay">
      <div className="pricing-container">
        <button onClick={onClose} className="close-button">×</button>
        
        {/* Header */}
        <div className="pricing-header">
          <h1>Simple, Transparent Pricing</h1>
          <p>Pay only what you see. No hidden fees, no surprises.</p>
        </div>

        {/* Fee Calculator */}
        <div className="fee-calculator">
          <h2>Calculate Your Transfer Fee</h2>
          <div className="calculator-input">
            <div className="input-group">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                placeholder="Enter transfer amount"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
              />
              <button onClick={handleCalculate} className="calculate-btn">
                Calculate
              </button>
            </div>
            {calculatedFee && (
              <div className="fee-result">
                <div className="fee-breakdown">
                  <div className="fee-item">
                    <span>Transfer Amount:</span>
                    <span>${parseFloat(transferAmount).toLocaleString()}</span>
                  </div>
                  <div className="fee-item fee-highlight">
                    <span>Our Fee:</span>
                    <span>${calculatedFee}</span>
                  </div>
                  <div className="fee-item total">
                    <span>Total Cost:</span>
                    <span>${(parseFloat(transferAmount) + calculatedFee).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="pricing-tiers">
          <h2>Pricing Structure</h2>
          <div className="tiers-grid">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`tier-card ${tier.popular ? 'popular' : ''}`}>
                {tier.popular && <div className="popular-badge">Most Popular</div>}
                <div className="tier-range">{tier.range}</div>
                <div className="tier-fee">{tier.fee}</div>
                <div className="tier-features">
                  <div className="feature-item">
                    <Check className="w-4 h-4" />
                    <span>Real-time tracking</span>
                  </div>
                  <div className="feature-item">
                    <Check className="w-4 h-4" />
                    <span>24/7 support</span>
                  </div>
                  <div className="feature-item">
                    <Check className="w-4 h-4" />
                    <span>Secure transfers</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="value-section">
          <h2>Why Choose Our Service?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Ready to Send Money?</h2>
          <p>Join thousands of businesses who trust us with their international transfers</p>
          <button className="cta-button">
            Start Your Transfer
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Note */}
        <div className="pricing-footer">
          <p>* Exchange rates are live and competitive. All fees shown are final - no additional charges.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;