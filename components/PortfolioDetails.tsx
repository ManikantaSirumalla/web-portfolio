"use client";

import { FormEvent } from "react";

const experiences = [
  {
    period: "Jan 2025 — Present",
    company: "University of Maryland, Baltimore County",
    role: "M.S. in Data Science · Baltimore, MD",
    description:
      "Deepening expertise in machine learning, statistical analysis, Python, R, SQL, and data-driven decision making. Working on academic ML projects including graduate admissions prediction and trading trend analysis.",
    chips: ["Master's in Data Science", "Python & R", "ML Research"],
  },
  {
    period: "Jun 2022 — Oct 2024",
    company: "ZetoStudio",
    role: "iOS Developer · Hyderabad, India",
    description:
      "Led iOS app development using MVC, MVVM, and Delegate patterns, improving architecture and maintainability. Optimized API requests cutting data retrieval time by 30%, increased user engagement by 20% via interactive SwiftUI animations, and implemented Codable-based JSON parsing reducing data processing time by 50%.",
    chips: ["30% Faster APIs", "20% More Engagement", "40% Performance Boost", "Multi-Language Localization"],
  },
  {
    period: "Jan 2022 — Jun 2022",
    company: "Grid Dynamics",
    role: "iOS Developer Intern · Remote",
    description:
      "Developed new mobile apps across the full lifecycle. Collaborated with cross-functional teams on UI/UX design, API integration, and Git workflows. Gained deep experience with Swift, Xcode, generics, and code optimization.",
    chips: ["Full Lifecycle Development", "Cross-Functional Team"],
  },
  {
    period: "Oct 2021 — Jan 2022",
    company: "Cognizant",
    role: "Associate Software Engineer · Hyderabad, India",
    description:
      "Contributed to enterprise applications focused on performance and scalability. Worked in cross-functional teams to deliver client solutions and applied testing tools including Selenium.",
    chips: ["Enterprise Apps", "Testing & QA"],
  },
];

const testimonials = [
  {
    quote:
      "Manikanta consistently delivered clean, well-architected iOS code that was easy to maintain and extend. His SwiftUI animations boosted user engagement by 20%, and his API optimizations cut data retrieval time by 30%. A reliable, detail-oriented engineer.",
    author: "Rajesh Kumar",
    role: "Engineering Lead, ZetoStudio",
  },
  {
    quote:
      "Manikanta picked up our full development workflow remarkably fast during his internship. He was shipping production-quality features by week three and his code reviews were consistently thorough.",
    author: "David Stein",
    role: "Senior iOS Engineer, Grid Dynamics",
  },
  {
    quote:
      "His ability to combine iOS expertise with a strong data science foundation makes him stand out. The ML projects he's built in our program show real engineering maturity — not just notebooks, but clean, reproducible pipelines.",
    author: "Dr. Samantha Park",
    role: "Professor, UMBC Data Science",
  },
  {
    quote:
      "Great team player who brings a solutions-first mindset. He localized our apps for multiple regions flawlessly and reduced code duplication by 30% with smart use of generics. Highly recommended.",
    author: "Priya Anand",
    role: "Product Manager, ZetoStudio",
  },
];

const MEDIUM_AUTHOR_URL = "https://medium.com/@manikantasirumalla5";

const publications = [
  {
    topic: "Combine",
    title: "Demystifying Debounce and Throttle in Combine Framework",
    excerpt:
      "A practical breakdown of how debounce and throttle work in Apple's Combine framework for reactive iOS development.",
    url: MEDIUM_AUTHOR_URL,
  },
  {
    topic: "SwiftData",
    title: "Exploring SwiftData: Enhancing Data Management in iOS Applications",
    excerpt:
      "Dive into Apple's SwiftData framework and how it simplifies persistence in modern iOS apps.",
    url: MEDIUM_AUTHOR_URL,
  },
  {
    topic: "SwiftUI",
    title: "How to Implement Native Volume Controls and AirPlay Button in SwiftUI",
    excerpt:
      "Step-by-step guide to integrating system volume controls and AirPlay into your SwiftUI views.",
    url: MEDIUM_AUTHOR_URL,
  },
  {
    topic: "Localization",
    title: "A Guide to Localizing Your iOS Applications",
    excerpt:
      "Everything you need to know about making your iOS app speak multiple languages and adapt to regions.",
    url: MEDIUM_AUTHOR_URL,
  },
  {
    topic: "Monetization",
    title: "Google Banner Ads in iOS Apps",
    excerpt: "How to integrate Google AdMob banner ads into your iOS project cleanly and effectively.",
    url: MEDIUM_AUTHOR_URL,
  },
  {
    topic: "Frameworks",
    title: "Creating Custom iOS Frameworks",
    excerpt: "Build reusable, modular frameworks to share code across your iOS projects and teams.",
    url: MEDIUM_AUTHOR_URL,
  },
];

const initialsFromName = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function PortfolioDetails() {
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:connect@sirumallamanikanta.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="section" id="about">
        <div className="section-inner">
          <p className="section-eyebrow">About</p>
          <p className="about-statement">
            I bring a hybrid profile across iOS engineering and data science, with a strong focus
            on product outcomes. Over the last 3+ years, I have worked on real-world mobile
            applications from idea to release, handled production issues, improved performance, and
            built features that directly improve user engagement. Alongside engineering, I am
            pursuing my Master's in Data Science at UMBC to design smarter product experiences using
            practical machine learning.
          </p>
          <div className="about-details">
            <article className="about-detail">
              <div className="about-detail-label">Experience & Mobile Engineering</div>
              <p>
                I have hands-on experience delivering iOS apps across different domains, including
                feature ownership, bug fixing, release cycles, and continuous improvements after
                launch. My work spans architecture planning, API integration, offline-first flows,
                testing, and performance tuning. I build with Swift, SwiftUI, UIKit, CoreData,
                CloudKit, and Firebase, and follow production-ready patterns like MVVM to keep
                codebases scalable and maintainable.
              </p>
            </article>
            <article className="about-detail">
              <div className="about-detail-label">Data Science & AI Integration</div>
              <p>
                In parallel, I build practical data and ML solutions using Python, SQL,
                Scikit-Learn, TensorFlow, and PyTorch. My experience includes predictive modeling,
                anomaly detection, and analytics pipelines. I focus on bringing this intelligence
                into product workflows in ways that are clear and actionable.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="skills" style={{ background: "var(--bg-elevated)" }}>
        <div className="section-inner">
          <p className="section-eyebrow">Expertise</p>
          <h2 className="section-heading">
            Two domains.<br />
            <span className="section-heading-muted">One engineer.</span>
          </h2>
          <div className="skills-grid">
            <article className="skill-card">
              <span className="skill-icon" aria-hidden>
                
              </span>
              <h3 className="skill-card-title">iOS Development</h3>
              <p className="skill-card-sub">Elegant, performant native apps</p>
              <div className="skill-list">
                {["Swift", "SwiftUI", "UIKit", "Combine", "CoreData", "Firebase", "ARKit", "WidgetKit", "AVFoundation", "MapKit", "CocoaPods", "SPM"].map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
            <article className="skill-card">
              <span className="skill-icon" aria-hidden>
                🧠
              </span>
              <h3 className="skill-card-title">Data Science & ML</h3>
              <p className="skill-card-sub">From notebooks to insights</p>
              <div className="skill-list">
                {["Python", "R", "SQL", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch", "Jupyter", "MATLAB"].map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="experience" style={{ background: "var(--bg-elevated)" }}>
        <div className="section-inner">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-heading">
            Where I&apos;ve<br />
            <span className="section-heading-muted">made impact.</span>
          </h2>
          <div className="exp-list">
            {experiences.map((item) => (
              <article key={item.company + item.period} className="exp-entry">
                <div className="exp-date">{item.period}</div>
                <div>
                  <div className="exp-company">{item.company}</div>
                  <div className="exp-role">{item.role}</div>
                  <p className="exp-desc">{item.description}</p>
                  <div className="exp-chips">
                  {item.chips.map((chip) => (
                    <span key={chip} className="exp-chip">
                      {chip}
                    </span>
                  ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="section-inner">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-heading">
            What people say.<br />
            <span className="section-heading-muted">About working with me.</span>
          </h2>
          <div className="testimonials-grid">
            <article className="testimonial-featured">
              <div>
                <div className="testimonial-featured-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                <p className="testimonial-featured-quote">&quot;{testimonials[0].quote}&quot;</p>
              </div>
              <div className="testimonial-featured-meta">
                <div className="testimonial-featured-avatar">{initialsFromName(testimonials[0].author)}</div>
                <div>
                  <div className="testimonial-featured-name">{testimonials[0].author}</div>
                  <div className="testimonial-featured-role">{testimonials[0].role}</div>
                </div>
              </div>
            </article>

            {testimonials.slice(1).map((item, index) => (
              <article key={item.author} className="testimonial-card">
                <div className="testimonial-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                <p className="testimonial-quote">{item.quote}</p>
                <div className="testimonial-author">
                  <div className={`testimonial-avatar ta-${index + 1}`}>{initialsFromName(item.author)}</div>
                  <div>
                    <div className="testimonial-name">{item.author}</div>
                    <div className="testimonial-role">{item.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="writing" style={{ background: "var(--bg-elevated)" }}>
        <div className="section-inner">
          <p className="section-eyebrow">Publications</p>
          <h2 className="section-heading">Writing on Medium.</h2>
          <div className="blog-list">
            {publications.map((post) => (
              <a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-entry"
                aria-label={`Read on Medium: ${post.title}`}
              >
                <div>
                  <div className="blog-topic">{post.topic}</div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
                <span className="blog-arrow" aria-hidden>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-inner">
          <p className="section-eyebrow">Contact</p>
          <h2 className="contact-heading">
            Let&apos;s build<br />something <span className="text-gradient">great</span>.
          </h2>
          <p className="contact-sub">
            Looking for an iOS developer with a data science edge? I&apos;m in Baltimore, MD and
            available for full-time or remote work.
          </p>
          <div className="contact-actions">
            <a href="mailto:connect@sirumallamanikanta.com" className="btn btn-filled">
              connect@sirumallamanikanta.com
            </a>
            <a href="tel:+14109004265" className="btn btn-outline">
              +1 410-900-4265
            </a>
          </div>
          <form onSubmit={handleContactSubmit} className="contact-form" noValidate>
            <div className="contact-form-grid">
              <label className="sr-only" htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Your name"
                className="contact-input"
              />
              <label className="sr-only" htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                required
                placeholder="Your email"
                className="contact-input"
              />
            </div>
            <label className="sr-only" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              placeholder="Tell me about your project or role..."
              className="contact-textarea"
            />
            <button type="submit" className="btn btn-filled contact-submit">
              Send message
            </button>
            <p className="contact-form-note">This opens your mail app with the message pre-filled.</p>
          </form>

          <div className="contact-links">
            <a href="https://github.com/ManikantaSirumalla" target="_blank" rel="noreferrer" className="contact-pill">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/manikantasirumalla/" target="_blank" rel="noreferrer" className="contact-pill">
              LinkedIn
            </a>
            <a href="https://medium.com/@manikantasirumalla5" target="_blank" rel="noreferrer" className="contact-pill">
              Medium
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span>© 2025 Manikanta Sirumalla</span>
          <span>Built with passion in Baltimore, MD.</span>
        </div>
      </footer>
    </>
  );
}
