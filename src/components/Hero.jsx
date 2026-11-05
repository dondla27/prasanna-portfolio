export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background ambient lighting */}
      <div className="hero-glow glow-primary" />
      <div className="hero-glow glow-secondary" />
      <div className="hero-grid-pattern" />

      <div className="hero-container">
        {/* Left column: Introduction */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">Open to Opportunities</span>
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-title">
            Dondla <span className="gradient-name">Prasanna</span>
          </h1>

          <h2 className="hero-subtitle">
            Computer Science and Engineering Student
          </h2>

          <p className="hero-description">
            I build practical software solutions using Java, Spring Boot, web
            technologies, and modern development tools. I enjoy turning ideas into
            real-world applications.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>

            <a href="#contact" className="btn btn-secondary">
              <span>Let's Connect</span>
            </a>

            <a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              <span>Download Resume</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          {/* Core Tech Stack */}
          <div className="hero-tech-strip">
            <span className="tech-strip-label">Core Stack:</span>
            <div className="tech-pills">
              <span className="tech-pill">Java</span>
              <span className="tech-pill">Spring Boot</span>
              <span className="tech-pill">React</span>
              <span className="tech-pill">MySQL</span>
            </div>
          </div>
        </div>

        {/* Right column: Profile Photo Showcase */}
        <div className="hero-image-wrapper">
          <div className="profile-backdrop-glow"></div>
          <div className="profile-orbit-ring ring-outer"></div>
          <div className="profile-orbit-ring ring-inner"></div>

          <div className="profile-card-frame">
            <img
              src="/profile.jpg"
              alt="Dondla Prasanna"
              className="profile-photo"
              loading="eager"
            />
            <div className="profile-card-sheen" />
          </div>

          {/* Floating badge 1: Java */}
          <div className="floating-card float-top">
            <div className="floating-icon-box">
              <span className="floating-emoji">☕</span>
            </div>
            <div className="floating-text">
              <strong>Java Developer</strong>
              <small>Spring Boot Focused</small>
            </div>
          </div>

          {/* Floating badge 2: Cloud */}
          <div className="floating-card float-bottom">
            <div className="floating-icon-box">
              <span className="floating-emoji">☁️</span>
            </div>
            <div className="floating-text">
              <strong>Cloud Learner</strong>
              <small>AWS Certification Prep</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

