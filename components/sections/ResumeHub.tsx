const resumes = [
  {
    title: "iOS Developer Resume",
    audience: "Swift, SwiftUI, app architecture, App Store products, and mobile engineering roles.",
    href: "/resumes/Manikanta_iOS_Resume.pdf",
    downloadName: "Manikanta_iOS_Resume.pdf",
    meta: "Mobile engineering",
  },
  {
    title: "ML / Data Science Resume",
    audience: "Applied machine learning, data science, analytics, modeling, and AI product roles.",
    href: "/resumes/Manikanta_ML_Resume.pdf",
    downloadName: "Manikanta_ML_Resume.pdf",
    meta: "Machine learning",
  },
];

export default function ResumeHub() {
  return (
    <section className="section section-muted" id="resume">
      <div className="section-inner">
        <p className="section-eyebrow">02 — Resume</p>
        <h2 className="section-heading">
          Two versions.
          <span> Pick the one that matches the role.</span>
        </h2>
        <p className="section-desc">
          Focused resumes for recruiters and hiring teams, matched to the work on this site.
        </p>

        <div className="resume-grid">
          {resumes.map((resume) => (
            <article className="resume-card" key={resume.href}>
              <div>
                <div className="resume-card-meta">{resume.meta}</div>
                <h3 className="resume-card-title">{resume.title}</h3>
                <p className="resume-card-desc">{resume.audience}</p>
              </div>
              <div className="resume-actions">
                <a className="btn btn-filled" href={resume.href} target="_blank" rel="noreferrer">
                  View PDF
                </a>
                <a className="btn btn-outline" href={resume.href} download={resume.downloadName}>
                  Download PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
