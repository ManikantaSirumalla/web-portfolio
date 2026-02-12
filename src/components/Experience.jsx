const experiences = [
  {
    date: 'Jun 2022 — Oct 2024',
    company: 'ZetoStudio',
    role: 'iOS Developer · Hyderabad, India',
    desc: 'Led iOS app development using MVC, MVVM, and Delegate patterns, improving architecture and maintainability. Optimized API requests cutting data retrieval time by 30%, increased user engagement by 20% via interactive SwiftUI animations, and implemented Codable-based JSON parsing reducing data processing time by 50%.',
    chips: ['⚡ 30% Faster APIs', '📈 20% More Engagement', '🚀 40% Performance Boost', '🌐 Multi-Language Localization'],
  },
  {
    date: 'Jan 2022 — Jun 2022',
    company: 'Grid Dynamics',
    role: 'iOS Developer Intern · Remote',
    desc: 'Developed new mobile apps across the full lifecycle. Collaborated with a cross-functional team on UI/UX design, API integration, and Git workflows. Gained deep experience with Swift, Xcode, generics, and code optimization.',
    chips: ['📱 Full Lifecycle Development', '🤝 Cross-Functional Team'],
  },
  {
    date: 'Oct 2021 — Jan 2022',
    company: 'Cognizant',
    role: 'Associate Software Engineer · Hyderabad, India',
    desc: 'Contributed to enterprise applications focused on performance and scalability. Worked in cross-functional teams to deliver client solutions and applied testing tools including Selenium.',
    chips: ['🏢 Enterprise Apps', '🧪 Testing & QA'],
  },
  {
    date: '2024 — Present',
    company: 'University of Maryland, Baltimore County',
    role: 'M.S. in Data Science · Baltimore, MD',
    desc: 'Deepening expertise in machine learning, statistical analysis, Python, R, SQL, and data-driven decision making. Working on academic ML projects including graduate admissions prediction and trading trend analysis.',
    chips: ['🎓 Master\'s in Data Science', '🐍 Python & R', '📊 ML Research'],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-elevated)' }}>
      <div className="section-inner">
        <p className="section-eyebrow reveal">Experience</p>
        <h2 className="section-heading reveal d1">
          Where I&apos;ve<br />
          <span className="section-heading-muted">made impact.</span>
        </h2>
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div className={`exp-entry reveal d${Math.min(i + 2, 5)}`} key={exp.company}>
              <div className="exp-date">{exp.date}</div>
              <div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-role">{exp.role}</div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-chips">
                  {exp.chips.map((chip) => (
                    <span className="exp-chip" key={chip}>{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
