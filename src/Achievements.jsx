import React from "react";
import "./Achievements.css";

const achievements = [
  {
    icon: "☁️",
    category: "AWS CERTIFICATION",
    title: "AWS Certified Cloud Practitioner",
    description:
      "Demonstrating foundational knowledge of AWS Cloud concepts, services, security, and pricing.",
    badges: ["AWS", "Cloud Computing", "CLF-C02"],
  },
  {
    icon: "🏆",
    category: "PROJECT EXPO · 2026",
    title: "3rd Prize — MITS Project Expo",
    description:
      "Secured 3rd prize at Madanapalle Institute of Technology & Science for the Smart Driver Management System.",
    badges: ["Smart Driver Management", "AI & Computer Vision"],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-heading">
        <span>05</span>
        <h2>Achievements & Certifications</h2>
        <p>My certifications and accomplishments.</p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">{item.icon}</div>

            <div className="achievement-content">
              <span className="achievement-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="achievement-badges">
                {item.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}