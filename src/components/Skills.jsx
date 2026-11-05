export default function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Backend Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      description:
        "Building practical backend applications and database-driven systems with robust architecture.",
      skills: ["Java", "Spring Boot", "REST APIs", "MySQL"],
    },
    {
      number: "02",
      title: "Frontend Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      description:
        "Creating responsive and modern web interfaces with clean design and smooth user experiences.",
      skills: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      number: "03",
      title: "AI & Computer Vision",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      description:
        "Developing practical intelligent applications using real-time computer vision and facial landmark tracking.",
      skills: ["Python", "OpenCV", "MediaPipe"],
    },
    {
      number: "04",
      title: "Cloud & Dev Tools",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      ),
      description:
        "Working with modern cloud platforms, databases, and version control development workflows.",
      skills: ["AWS (Preparing)", "Firebase", "Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-number">02</span>
            <span className="tag-line"></span>
            <span className="tag-label">Capabilities</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build practical, modern applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-card-top">
                <div className="skill-icon-box">{cat.icon}</div>
                <span className="skill-number">{cat.number}</span>
              </div>

              <h3 className="skill-title">{cat.title}</h3>
              <p className="skill-desc">{cat.description}</p>

              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <span className="skill-tag" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

