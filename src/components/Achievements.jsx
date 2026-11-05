export default function Achievements() {
  const achievements = [
    {
      id: "cse-expo",
      icon: "🏆",
      prizeLabel: "3rd Prize",
      category: "CSE DEPARTMENT PROJECT EXPO",
      title: "Third Prize — CSE Department Project Expo",
      statusBadge: "Award Winner",
      statusColor: "amber",
      description:
        "My team secured Third Prize at the CSE Department Project Expo at Madanapalle Institute of Technology & Science for the Smart Driver Management System — an AI-based real-time driver safety and monitoring platform.",
      highlights: [
        "Project: Smart Driver Management System",
        "Recognition: Third Prize (CSE Dept.)",
        "Technology: AI & Computer Vision",
      ],
      badges: ["Smart Driver Management System", "AI & Computer Vision", "3rd Prize"],
    },
    {
      id: "sih-2025",
      icon: "🚀",
      prizeLabel: "Dept. & Institute Level",
      category: "SMART INDIA HACKATHON 2025",
      title: "Selected — Smart India Hackathon 2025",
      statusBadge: "SIH Selected",
      statusColor: "indigo",
      description:
        "My team's project Smart Connect was selected at both the Department Level and Institute Level during Smart India Hackathon 2025, reflecting strong problem-solving, teamwork, and innovation capabilities.",
      highlights: [
        "Project: Smart Connect",
        "Selection: Department Level ✓",
        "Selection: Institute Level ✓",
      ],
      badges: ["Smart Connect", "SIH 2025", "Dept. Level", "Institute Level"],
    },
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-number">06</span>
            <span className="tag-line"></span>
            <span className="tag-label">Milestones</span>
          </div>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Competition recognitions and hackathon selections that highlight collaborative problem-solving and technical innovation.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <div className={`achievement-card achievement-card--${item.statusColor}`} key={item.id}>
              {/* Top Row */}
              <div className="achievement-card-top">
                <div className="achievement-icon-box">
                  <span className="achievement-emoji">{item.icon}</span>
                </div>
                <div className="achievement-top-right">
                  <span className={`achievement-prize-label achievement-prize--${item.statusColor}`}>
                    {item.prizeLabel}
                  </span>
                  <span className={`achievement-status-badge achievement-status--${item.statusColor}`}>
                    {item.statusBadge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="achievement-content">
                <span className="achievement-category">{item.category}</span>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>

                {/* Key Highlights */}
                <ul className="achievement-highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="achievement-highlight-item">
                      <span className="highlight-dot"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges */}
                <div className="achievement-badges">
                  {item.badges.map((badge, bIdx) => (
                    <span className="achievement-badge" key={bIdx}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
