import { useState } from "react";
import "../styles/EarlyAccess.css";
import { submitLead } from "../services/firestoreService";

const EarlyAccess = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    companySize: "",
    painPoints: "",
    willingness: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData = {
      name: formData.fullName,
      company: formData.company,
      email: formData.email,
      country: formData.country,
      phone: formData.phone,
      companySize: formData.companySize,
      painPoints: formData.painPoints,
      willingness: formData.willingness,
    };

    try {
      const response = await submitLead(leadData);
      if (response.success) {
        setSubmissionStatus("success");
        setFormData({
          fullName: "",
          company: "",
          email: "",
          country: "",
          phone: "",
          companySize: "",
          painPoints: "",
          willingness: "",
        });
      } else {
        console.error("Submission failed:", response.error);
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  return (
    <section className="early-access" id="early-access">
      <div className="background-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>

      <div className="early-access__container">
        <div className="early-access__content">
          <div className="content-badge">
            <span className="badge-icon">🚀</span>
            <span className="badge-text">Early Access</span>
          </div>
          
          <h2 className="main-heading">
            Get Access <span className="gradient-text">Now</span>
          </h2>
          
          <p className="main-description">
            Join the future of digital banking and get <strong>20% discount</strong> on your payment fees as an early adopter
          </p>

          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon">✨</div>
              <span>Priority access to new features</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔒</div>
              <span>Enterprise-grade security</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <span>Lightning-fast transactions</span>
            </div>
          </div>
        </div>

        <div className="early-access__form-container">
          <div className="form-header">
            <h3>Let's get started</h3>
            <p>Fill out the form below to secure your early access</p>
          </div>

          <form className="early-access__form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your work email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="companySize">Company Size</label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1–10 employees</option>
                  <option value="11-50">11–50 employees</option>
                  <option value="51-200">51–200 employees</option>
                  <option value="201-500">201–500 employees</option>
                  <option value="501-1000">501–1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div className="input-group full-width">
                <label htmlFor="willingness">Pilot Testing Interest</label>
                <select
                  id="willingness"
                  name="willingness"
                  value={formData.willingness}
                  onChange={handleChange}
                  required
                >
                  <option value="">Are you open to pilot testing?</option>
                  <option value="yes">Yes, definitely interested</option>
                  <option value="maybe">Maybe, tell me more</option>
                  <option value="no">Not right now</option>
                </select>
              </div>

              <div className="input-group full-width">
                <label htmlFor="painPoints">Current Challenges (Optional)</label>
                <input
                  type="text"
                  id="painPoints"
                  name="painPoints"
                  placeholder="Tell us about your current payment challenges"
                  value={formData.painPoints}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Submitting...
                </>
              ) : (
                <>
                  <span>Get Early Access</span>
                  <span className="button-arrow">→</span>
                </>
              )}
            </button>

            {submissionStatus === "success" && (
              <div className="form-message success">
                <div className="message-icon">🎉</div>
                <div>
                  <strong>Welcome aboard!</strong>
                  <p>Thanks for signing up! We'll be in touch soon with your early access details.</p>
                </div>
              </div>
            )}
            
            {submissionStatus === "error" && (
              <div className="form-message error">
                <div className="message-icon">⚠️</div>
                <div>
                  <strong>Something went wrong</strong>
                  <p>Please check your connection and try again.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
