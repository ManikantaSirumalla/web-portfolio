const Stars = ({ count = 5, className = 'testimonial-stars' }) => (
  <div className={className}>
    {Array.from({ length: count }, (_, i) => (
      <span key={i}>&#9733;</span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-inner">
        <p className="section-eyebrow reveal">Testimonials</p>
        <h2 className="section-heading reveal d1">
          What people say.<br />
          <span className="section-heading-muted">About working with me.</span>
        </h2>
        <div className="testimonials-grid">
          {/* Featured testimonial */}
          <div className="testimonial-featured reveal d2">
            <div>
              <Stars className="testimonial-featured-stars" />
              <p className="testimonial-featured-quote">
                &ldquo;Manikanta consistently delivered{' '}
                <strong>clean, well-architected iOS code</strong> that was easy to maintain and
                extend. His SwiftUI animations boosted user engagement by 20%, and his API
                optimizations <strong>cut data retrieval time by 30%</strong>. A reliable,
                detail-oriented engineer.&rdquo;
              </p>
            </div>
            <div>
              <div className="testimonial-featured-meta">
                <div className="testimonial-featured-avatar">RK</div>
                <div>
                  <div className="testimonial-featured-name">Rajesh Kumar</div>
                  <div className="testimonial-featured-role">Engineering Lead, ZetoStudio</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 1 */}
          <div className="testimonial-card reveal d3">
            <Stars />
            <p className="testimonial-quote">
              Manikanta picked up our full development workflow remarkably fast during his
              internship. He was shipping production-quality features by week three and his code
              reviews were consistently thorough.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar ta-1">DS</div>
              <div>
                <div className="testimonial-name">David Stein</div>
                <div className="testimonial-role">Senior iOS Engineer, Grid Dynamics</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="testimonial-card reveal d4">
            <Stars />
            <p className="testimonial-quote">
              His ability to combine iOS expertise with a strong data science foundation makes
              him stand out. The ML projects he&apos;s built in our program show real engineering
              maturity &mdash; not just notebooks, but clean, reproducible pipelines.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar ta-2">SP</div>
              <div>
                <div className="testimonial-name">Dr. Samantha Park</div>
                <div className="testimonial-role">Professor, UMBC Data Science</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="testimonial-card reveal d5">
            <Stars />
            <p className="testimonial-quote">
              Great team player who brings a solutions-first mindset. He localized our apps for
              multiple regions flawlessly and reduced code duplication by 30% with smart use of
              generics. Highly recommended.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar ta-3">PA</div>
              <div>
                <div className="testimonial-name">Priya Anand</div>
                <div className="testimonial-role">Product Manager, ZetoStudio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
