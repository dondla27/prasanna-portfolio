export default function Education() {
  const educationItems = [
    {
      number: "01",
      current: true,
      level: "CURRENTLY PURSUING",
      score: "9.00 CGPA",
      degree: "Bachelor of Technology — Computer Science & Engineering",
      institution: "Madanapalle Institute of Technology & Science",
      description:
        "Currently pursuing 3rd year of B.Tech in Computer Science and Engineering, focusing on software development, modern technologies, and practical projects.",
      meta: [
        { label: "Degree", value: "B.Tech — CSE" },
        { label: "Duration", value: "2024 — 2028" },
        { label: "Performance", value: "9.00 CGPA" },
      ],
    },
    {
      number: "02",
      current: false,
      level: "INTERMEDIATE",
      score: "97.4%",
      degree: "Higher Secondary Education (MPC)",
      institution: "Sri Krishna Reddy Siddarth Junior College",
      description:
        "Completed intermediate education with strong academic performance and rigorous preparation for engineering.",
      meta: [
        { label: "Stream", value: "Higher Secondary" },
        { label: "Duration", value: "2022 — 2024" },
        { label: "Performance", value: "97.4%" },
      ],
    },
    {
      number: "03",
      current: false,
      level: "10TH CLASS",
      score: "90%",
      degree: "Secondary School Certificate",
      institution: "Sai Vidhyani Kethan English Medium High School",
      description:
        "Completed secondary school education with a solid foundation in mathematics, science, and computer fundamentals.",
      meta: [
        { label: "Level", value: "Secondary Education" },
        { label: "Year", value: "2022" },
        { label: "Performance", value: "90%" },
      ],
    },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-number">04</span>
            <span className="tag-line"></span>
            <span className="tag-label">Academics</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and educational milestones.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-track"></div>

          <div className="timeline-list">
            {educationItems.map((item, index) => (
              <div
                className={`timeline-item ${item.current ? "is-current" : ""}`}
                key={index}
              >
                <div className="timeline-marker">
                  <span className="marker-number">{item.number}</span>
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <span className="timeline-level-badge">{item.level}</span>
                    <span className="timeline-score-badge">{item.score}</span>
                  </div>

                  <h3 className="timeline-degree">{item.degree}</h3>
                  <h4 className="timeline-institution">{item.institution}</h4>
                  <p className="timeline-description">{item.description}</p>

                  <div className="timeline-meta-chips">
                    {item.meta.map((m, mIdx) => (
                      <span className="meta-chip" key={mIdx}>
                        <strong>{m.label}:</strong> {m.value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

