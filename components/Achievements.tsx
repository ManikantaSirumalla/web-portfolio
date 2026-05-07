export default function Achievements() {
  return (
    <section className="section" id="highlights">
      <div className="section-inner">
        <p className="section-eyebrow">Highlights</p>
        <h2 className="section-heading">
          Milestones I&apos;m proud of.
          <br />
          <span className="section-heading-muted">Built with focus and consistency.</span>
        </h2>

        <div className="achievement-grid">
          <article className="achievement-card achievement-card-full">
            <div className="achievement-meta">CBIC Innovation Competition</div>
            <h3 className="achievement-title">First Prize Winner</h3>
            <p className="achievement-desc achievement-text-block">
              CBIC was one of the most special moments in my journey. I presented my work, walked
              through the problem-to-solution story, and shared how I approach building practical
              products with real user impact. Winning First Prize gave me a huge confidence boost
              and reminded me why I love building at the intersection of innovation and execution.
            </p>
            <div className="achievement-placeholder-row">
              <div className="achievement-placeholder">
                <img
                  src="/cbic/1.jpg"
                  alt="CBIC Innovation Competition highlight 1"
                  className="achievement-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="achievement-placeholder">
                <img
                  src="/cbic/2.jpg"
                  alt="CBIC Innovation Competition highlight 2"
                  className="achievement-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="achievement-placeholder">
                <img
                  src="/cbic/3.jpg"
                  alt="CBIC Innovation Competition highlight 3"
                  className="achievement-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </article>

          <article className="achievement-card achievement-card-featured achievement-card-full">
            <div className="achievement-meta">Apple</div>
            <h3 className="achievement-title">Invited to WWDC 2026</h3>
            <div className="achievement-wwdc-hstack">
              <div className="achievement-wwdc-image-wrap achievement-wwdc-image-wrap-small">
                <img
                  src="/cbic/wwdc.jpg"
                  alt="WWDC 2026 invite"
                  className="achievement-wwdc-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="achievement-wwdc-content">
                <p className="achievement-desc achievement-text-block">
                  Getting invited to WWDC 2026 felt surreal. It was one of those full-circle
                  moments that reminded me why I chose iOS in the first place. For me, this invite
                  is not just recognition — it is motivation to keep building thoughtful, high
                  quality products and grow with the Apple developer community.
                </p>
                <div className="achievement-chip">WWDC 2026 Invite</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
