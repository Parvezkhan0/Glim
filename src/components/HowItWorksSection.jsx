import '../styles/howItWorks.css';

const steps = [
  {
    title: 'Login securely to your Glim account',
    image: '/howitworks/login.png.png',
    description: 'Access your dashboard with enterprise-grade security and biometric authentication',
    stepNumber: '01'
  },
  {
    title: 'Track balances & activity from your dashboard',
    image: '/howitworks/dashboard.png.png',
    description: 'Monitor your financial overview with real-time analytics and comprehensive insights',
    stepNumber: '02'
  },
  {
    title: 'Add your payment method to start transacting instantly',
    image: '/howitworks/card.png.png',
    description: 'Connect your preferred payment methods with bank-level security and instant verification',
    stepNumber: '03'
  },
  {
    title: 'Send money globally in minutes',
    image: '/howitworks/transfer.png.png',
    description: 'Transfer funds worldwide with competitive rates and lightning-fast processing',
    stepNumber: '04'
  },
  {
    title: 'View and manage all your transactions',
    image: '/howitworks/transactions.png.png',
    description: 'Complete transaction history with advanced filtering and detailed analytics',
    stepNumber: '05'
  },
];

const HowItWorksSection = () => {
  return (
    <div className="how-it-works-scroll-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-text">How It Works</span>
          </div>
          <h2 className="how-it-works-title">
            Get Started in <span className="gradient-text">5 Simple Steps</span>
          </h2>
          <p className="subtitle">Experience the future of digital banking with our streamlined process</p>
        </div>

        <div className="steps-container">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`how-it-works-step ${index % 2 === 1 ? 'reverse' : ''} bg-step-${index + 1}`}
            >
              <div className="text-content">
                <div className="step-number">{item.stepNumber}</div>
                <div className="step-label">Step {index + 1}</div>
                <h3 className="step-heading">{item.title}</h3>
                <p className="step-description">{item.description}</p>
                <div className="step-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Secure & Fast</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>24/7 Support</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Bank-Grade Security</span>
                  </div>
                </div>
              </div>

              <div className="image-container">
                <div className="image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="step-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <button className="cta-button">
            <span>Start Your Journey</span>
            <div className="button-arrow">→</div>
          </button>
          <p className="cta-text">Join thousands who trust Glim for their financial needs</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
