export default function Certifications() {
  const certificates = [
    {
      id: "aws-clf-c02",
      category: "CLOUD CERTIFICATION",
      organization: "Amazon Web Services",
      orgShort: "AWS",
      title: "AWS Certified Cloud Practitioner",
      credential: "CLF-C02",
      status: "Earned",
      statusColor: "cyan",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      description:
        "Earned the AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge of AWS Cloud concepts, core services, cloud security, pricing models, and architectural best practices.",
      tags: ["AWS", "Cloud Computing", "CLF-C02", "Amazon Web Services"],
      // Place your actual AWS certificate PDF at: public/certificates/aws-clf-c02.pdf
      pdfPath: "/certificates/aws-clf-c02.pdf",
      // Place your AWS certificate preview image at: public/certificates/aws-clf-c02-preview.jpg
      previewImage: "/certificates/aws-clf-c02-preview.jpg",
      downloadName: "AWS-Certified-Cloud-Practitioner-Certificate.pdf",
    },
    {
      id: "digitalpe-internship",
      category: "INTERNSHIP CERTIFICATE",
      organization: "DigitalPe",
      orgShort: "DigitalPe",
      title: "Web Development Internship Completion Certificate",
      credential: "DP#1306",
      status: "Completed",
      statusColor: "emerald",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      description:
        "Successfully completed a 2-month offline Web Development Internship at DigitalPe, gaining hands-on industry experience in modern web development technologies and practices.",
      tags: ["Web Development", "2 Months", "Offline", "May–July 2026"],
      details: [
        { label: "Duration", value: "2 Months (Offline)" },
        { label: "Period", value: "May 18, 2026 – July 18, 2026" },
        { label: "Certificate No.", value: "DP#1306" },
      ],
      // Place your actual DigitalPe certificate image at: public/certificates/digitalpe-internship.jpg
      // OR as a PDF at: public/certificates/digitalpe-internship.pdf
      pdfPath: "/certificates/digitalpe-internship.jpg",
      previewImage: "/certificates/digitalpe-internship.jpg",
      downloadName: "DigitalPe-Internship-Certificate.jpg",
    },
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-number">05</span>
            <span className="tag-line"></span>
            <span className="tag-label">Credentials</span>
          </div>
          <h2 className="section-title">Certifications & Certificates</h2>
          <p className="section-subtitle">
            Verified certifications and internship credentials earned through dedicated learning and practical experience.
          </p>
        </div>

        <div className="certs-grid">
          {certificates.map((cert) => (
            <article
              className={`cert-card cert-card--${cert.statusColor}`}
              key={cert.id}
            >
              {/* Card Header */}
              <div className="cert-card-header">
                <div className={`cert-icon-box cert-icon--${cert.statusColor}`}>
                  {cert.icon}
                </div>
                <div className="cert-header-right">
                  <span className="cert-category">{cert.category}</span>
                  <span className={`cert-status-badge cert-status--${cert.statusColor}`}>
                    {cert.status}
                  </span>
                </div>
              </div>

              {/* Certificate Preview */}
              <div className="cert-preview-frame">
                <img
                  src={cert.previewImage}
                  alt={`${cert.title} preview`}
                  className="cert-preview-img"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback when image not yet placed */}
                <div className="cert-preview-placeholder" style={{ display: "none" }}>
                  <div className="cert-placeholder-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <p className="cert-placeholder-label">{cert.orgShort} Certificate</p>
                  <p className="cert-placeholder-hint">Place certificate file in<br /><code>public/certificates/</code></p>
                </div>
              </div>

              {/* Card Body */}
              <div className="cert-body">
                <div className="cert-org-row">
                  <span className="cert-org">{cert.organization}</span>
                  <span className="cert-credential">#{cert.credential}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-description">{cert.description}</p>

                {/* Extra details (DigitalPe internship specifics) */}
                {cert.details && (
                  <div className="cert-details-grid">
                    {cert.details.map((d, i) => (
                      <div className="cert-detail-item" key={i}>
                        <span className="cert-detail-label">{d.label}</span>
                        <span className="cert-detail-value">{d.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="cert-tags">
                  {cert.tags.map((tag, i) => (
                    <span className="cert-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Card Footer – Action Buttons */}
              <div className="cert-actions">
                <a
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-btn cert-btn--view"
                  aria-label={`View ${cert.title}`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>View Certificate</span>
                </a>

                <a
                  href={cert.pdfPath}
                  download={cert.downloadName}
                  className="cert-btn cert-btn--download"
                  aria-label={`Download ${cert.title}`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

