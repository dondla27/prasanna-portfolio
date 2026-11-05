export default function About() {
  const features = [
    {
      icon: "💻",
      title: "Software Development",
      description: "Building practical, reliable applications with clean structure.",
    },
    {
      icon: "☕",
      title: "Java Development",
      description: "Java & Spring Boot focused backend engineering.",
    },
    {
      icon: "🌐",
      title: "Web Technologies",
      description: "React, JavaScript, and responsive modern user interfaces.",
    },
    {
      icon: "🚀",
      title: "Problem Solving",
      description: "Turning real-world ideas and requirements into projects.",
    },
  ];

  const stats = [
    { number: "3+", label: "Completed Projects" },
    { number: "Java", label: "Primary Language" },
    { number: "9.00", label: "B.Tech CGPA" },
    { number: "CSE", label: "Engineering Student" },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-number">01</span>
            <span className="tag-line"></span>
            <span className="tag-label">About Me</span>
          </div>
          <h2 className="section-title">Background & Aspirations</h2>
        </div>

        <div className="about-grid">
          {/* Bio text */}
          <div className="about-narrative">
            <p>
              I’m a <strong>Computer Science and Engineering student</strong> passionate
              about building useful software, exploring modern technologies, and continuously
              improving my technical skills.
            </p>

            <p>
              I enjoy creating <strong>responsive web interfaces</strong>, developing practical
              applications, working with databases, and exploring cloud technologies. Through
              academic projects and hands-on development, I have gained experience with{" "}
              <span className="text-highlight">
                Java, Python, React, MySQL, Firebase, and Computer Vision.
              </span>
            </p>

            <p>
              My strengths include <strong>quick learning, problem-solving, teamwork, and adaptability.</strong>{" "}
              I have developed skills across Java programming, Python, web development, databases,
              and modern software development practices.
            </p>
          </div>

          {/* Core Feature Pillars */}
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-icon-wrapper">
                  <span className="feature-emoji">{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="stats-strip">
          {stats.map((stat, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

