import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "prasannadondla1309@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-number">06</span>
            <span className="tag-line"></span>
            <span className="tag-label">Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have an opportunity, internship role, or project collaboration? I’d love to hear from you.
          </p>
        </div>

        <div className="contact-card-main">
          {/* Availability pill */}
          <div className="contact-status-bar">
            <span className="pulse-indicator"></span>
            <span className="status-label">
              Open to internships, entry-level roles, and technical collaborations
            </span>
          </div>

          <p className="contact-message">
            I’m interested in opportunities involving{" "}
            <strong>Java, Spring Boot, backend engineering, web technologies, and cloud computing.</strong>{" "}
            I enjoy building practical applications and would be happy to discuss potential roles,
            internships, or software projects.
          </p>

          <div className="contact-channels-grid">
            {/* Email card */}
            <div className="contact-method-card">
              <div className="method-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>

              <div className="method-details">
                <span className="method-type">Direct Email</span>
                <a href={`mailto:${email}`} className="method-value">
                  {email}
                </a>
              </div>

              <div className="method-actions">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="copy-btn"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <span className="copied-text">✓ Copied</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="open-link-btn"
                  aria-label="Send email"
                >
                  ↗
                </a>
              </div>
            </div>

            {/* LinkedIn card */}
            <div className="contact-method-card">
              <div className="method-icon-box linkedin">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>

              <div className="method-details">
                <span className="method-type">Professional Network</span>
                <span className="method-value">Dondla Prasanna</span>
              </div>

              <div className="method-actions">
                <a
                  href="https://www.linkedin.com/in/dondla-prasanna-174a72368"
                  target="_blank"
                  rel="noreferrer"
                  className="open-social-btn"
                  aria-label="Visit LinkedIn Profile"
                >
                  <span>Connect</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* GitHub card */}
            <div className="contact-method-card">
              <div className="method-icon-box github">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>

              <div className="method-details">
                <span className="method-type">Code Repository</span>
                <span className="method-value">@dondla27</span>
              </div>

              <div className="method-actions">
                <a
                  href="https://github.com/dondla27"
                  target="_blank"
                  rel="noreferrer"
                  className="open-social-btn"
                  aria-label="Visit GitHub Profile"
                >
                  <span>Explore</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

