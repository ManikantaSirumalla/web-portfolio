import Image from "next/image";

const wwdcThumbs = ["img-6317.jpg", "img-6944.jpg", "img-6477.jpg"];

export default function Achievements() {
  return (
    <section className="section" id="highlights">
      <div className="section-inner">
        <p className="section-eyebrow">03 — Highlights</p>
        <h2 className="section-heading">
          Milestones from the work.
          <span> Competitions, invitations, and the rooms they opened.</span>
        </h2>

        <div className="achievement-grid">
          <article className="achievement-card">
            <div className="achievement-meta">CBIC Innovation Competition</div>
            <h3 className="achievement-title">First prize</h3>
            <p className="achievement-desc">
              CBIC was one of the most special moments in my journey. I presented my work, walked
              through the problem-to-solution story, and shared how I approach building practical
              products with real user impact. Winning first prize gave me a huge confidence boost
              and reminded me why I love building at the intersection of innovation and execution.
            </p>
            <div className="achievement-photos">
              {["1.jpg", "2.jpg", "3.jpg"].map((image, index) => (
                <div className="achievement-photo" key={image}>
                  <Image
                    src={`/assets/achievements/cbic/${image}`}
                    alt={`CBIC Innovation Competition photograph ${index + 1}`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </article>

          <article className="achievement-card achievement-card-featured">
            <div className="achievement-meta">WWDC 2026</div>
            <h3 className="achievement-title">In the room</h3>
            <p className="achievement-desc">
              From watching WWDC on a small screen in a small village in India to being invited by
              Apple to attend its developer conference in person, this moment means a lot to me.
              Being surrounded by the Apple developer community, experiencing the event up close,
              and meeting Tim Cook and Joz from Apple was incredible. It felt like a milestone for
              both my professional journey and personal growth.
            </p>
            <div className="achievement-feature">
              <Image
                src="/assets/achievements/wwdc/img-6656.jpg"
                alt="Manikanta Sirumalla at WWDC 2026"
                width={1600}
                height={1066}
                sizes="(max-width: 900px) 100vw, 1120px"
              />
            </div>
            <div className="achievement-photos">
              {wwdcThumbs.map((image, index) => (
                <div className="achievement-photo" key={image}>
                  <Image
                    src={`/assets/achievements/wwdc/${image}`}
                    alt={`WWDC 2026 photograph ${index + 1}`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <div className="achievement-feature">
              <Image
                src="/assets/achievements/wwdc/img-6281.jpg"
                alt="Another moment from WWDC 2026"
                width={1600}
                height={1066}
                sizes="(max-width: 900px) 100vw, 1120px"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
