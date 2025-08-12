// components/FAQs.js
import { useState } from "react";
import "../styles/faqs.css";


const faqs = [
  {
    question: "What is Glim?",
    answer:
      "Glim is a cross-border payment platform that lets businesses send and receive international payments instantly, securely, and without middlemen.",
    category: "general"
  },
  {
    question: "Which countries are supported?",
    answer:
      "Glim supports most major countries for sending and receiving international payments. We're continuously expanding our coverage.",
    category: "general"
  },
  {
    question: "How secure is Glim?",
    answer:
      "Security is our top priority. We use industry-standard encryption and follow regulatory compliance for all transactions.",
    category: "security"
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees. All charges are transparently shown before you confirm a transaction.",
    category: "pricing"
  },
  {
    question: "Is Glim a crypto company?",
    answer:
      "No, Glim is not a crypto company. However, we leverage stablecoins — digital currencies pegged 1:1 with fiat (like USD or EUR) — to enable instant, low-cost international transfers. They combine the speed of blockchain with the trust of traditional currency.",
    category: "technical"
  },
  {
    question: "How is Glim different from Wise or PayPal?",
    answer:
      "Unlike Wise or PayPal which rely on traditional banking rails, Glim uses blockchain rails and stablecoins to settle payments globally in near real-time with lower fees and better transparency. It's faster, borderless, and made for modern B2B.",
    category: "comparison"
  },
  {
    question: "How long does it take to receive payments?",
    answer:
      "Most payments on Glim are received within minutes. Since we use stablecoins and real-time settlement mechanisms, delays common in traditional banking are avoided.",
    category: "speed"
  },
];

const categoryIcons = {
  general: "🔥",
  security: "🔒",
  pricing: "💰",
  technical: "⚡",
  comparison: "⚖️",
  speed: "🚀"
};

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="faqs-section" id="faqs">
      <div className="faqs-background">
        <div className="faq-gradient-orb faq-orb-1"></div>
        <div className="faq-gradient-orb faq-orb-2"></div>
        <div className="faq-gradient-orb faq-orb-3"></div>
      </div>

      <div className="faqs-container">
        <div className="faqs-header">
          <div className="section-badge">
            <span className="badge-icon">❓</span>
            <span>FAQ</span>
          </div>
          
          <h2 className="faqs-title">
            Frequently Asked
            <span className="title-highlight"> Questions</span>
          </h2>
          
          <p className="faqs-subtitle">
            Everything you need to know about Glim's cross-border payment platform.
            Can't find what you're looking for? Contact our support team.
          </p>

          <div className="search-container">
            <div className="search-wrapper">
              <svg className="search-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="faqs-grid">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                key={index}
                onClick={() => toggle(index)}
              >
                <div className="faq-question">
                  <div className="question-content">
                    <span className="question-icon">
                      {categoryIcons[item.category]}
                    </span>
                    <span className="question-text">{item.question}</span>
                  </div>
                  <div className="toggle-icon">
                    <svg 
                      className={`chevron ${activeIndex === index ? "rotated" : ""}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className={`faq-answer ${activeIndex === index ? "expanded" : ""}`}>
                  <div className="answer-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No FAQs found</h3>
              <p>Try adjusting your search terms or browse all questions above.</p>
              <button 
                className="clear-search-btn"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQs;