const resumes = [
  {
    title: "iOS Developer Resume",
    audience: "Swift, SwiftUI, app architecture, App Store products, and mobile engineering roles.",
    href: "/resumes/Manikanta_iOS_Resume.pdf",
    downloadName: "Manikanta_iOS_Resume.pdf",
    meta: "Mobile Engineering",
  },
  {
    title: "ML / Data Science Resume",
    audience: "Applied machine learning, data science, analytics, modeling, and AI product roles.",
    href: "/resumes/Manikanta_ML_Resume.pdf",
    downloadName: "Manikanta_ML_Resume.pdf",
    meta: "Machine Learning",
  },
];

export default function ResumeHub() {
  return (
    <section className="section resume-section" id="resume">
      <div className="section-inner">
        <p className="section-eyebrow">Resume</p>
        <h2 className="section-heading">
          Choose the version that fits the role.
          <br />
          <span className="section-heading-muted">iOS engineering or ML and data science.</span>
        </h2>
        <p className="section-desc">
          Two focused resumes for recruiters and hiring teams, matched to the work shown across this portfolio.
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
