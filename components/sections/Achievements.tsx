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
                  src="/assets/achievements/cbic/1.jpg"
                  alt="CBIC Innovation Competition highlight 1"
                  className="achievement-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="achievement-placeholder">
                <img
                  src="/assets/achievements/cbic/2.jpg"
                  alt="CBIC Innovation Competition highlight 2"
                  className="achievement-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="achievement-placeholder">
                <img
                  src="/assets/achievements/cbic/3.jpg"
                  alt="CBIC Innovation Competition highlight 3"
                  className="achievement-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </article>

          <article className="achievement-card achievement-card-featured achievement-card-full">
            <div className="achievement-meta">WWDC 2026</div>
            <h3 className="achievement-title">WWDC Moments</h3>
            <p className="achievement-desc achievement-text-block">
              From watching WWDC on a small screen in a small village in India to being invited by
              Apple to attend its prestigious developer conference in person, this moment means a
              lot to me. Being surrounded by the Apple developer community, experiencing the event
              up close, and meeting Tim Cook and Joz from Apple was incredible. It felt like a
              milestone for both my professional journey and personal growth, and it reminded me how
              far consistent curiosity, hard work, and belief can take you.
            </p>
            <div className="achievement-wwdc-image-wrap">
              <img
                src="/assets/achievements/wwdc/img-6656.jpg"
                alt="WWDC 2026 featured moment"
                className="achievement-wwdc-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="achievement-placeholder-row">
              {["img-6317.jpg", "img-6944.jpg", "img-6477.jpg"].map((image, index) => (
                <div className="achievement-placeholder" key={image}>
                  <img
                    src={`/assets/achievements/wwdc/${image}`}
                    alt={`WWDC 2026 moment ${index + 1}`}
                    className="achievement-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <div className="achievement-wwdc-image-wrap">
              <img
                src="/assets/achievements/wwdc/img-6281.jpg"
                alt="WWDC 2026 moment"
                className="achievement-wwdc-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
