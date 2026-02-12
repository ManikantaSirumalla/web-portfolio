export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-elevated)' }}>
      <div className="section-inner">
        <p className="section-eyebrow reveal">Expertise</p>
        <h2 className="section-heading reveal d1">
          Two domains.<br />
          <span className="section-heading-muted">One engineer.</span>
        </h2>
        <div className="skills-grid">
          {/* iOS Development */}
          <div className="skill-card reveal d2">
            <span className="skill-icon">📱</span>
            <h3 className="skill-card-title">iOS Development</h3>
            <p className="skill-card-sub">Elegant, performant native apps</p>
            <div className="skill-list">
              {['Swift','SwiftUI','UIKit','Combine','CoreData','Firebase','ARKit','WidgetKit','AVFoundation','MapKit','CocoaPods','SPM'].map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>
            <div className="proficiency" data-observed="false">
              {[
                { label: 'Swift / SwiftUI', w: 95 },
                { label: 'Architecture', w: 90 },
                { label: 'Animations & UI', w: 92 },
                { label: 'Performance', w: 88 },
              ].map((p) => (
                <div className="prof-row" key={p.label}>
                  <span className="prof-label">{p.label}</span>
                  <div className="prof-track">
                    <div className="prof-fill" data-w={p.w}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Science & ML */}
          <div className="skill-card reveal d3">
            <span className="skill-icon">📊</span>
            <h3 className="skill-card-title">Data Science &amp; ML</h3>
            <p className="skill-card-sub">From notebooks to insights</p>
            <div className="skill-list">
              {['Python','R','SQL','Pandas','NumPy','Scikit-Learn','TensorFlow','PyTorch','Jupyter','MATLAB'].map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>
            <div className="proficiency" data-observed="false">
              {[
                { label: 'Python / Pandas', w: 88 },
                { label: 'Machine Learning', w: 82 },
                { label: 'Data Analysis', w: 85 },
                { label: 'SQL / R', w: 80 },
              ].map((p) => (
                <div className="prof-row" key={p.label}>
                  <span className="prof-label">{p.label}</span>
                  <div className="prof-track">
                    <div className="prof-fill" data-w={p.w}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
