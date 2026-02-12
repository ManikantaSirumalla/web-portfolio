export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-inner">
        <p className="section-eyebrow reveal">Contact</p>
        <h2 className="contact-heading reveal d1">
          Let&apos;s build<br />something <span className="text-gradient">great</span>.
        </h2>
        <p className="contact-sub reveal d2">
          Looking for an iOS developer with a data science edge? I&apos;m in Baltimore, MD and
          available for full-time or remote work.
        </p>
        <div className="contact-actions reveal d3">
          <a href="mailto:contact@manikantasirumalla.com" className="btn btn-filled">
            contact@manikantasirumalla.com
          </a>
          <a href="tel:+14109004265" className="btn btn-outline">+1 410-900-4265</a>
        </div>
        <div className="contact-links reveal d4">
          <a
            href="https://github.com/ManikantaSirumalla"
            className="contact-pill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>{' '}
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/manikantasirumalla"
            className="contact-pill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>{' '}
            LinkedIn
          </a>
          <a
            href="https://medium.com/@manikantasirumalla"
            className="contact-pill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" />
              <path d="M8 8h8M8 12h8M8 16h4" />
            </svg>{' '}
            Medium
          </a>
        </div>
      </div>
    </section>
  );
}
