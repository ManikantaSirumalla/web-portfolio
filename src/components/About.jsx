export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <p className="section-eyebrow reveal">About</p>
        <p className="about-statement reveal d1">
          I&apos;m an iOS Developer with <strong>~3 years building production apps</strong> using
          Swift and SwiftUI, focused on elegant UI and performance. Currently pursuing my{' '}
          <strong>Master&apos;s in Data Science at UMBC</strong>, I&apos;m passionate about bridging
          the gap between beautiful mobile experiences and data-driven intelligence.
        </p>
        <div className="about-details">
          <div className="about-detail reveal d2">
            <div className="about-detail-label">Mobile Craft</div>
            <p>
              I build iOS apps with precision &mdash; MVC, MVVM, Delegate patterns, buttery SwiftUI
              animations, and performance optimizations that make a real difference. From custom
              tab bars to localized multi-language apps, I care about every detail users interact
              with.
            </p>
          </div>
          <div className="about-detail reveal d3">
            <div className="about-detail-label">Data Science</div>
            <p>
              Currently deepening my expertise in Python, R, SQL, machine learning, and
              statistical analysis at UMBC. I build ML models with Scikit-Learn, TensorFlow,
              and PyTorch &mdash; from graduate admissions prediction to trading trend analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
