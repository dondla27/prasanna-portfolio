export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Secure Banking Network",
      category: "Backend & Security",
      description:
        "A secure banking network project demonstrating routing, encryption, reliable communication, error detection, authentication, and transaction security.",
      tags: ["Java", "Spring Boot", "MySQL", "Security"],
      githubUrl: "https://github.com/dondla27",
      detailsAnchor: "#contact",
      highlight: null,
    },
    {
      number: "02",
      title: "Smart Driver Management System",
      category: "AI & Computer Vision",
      description:
        "An AI-based driver monitoring system designed to detect drowsiness, yawning, distraction and driving-related safety conditions while providing location and emergency response features.",
      tags: ["Python", "OpenCV", "MediaPipe", "Flask"],
      githubUrl: "https://github.com/dondla27",
      detailsAnchor: "#contact",
      highlight: "🏆 3rd Prize · MITS Project Expo",
    },
    {
      number: "03",
      title: "SkillBridge",
      category: "Full Stack Web Platform",
      description:
        "A campus skill exchange and learning platform that helps students share skills, connect with peers, manage learning requests, schedule sessions, and build collaborative learning experiences.",
      tags: ["JavaScript", "Firebase", "Firestore", "Web"],
      githubUrl: "https://github.com/dondla27",
      detailsAnchor: "#contact",
      highlight: null,
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-number">03</span>
            <span className="tag-line"></span>
            <span className="tag-label">Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Selected software projects demonstrating practical backend design, computer vision, and web development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-header">
                <span className="project-card-number">{project.number}</span>
                {project.highlight && (
                  <span className="project-highlight-badge">
                    {project.highlight}
                  </span>
                )}
                <span className="project-category">{project.category}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech-tags">
                {project.tags.map((tag) => (
                  <span className="tech-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-btn primary"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>GitHub</span>
                  <span className="arrow-icon">↗</span>
                </a>

                <a
                  href={project.detailsAnchor}
                  className="project-action-btn secondary"
                >
                  <span>Details</span>
                  <span className="arrow-icon">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

