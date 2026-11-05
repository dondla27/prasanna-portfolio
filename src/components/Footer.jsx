export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            <span className="logo-text">Dondla Prasanna</span>
          </a>
          <p className="footer-tagline">
            Computer Science & Engineering Student · Java & Web Developer
          </p>
        </div>

        <div className="footer-center">
          <p className="footer-copy">
            © {new Date().getFullYear()} Dondla Prasanna. Built with React & Vite.
          </p>
        </div>

        <div className="footer-right">
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

