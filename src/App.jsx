import "./App.css";

function App() {
  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Dondla Prasanna
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section id="home" className="hero">

        <div className="hero-background-glow glow-one"></div>
        <div className="hero-background-glow glow-two"></div>

        <div className="hero-container">

          {/* LEFT SIDE */}
          <div className="hero-content">

            <div className="status-badge">
              <span className="status-dot"></span>
              Open to Opportunities
            </div>

            <div className="hello-text">
              Hello, I'm
            </div>

            <h1>
              Dondla
              <span>Prasanna</span>
            </h1>

            <h2>
              Computer Science and Engineering Student
            </h2>

            <p className="hero-description">
              I build practical software solutions using Java, Spring Boot,
              web technologies and modern development tools. I enjoy turning
              ideas into real-world applications.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="btn primary">
                View My Projects ↗
              </a>

              <a href="#contact" className="btn secondary">
                Let's Connect
              </a>

              <a
                href="/resume.pdf"
                className="btn resume-btn"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume ↓
              </a>

            </div>

            <div className="hero-tech">
              <span>Java</span>
              <i>•</i>
              <span>Spring Boot</span>
              <i>•</i>
              <span>React</span>
              <i>•</i>
              <span>MySQL</span>
            </div>

            <div className="hero-learning">
              <span className="learning-dot"></span>
              Currently preparing for AWS Certification
            </div>

          </div>


          {/* RIGHT SIDE - PROFILE IMAGE */}
          <div className="hero-image-wrapper">

            <div className="profile-glow"></div>

            <div className="profile-ring ring-one"></div>
            <div className="profile-ring ring-two"></div>

            <div className="profile-card">
              <img
                src="/profile.jpg"
                alt="Dondla Prasanna"
                className="profile-image"
              />
            </div>

            {/* Floating card 1 */}
            <div className="floating-card floating-top">
              <div className="floating-icon">
                ☕
              </div>

              <div>
                <strong>Java Developer</strong>
                <small>Spring Boot Focused</small>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="floating-card floating-bottom">
              <div className="floating-icon">
                ☁
              </div>

              <div>
                <strong>Cloud Learner</strong>
                <small>AWS Certification</small>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}
      <section id="about" className="section">

        <div className="section-number">
          01
        </div>

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-content">

          <p>
            I’m a <strong>Computer Science and Engineering student</strong>
            passionate about building useful software, exploring modern
            technologies, and continuously improving my technical skills.
          </p>

          <p>
            I enjoy creating <strong>responsive web interfaces</strong>,
            developing practical applications, working with databases,
            and exploring cloud technologies. Through academic projects
            and hands-on development, I have gained experience with
            <strong> Java, Python, React, MySQL, Firebase, and Computer Vision.</strong>
          </p>

          <p>
            My strengths include <strong>quick learning, problem-solving,
            teamwork, and adaptability.</strong> I have developed skills
            across Java programming, Python, web development, databases,
            and modern software development practices.
          </p>

          <p>
            Currently, I am preparing for the
            <strong> AWS Certification</strong> to strengthen my knowledge
            of cloud computing and build a stronger foundation for developing
            scalable and reliable applications.
          </p>

        </div>


        {/* ABOUT FEATURE BUTTONS */}
        <div className="about-features">

          <div className="feature-card">
            <div className="feature-icon">
              💻
            </div>

            <h3>
              Software Development
            </h3>

            <p>
              Building practical applications
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              ☕
            </div>

            <h3>
              Java Development
            </h3>

            <p>
              Java &amp; Spring Boot focused
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              🌐
            </div>

            <h3>
              Web Technologies
            </h3>

            <p>
              React, JavaScript &amp; modern UI
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              🚀
            </div>

            <h3>
              Problem Solving
            </h3>

            <p>
              Turning ideas into projects
            </p>
          </div>

        </div>


        {/* =====================================================
            STATS
        ===================================================== */}
        <div className="stats-grid">

          <div className="stat-card">
            <span className="stat-number">
              3+
            </span>

            <span className="stat-label">
              Projects
            </span>
          </div>


          <div className="stat-card">
            <span className="stat-number">
              Java
            </span>

            <span className="stat-label">
              Primary Language
            </span>
          </div>


          <div className="stat-card">
            <span className="stat-number">
              CSE
            </span>

            <span className="stat-label">
              Engineering Student
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
    SKILLS SECTION
===================================================== */}
<section id="skills" className="section skills-section">

  <div className="section-heading">
    <span className="section-number">02</span>

    <h2>
      Technical Skills
    </h2>

    <p>
      Technologies and tools I use to build practical,
      modern applications.
    </p>
  </div>


  {/* =====================================================
      TECHNICAL Skills
  ===================================================== */}

  <div className="Skills-grid">

    {/* Backend */}
    <div className="Skills-card">

      <div className="Skills-icon">
        ☕
      </div>

      <div className="Skills-number">
        01
      </div>

      <h3>
        Backend Development
      </h3>

      <p>
        Building practical backend applications and
        database-driven systems.
      </p>

      <div className="Skills-tags">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>REST APIs</span>
        <span>MySQL</span>
      </div>

    </div>


    {/* Frontend */}
    <div className="Skills-card">

      <div className="Skills-icon">
        ⚛
      </div>

      <div className="Skills-number">
        02
      </div>

      <h3>
        Frontend Development
      </h3>

      <p>
        Creating responsive and modern web interfaces
        with clean user experiences.
      </p>

      <div className="Skills-tags">
        <span>React</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>

    </div>


    {/* AI */}
    <div className="Skills-card">

      <div className="Skills-icon">
        ◉
      </div>

      <div className="Skills-number">
        03
      </div>

      <h3>
        AI &amp; Computer Vision
      </h3>

      <p>
        Developing practical intelligent applications
        using computer vision technologies.
      </p>

      <div className="Skills-tags">
        <span>Python</span>
        <span>OpenCV</span>
        <span>MediaPipe</span>
      </div>

    </div>


    {/* Cloud */}
    <div className="Skills-card">

      <div className="Skills-icon">
        ☁
      </div>

      <div className="Skills-number">
        04
      </div>

      <h3>
        Cloud &amp; Tools
      </h3>

      <p>
        Exploring cloud platforms and modern
        development workflows.
      </p>

      <div className="Skill-tags">
        <span>AWS</span>
        <span>Firebase</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>

    </div>

  </div>


  

  {/* =====================================================
      DEVELOPMENT APPROACH
  ===================================================== */}

  <div className="development-approach">

    <div className="subsection-heading">

      <span>
        MY DEVELOPMENT APPROACH
      </span>

      <h3>
        From learning to building
      </h3>

    </div>


    <div className="approach-flow">

      <div className="approach-step">
        <span>01</span>
        <strong>LEARN</strong>
        <p>Understand</p>
      </div>

      <div className="approach-arrow">
        →
      </div>

      <div className="approach-step">
        <span>02</span>
        <strong>BUILD</strong>
        <p>Create</p>
      </div>

      <div className="approach-arrow">
        →
      </div>

      <div className="approach-step">
        <span>03</span>
        <strong>TEST</strong>
        <p>Improve</p>
      </div>

      <div className="approach-arrow">
        →
      </div>

      <div className="approach-step">
        <span>04</span>
        <strong>IMPROVE</strong>
        <p>Refine</p>
      </div>

    </div>

  </div>


  {/* =====================================================
      PROJECT TRANSITION
  ===================================================== */}

  <div className="skills-project-transition">

    <span>
      READY TO SEE IT IN ACTION?
    </span>

    <h3>
      Explore the projects where I apply these technologies.
    </h3>

    <a href="#projects" className="project-transition-btn">
      View My Projects
      <span>↗</span>
    </a>

  </div>

</section>

      {/* =====================================================
          PROJECTS SECTION
      ===================================================== */}
      <section id="projects" className="section">

        <div className="section-number">
          03
        </div>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="projects-grid">


          {/* PROJECT 1 */}
          <div className="project-card">

            <span className="project-number">
              01
            </span>

            <h3>
              Secure Banking Network
            </h3>

            <p>
              A secure banking network project demonstrating routing,
              encryption, reliable communication, error detection,
              authentication, and transaction security.
            </p>

            <div className="tech-tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>Security</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/dondla27"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub ↗
              </a>

              <a
                href="#contact"
                className="project-link"
              >
                Details ↗
              </a>

            </div>

          </div>


          {/* PROJECT 2 */}
          <div className="project-card">

            <span className="project-number">
              02
            </span>

            <h3>
              Smart Driver Management System
            </h3>

            <p>
              An AI-based driver monitoring system designed to detect
              drowsiness, yawning, distraction and driving-related
              safety conditions while providing location and emergency
              response features.
            </p>

            <div className="tech-tags">
              <span>Python</span>
              <span>OpenCV</span>
              <span>MediaPipe</span>
              <span>Flask</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/dondla27"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub ↗
              </a>

              <a
                href="#contact"
                className="project-link"
              >
                Details ↗
              </a>

            </div>

          </div>


          {/* PROJECT 3 */}
          <div className="project-card">

            <span className="project-number">
              03
            </span>

            <h3>
              SkillBridge
            </h3>

            <p>
              A campus skill exchange and learning platform that helps
              students share skills, connect with peers, manage learning
              requests, schedule sessions, and build collaborative
              learning experiences.
            </p>

            <div className="tech-tags">
              <span>JavaScript</span>
              <span>Firebase</span>
              <span>Firestore</span>
              <span>Web</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/dondla27"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub ↗
              </a>

              <a
                href="#contact"
                className="project-link"
              >
                Details ↗
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
    EDUCATION
===================================================== */}

<section id="education" className="section education-section">

  <div className="section-heading">
    <span className="section-number">04</span>

    <h2>Education</h2>

    <p>
      My academic journey and educational background.
    </p>
  </div>


  <div className="education-timeline">

    {/* 10th Class */}
    <div className="education-item">

      <div className="education-marker">
        <span>01</span>
      </div>

      <div className="education-card">

        <div className="education-top">
          <span className="education-level">
            10th CLASS
          </span>

          <span className="education-score">
            90%
          </span>
        </div>

        <h3>
          Sai Vidhyani Kethan English Medium High School
        </h3>

        <p className="education-description">
          Completed secondary school education with a
          strong academic foundation.
        </p>

        <div className="education-details">
          <span>📚 Secondary Education</span>
          <span>📅 2022</span>
          <span>🏆 90%</span>
        </div>

      </div>

    </div>


    {/* Intermediate */}
    <div className="education-item">

      <div className="education-marker">
        <span>02</span>
      </div>

      <div className="education-card">

        <div className="education-top">
          <span className="education-level">
            INTERMEDIATE
          </span>

          <span className="education-score">
            97.4%
          </span>
        </div>

        <h3>
          Sri Krishna Reddy Siddarth Junior College
        </h3>

        <p className="education-description">
          Completed intermediate education with strong
          academic performance and preparation for engineering.
        </p>

        <div className="education-details">
          <span>📚 Higher Secondary Education</span>
          <span>📅 2022 — 2024</span>
          <span>🏆 97.4%</span>
        </div>

      </div>

    </div>


    {/* B.Tech */}
    <div className="education-item">

      <div className="education-marker active">
        <span>03</span>
      </div>

      <div className="education-card current-education">

        <div className="education-top">
          <span className="education-level">
            CURRENTLY PURSUING
          </span>

          <span className="education-score">
            9.00 CGPA
          </span>
        </div>

        <h3>
          Bachelor of Technology — Computer Science &amp; Engineering
        </h3>

        <p className="education-institute">
          Madanapalle Institute of Technology &amp; Science
        </p>

        <p className="education-description">
          Currently pursuing 3rd year of B.Tech in Computer
          Science and Engineering, focusing on software
          development, modern technologies, and practical projects.
        </p>

        <div className="education-details">
          <span>🎓 B.Tech — CSE</span>
          <span>📅 2024 — 2028</span>
          <span>⭐ 9.00 CGPA</span>
        </div>

      </div>

    </div>

  </div>


  {/* Achievement */}

  <div className="education-achievement">

    <div className="achievement-icon">
      🏆
    </div>

    <div>
      <span>ACHIEVEMENT</span>

      <h3>
        3rd Prize — MITS Project Expo 2026
      </h3>

      <p>
        Recognized for the Smart Driver Management System
        project.
      </p>
    </div>

  </div>

</section>
        

    {/* =====================================================
    CONTACT
===================================================== */}

<section id="contact" className="section contact-section">

  <div className="section-heading">

    <span className="section-number">05</span>

    <h2>Let's Connect</h2>

    <p>
      Have an opportunity or want to connect?
    </p>

  </div>


  <div className="contact-content">

    {/* Availability */}

    <div className="contact-availability">

      <span className="availability-dot"></span>

      <span>
        Open to internship and Currently building and exploring opportunities
      </span>

    </div>


    {/* Description */}

    <p className="contact-description">

      I’m interested in opportunities involving
      <strong> Java, Spring Boot, backend development,
      web technologies, and cloud computing.</strong>
      I enjoy building practical applications and
      would be happy to connect regarding internships,
      entry-level roles, collaborations, or technical
      opportunities.

    </p>


    {/* Contact buttons */}

    <div className="contact-links">

      {/* Email */}

      <a
        href="mailto:prasannadondla1309@gmail.com"
        className="contact-button"
      >

        <span className="contact-button-icon">
          ✉
        </span>

        <span className="contact-button-text">
          <small>Email</small>
          prasannadondla1309@gmail.com
        </span>

        <span className="contact-arrow">
          ↗
        </span>

      </a>


      {/* GitHub */}

      <a
        href="https://github.com/dondla27"
        target="_blank"
        rel="noreferrer"
        className="contact-button"
      >

        <span className="contact-button-icon">
          ◉
        </span>

        <span className="contact-button-text">
          <small>GitHub</small>
          @dondla27
        </span>

        <span className="contact-arrow">
          ↗
        </span>

      </a>


      {/* LinkedIn */}

      <a
        href="https://www.linkedin.com/in/dondla-prasanna-174a72368"
        target="_blank"
        rel="noreferrer"
        className="contact-button"
      >

        <span className="contact-button-icon linkedin-icon">
          in
        </span>

        <span className="contact-button-text">
          <small>LinkedIn</small>
          Dondla Prasanna
        </span>

        <span className="contact-arrow">
          ↗
        </span>

      </a>

    </div>

  </div>

</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="footer">

        <p>
          © 2026 Dondla Prasanna. Built with React.
        </p>

      </footer>

    </div>
  );
}

export default App;