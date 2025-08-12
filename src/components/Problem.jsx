// Problem.jsx
import React from "react";
import "../styles/problem.css";
import { FaStopwatch, FaMoneyBillWave, FaExchangeAlt, FaChartLine, FaCreditCard, FaShieldAlt } from "react-icons/fa";

const problems = [
  {
    icon: <FaMoneyBillWave />,
    title: "Stripe & PayPal eat 3-5% of revenue",
    description: "Plus currency conversion fees, withdrawal charges, and hidden costs that kill your margins.",
    stat: "Up to 6% total fees"
  },
  {
    icon: <FaStopwatch />,
    title: "Wire transfers take 3-5 business days",
    description: "Your US clients want to pay you fast, but traditional banking makes them wait days.",
    stat: "$25-50 per transfer"
  },
  {
    icon: <FaChartLine />,
    title: "Cash flow gaps hurt growth",
    description: "Delayed payments mean you can't reinvest in marketing, hiring, or product development quickly.",
    stat: "5-7 day delays"
  },
  {
    icon: <FaCreditCard />,
    title: "Limited payment options for clients",
    description: "US businesses prefer ACH transfers, but you're stuck with expensive wire transfers or high-fee processors.",
    stat: "Lost clients due to friction"
  },
  {
    icon: <FaExchangeAlt />,
    title: "Poor exchange rates cost thousands",
    description: "Banks and payment processors give you terrible USD-INR rates, costing 2-4% on every transaction.",
    stat: "2-4% FX loss"
  },
  {
    icon: <FaShieldAlt />,
    title: "Complex compliance & tax headaches",
    description: "Export documentation, FEMA compliance, GST exemptions - too much paperwork for every payment.",
    stat: "Hours of manual work"
  }
];

const Problem = () => {
  return (
    <section className="problem-section">
      <div className="problem-hero">
        <h2 className="problem-heading">
          Your SaaS is growing. Your payment costs are killing you.
        </h2>
        <p className="problem-subheading">
          Indian SaaS companies lose <strong>$2,500–$6,000 monthly</strong> to payment processing fees, 
          slow transfers, and poor exchange rates when collecting from US customers.
        </p>
      </div>

      <div className="problem-visual">
        <div className="cost-comparison">
          <div className="current-cost">
            <h4>What you pay today</h4>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span>Stripe/PayPal fees</span>
                <span className="cost-amount">3.5%</span>
              </div>
              <div className="cost-item">
                <span>Currency conversion</span>
                <span className="cost-amount">2.5%</span>
              </div>
              <div className="cost-item">
                <span>Wire transfer fees</span>
                <span className="cost-amount">$35</span>
              </div>
              <div className="cost-total">
                <span>Total cost on $10K</span>
                <span className="cost-amount highlight">$635</span>
              </div>
            </div>
          </div>
          <div className="vs-divider">VS</div>
          <div className="glim-cost">
            <h4>With Glim</h4>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span>Platform fee</span>
                <span className="cost-amount">1.5%</span>
              </div>
              <div className="cost-item">
                <span>Real exchange rate</span>
                <span className="cost-amount">0%</span>
              </div>
              <div className="cost-item">
                <span>No hidden fees</span>
                <span className="cost-amount">$0</span>
              </div>
              <div className="cost-total">
                <span>Total cost on $10K</span>
                <span className="cost-amount glim-highlight">$150</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="problem-grid">
        {problems.map((item, index) => (
          <div className="problem-card" key={index}>
            <div className="icon-wrapper">{item.icon}</div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="stat-badge">{item.stat}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="problem-impact">
        <h3>The real cost of slow, expensive payments</h3>
        <div className="impact-stats">
          <div className="impact-item">
            <div className="impact-number">$4,000+</div>
            <div className="impact-label">Average monthly loss on fees</div>
          </div>
          <div className="impact-item">
            <div className="impact-number">47%</div>
            <div className="impact-label">SaaS companies considering US entity</div>
          </div>
          <div className="impact-item">
            <div className="impact-number">5-7 days</div>
            <div className="impact-label">Average payment delay</div>
          </div>
        </div>
      </div>

      <div className="problem-cta">
        <p>
          Every day you wait, you lose money.<br />
          <span>It's time to switch to <strong className="glim-text">Glim</strong>.</span>
        </p>
      </div>
    </section>
  );
};

export default Problem;