"use client";

import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, ArrowSquareOut } from "@phosphor-icons/react";
import Reveal from "@/components/motion/Reveal";

type FieldError = { id: string; message: string };

const experiences = [
  {
    period: "Jan 2025 to Present",
    company: "University of Maryland, Baltimore County",
    role: "M.S. in Data Science · Baltimore, MD",
    description:
      "Pursuing an M.S. in Data Science with a 3.95 GPA, focused on machine learning systems, applied AI, statistical modeling, and production-minded experimentation. Academic and research work includes skin-lesion classification, telecommunications churn modeling, and hybrid AI systems for RepTrack Pro.",
    chips: ["GPA 3.95", "ML Systems", "Applied AI", "Research Writing"],
  },
  {
    period: "Aug 2022 to Dec 2024",
    company: "ZetoStudio",
    role: "iOS Developer · Hyderabad, India",
    description:
      "Owned end-to-end delivery of production iOS apps in Swift and SwiftUI, from product specs through App Store release. Built modular MVVM features with protocol-oriented design, dependency injection, REST integrations, async/await, Combine, offline-first caching, XCTest coverage, and Instruments-based performance tuning.",
    chips: ["SwiftUI", "MVVM", "Offline Caching", "XCTest", "Instruments"],
  },
  {
    period: "Jul 2021 to Jul 2022",
    company: "Grid Dynamics",
    role: "iOS Developer · Hyderabad, India",
    description:
      "Built customer-facing iOS features for retail and e-commerce clients in Swift and UIKit, including catalog browsing, checkout, and account flows. Integrated REST APIs, push notifications, analytics SDKs, and contributed to shared internal components across Agile delivery cycles.",
    chips: ["UIKit", "REST APIs", "Agile Delivery", "Shared Components"],
  },
  {
    period: "Oct 2021 to Jan 2022",
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
    author: "Venkateshwar Rao",
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
      "Mani brought all the talent and hard work. I just helped with the storytelling. He was open to feedback, kept refining the pitch, and it was incredibly exciting to share in the moment when he was announced as the winner.",
    author: "Chris White",
    role: "Presquared, Entrepreneur in Residence at bwtech",
  },
  {
    quote:
      "His ability to combine iOS expertise with a strong data science foundation makes him stand out. The ML projects he's built in our program show real engineering maturity, with clean and reproducible pipelines behind the work.",
    author: 'Dr. Unal "Zak" Sakoglu',
    role: "Professor, UMBC Data Science",
  },
  {
    quote:
      "Manikanta has shown strong applied ML judgment across both classical machine-learning work and product-oriented modeling. In his telecommunications churn project and later RepTrack Pro modeling discussions, he demonstrated thoughtful model selection, metric-driven evaluation, and a clear understanding of how ML systems can scale into real-world applications.",
    author: "Dr. Masoud Soroush",
    role: "UMBC Data Science Faculty",
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
  const [errors, setErrors] = useState<FieldError[]>([]);
  const [status, setStatus] = useState("");
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const shouldFocusErrors = useRef(false);
  const fieldError = (id: string) => errors.find((error) => error.id === id);

  useLayoutEffect(() => {
    if (!shouldFocusErrors.current || errors.length === 0) return;
    shouldFocusErrors.current = false;
    const summary = errorSummaryRef.current;
    summary?.focus({ preventScroll: false });
    summary?.classList.add("is-focused");
  }, [errors]);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const nextErrors: FieldError[] = [];

    if (!name) nextErrors.push({ id: "contact-name", message: "Enter your name." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.push({ id: "contact-email", message: "Enter a valid email address." });
    }
    if (message.length < 8) {
      nextErrors.push({ id: "contact-message", message: "Enter a message of at least a short sentence." });
    }

    setErrors(nextErrors);
    if (nextErrors.length > 0) {
      setStatus("");
      shouldFocusErrors.current = true;
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    setStatus("Opening your email app with this message.");
    window.location.href = `mailto:connect@sirumallamanikanta.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="section" id="about">
        <div className="section-inner">
          <Reveal>
          <p className="section-eyebrow">05 — About</p>
          <p className="about-statement">
            I build at the intersection of iOS engineering, machine learning, and product systems.
            Over the last 3+ years, I have shipped production mobile apps, built two App Store
            products, and worked across CoreML, SwiftUI, SwiftData, HealthKit, StoreKit 2, Vision
            OCR, and LLM-powered workflows. At UMBC, I am completing my M.S. in Data Science with a
            3.95 GPA, focusing on ML systems, model evaluation, and applied AI that can move from
            notebooks into real products.
          </p>
          </Reveal>
          <div className="about-details">
            <article className="about-detail">
              <div className="about-detail-label">Experience & Mobile Engineering</div>
              <p>
                I have hands-on experience delivering iOS apps across consumer, retail, fitness,
                and developer-tool domains. My work spans architecture planning, feature ownership,
                REST API integration, offline-first caching, test coverage, App Store release
                cycles, and performance tuning with Instruments. I build with Swift, SwiftUI, UIKit,
                Combine, SwiftData, Core Data, HealthKit, WatchKit, WidgetKit, Live Activities,
                StoreKit 2, Vision, CoreML, and production-ready MVVM patterns.
              </p>
            </article>
            <article className="about-detail">
              <div className="about-detail-label">Data Science & AI Integration</div>
              <p>
                In parallel, I build practical ML and AI systems with Python, SQL, PyTorch,
                TensorFlow/Keras, scikit-learn, XGBoost, pandas, NumPy, and statsmodels. My work
                includes deep-learning classifiers, churn prediction, leakage-safe evaluation,
                threshold optimization, CoreML deployment, LLM provider routing, structured-output
                validation, and deterministic safeguards that keep AI features useful in real
                product workflows.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="skills">
        <div className="section-inner">
          <Reveal>
          <p className="section-eyebrow">06 — Practice</p>
          <h2 className="section-heading">
            Two domains.
            <span> One engineer.</span>
          </h2>
          </Reveal>
          <div className="skills-grid">
            <article className="skill-card">
              <span className="skill-icon" aria-hidden>
                iOS
              </span>
              <h3 className="skill-card-title">iOS Development</h3>
              <p className="skill-card-sub">Production native apps from idea to release</p>
              <div className="skill-list">
                {[
                  "Swift",
                  "SwiftUI",
                  "UIKit",
                  "Combine",
                  "async/await",
                  "SwiftData",
                  "Core Data",
                  "CoreML",
                  "HealthKit",
                  "WatchKit",
                  "WidgetKit",
                  "Live Activities",
                  "StoreKit 2",
                  "Vision",
                  "PDFKit",
                  "XCTest",
                  "Instruments",
                  "App Store Connect",
                ].map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
            <article className="skill-card">
              <span className="skill-icon" aria-hidden>
                <img src="/assets/icons/data-science.png" alt="" className="skill-icon-img" />
              </span>
              <h3 className="skill-card-title">Data Science & ML</h3>
              <p className="skill-card-sub">ML systems that move from notebooks into products</p>
              <div className="skill-list">
                {[
                  "Python",
                  "SQL",
                  "PyTorch",
                  "TensorFlow/Keras",
                  "scikit-learn",
                  "XGBoost",
                  "pandas",
                  "NumPy",
                  "statsmodels",
                  "GridSearchCV",
                  "ROC/PR Analysis",
                  "Threshold Optimization",
                  "Leakage Prevention",
                  "Patient-Grouped Splits",
                  "CoreML Deployment",
                  "TorchScript",
                  "LLM Routing",
                  "Structured Validators",
                ].map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-inner">
          <Reveal>
          <p className="section-eyebrow">07 — Experience</p>
          <h2 className="section-heading">
            Where the work landed.
            <span> School, studios, and product teams.</span>
          </h2>
          </Reveal>
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

      <section className="section section-deferred" id="testimonials">
        <div className="section-inner">
          <Reveal>
          <p className="section-eyebrow">08 — Recommendations</p>
          <h2 className="section-heading">
            Notes from people I&apos;ve worked with.
            <span> Leads, faculty, and collaborators.</span>
          </h2>
          </Reveal>
          <div className="testimonials-grid">
            <article className="testimonial-featured">
              <div>
                <p className="testimonial-kicker">Recommendation</p>
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
                <p className="testimonial-kicker">Recommendation</p>
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

      <section className="section section-muted section-deferred" id="writing">
        <div className="section-inner">
          <Reveal>
          <p className="section-eyebrow">09 — Writing</p>
          <h2 className="section-heading">
            Notes on Medium.
            <span> iOS engineering, written down.</span>
          </h2>
          </Reveal>
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
                <ArrowSquareOut className="blog-arrow" size={18} aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-inner">
          <Reveal>
          <p className="section-eyebrow">10 — Contact</p>
          <h2 className="contact-heading">
            Let&apos;s build something precise.
          </h2>
          <p className="contact-sub">
            Looking for an iOS developer with a data science edge? I&apos;m in Baltimore, MD and
            available for full-time or remote work.
          </p>
          </Reveal>
          <div className="contact-actions">
            <a href="mailto:connect@sirumallamanikanta.com" className="btn btn-filled">
              connect@sirumallamanikanta.com
            </a>
            <a href="tel:+14109004265" className="btn btn-outline">
              +1 410-900-4265
            </a>
          </div>
          <form onSubmit={handleContactSubmit} className="contact-form" noValidate>
            {errors.length > 0 ? (
              <div
                ref={errorSummaryRef}
                id="contact-errors"
                className="form-alert"
                role="alert"
                tabIndex={-1}
              >
                <p>The message was not sent. Fix these fields:</p>
                <ul>
                  {errors.map((error) => (
                    <li key={error.id}>
                      <a href={`#${error.id}`}>{error.message}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="contact-form-grid">
              <div className="field">
                <label htmlFor="contact-name">
                  Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(fieldError("contact-name"))}
                  aria-describedby={fieldError("contact-name") ? "contact-name-error" : undefined}
                  className="contact-input"
                />
                {fieldError("contact-name") ? (
                  <p id="contact-name-error" className="field-error">{fieldError("contact-name")?.message}</p>
                ) : null}
              </div>
              <div className="field">
                <label htmlFor="contact-email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  aria-invalid={Boolean(fieldError("contact-email"))}
                  aria-describedby={fieldError("contact-email") ? "contact-email-error" : undefined}
                  className="contact-input"
                />
                {fieldError("contact-email") ? (
                  <p id="contact-email-error" className="field-error">{fieldError("contact-email")?.message}</p>
                ) : null}
              </div>
            </div>
            <div className="field">
              <label htmlFor="contact-message">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                aria-invalid={Boolean(fieldError("contact-message"))}
                aria-describedby={fieldError("contact-message") ? "contact-message-error" : undefined}
                className="contact-textarea"
              />
              {fieldError("contact-message") ? (
                <p id="contact-message-error" className="field-error">{fieldError("contact-message")?.message}</p>
              ) : null}
            </div>
            <button type="submit" className="btn btn-filled contact-submit">
              Send message
              <ArrowRight size={16} aria-hidden />
            </button>
            <p className="contact-form-note" role="status">
              {status || "This opens your mail app with the message filled in. Nothing is stored on this site."}
            </p>
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
          <span>© 2026 Manikanta Sirumalla</span>
          <span>Built with passion in Baltimore, MD.</span>
        </div>
      </footer>
    </>
  );
}
