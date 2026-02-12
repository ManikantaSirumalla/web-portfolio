import { useEffect, useRef } from 'react';
import heroPhoto from '../assets/profile.png';

const TECHS = [
  'Swift','SwiftUI','UIKit','Combine','CoreData',
  'Firebase','ARKit','WidgetKit','Python','Pandas',
  'Scikit-Learn','TensorFlow','PyTorch','SQL','R',
  'Xcode','CocoaPods','SPM','REST APIs','MapKit',
];

export default function Hero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let pts = [];
    let mouse = { x: -999, y: -999 };
    let animId;

    function resize() {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }

    class P {
      constructor() {
        this.x = Math.random() * c.width;
        this.y = Math.random() * c.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 1.5 + 0.5;
        this.o = Math.random() * 0.5 + 0.15;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          this.vx += (dx / d) * 0.015;
          this.vy += (dy / d) * 0.015;
        }
        this.vx *= 0.999;
        this.vy *= 0.999;
        if (this.x < 0 || this.x > c.width) this.vx *= -1;
        if (this.y < 0 || this.y > c.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = getComputedStyle(document.documentElement)
          .getPropertyValue('--particle-c')
          .trim();
        ctx.globalAlpha = this.o;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function init() {
      resize();
      const n = Math.min(Math.floor((c.width * c.height) / 14000), 100);
      pts = Array.from({ length: n }, () => new P());
    }

    function drawLines() {
      const lc = getComputedStyle(document.documentElement)
        .getPropertyValue('--particle-l')
        .trim();
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = lc;
            ctx.globalAlpha = 1 - d / 140;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animId = requestAnimationFrame(animate);
    }

    const handleResize = () => init();
    const handleMouseMove = (e) => {
      const r = c.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    window.addEventListener('resize', handleResize);
    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
      heroEl.addEventListener('mouseleave', handleMouseLeave);
    }

    init();
    animate();

    // Stat counter animation
    const statObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-count]').forEach((el) => {
              const t = +el.dataset.count;
              let cur = 0;
              const s = t / 35;
              const timer = setInterval(() => {
                cur += s;
                if (cur >= t) {
                  cur = t;
                  clearInterval(timer);
                }
                el.textContent = Math.floor(cur) + '+';
              }, 30);
            });
            statObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    const statsEl = document.querySelector('.hero-stats');
    if (statsEl) statObs.observe(statsEl);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
        heroEl.removeEventListener('mouseleave', handleMouseLeave);
      }
      statObs.disconnect();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <canvas id="heroCanvas" ref={canvasRef}></canvas>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>
      <div className="hero-grid"></div>

      {/* Domain background graphics */}
      <div className="hero-bg-element bg-code bg-code-1">
        <div className="bg-code-header">
          <span className="bg-dot" style={{ background: '#ff5f57' }}></span>
          <span className="bg-dot" style={{ background: '#febc2e' }}></span>
          <span className="bg-dot" style={{ background: '#28c840' }}></span>
        </div>
        <code>
          <span className="ck">struct</span> <span className="ct">ContentView</span>: <span className="cp">View</span> {'{'}<br />
          &nbsp;&nbsp;<span className="ck">@State</span> <span className="ck">var</span> predictions: [<span className="ct">MLResult</span>]<br /><br />
          &nbsp;&nbsp;<span className="ck">var</span> body: <span className="ck">some</span> <span className="cp">View</span> {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="ct">ScrollView</span> {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ct">LazyVGrid</span>(columns) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ck">ForEach</span>(predictions)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </code>
      </div>

      <div className="hero-bg-element bg-code bg-code-2">
        <div className="bg-code-header">
          <span className="bg-dot" style={{ background: '#ff5f57' }}></span>
          <span className="bg-dot" style={{ background: '#febc2e' }}></span>
          <span className="bg-dot" style={{ background: '#28c840' }}></span>
        </div>
        <code>
          <span className="ck">import</span> torch<br />
          <span className="ck">from</span> transformers <span className="ck">import</span> <span className="ct">AutoModel</span><br /><br />
          <span className="ck">class</span> <span className="ct">SentimentNet</span>(nn.<span className="ct">Module</span>):<br />
          &nbsp;&nbsp;<span className="ck">def</span> <span className="cf">forward</span>(<span className="cv">self</span>, x):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;h = <span className="cv">self</span>.encoder(x)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="ck">return</span> <span className="cv">self</span>.classifier(h)
        </code>
      </div>

      {/* Neural Network SVG */}
      <svg className="hero-bg-element bg-neural" viewBox="0 0 280 200" fill="none">
        <circle cx="40" cy="40" r="8" className="nn-node" />
        <circle cx="40" cy="80" r="8" className="nn-node" />
        <circle cx="40" cy="120" r="8" className="nn-node" />
        <circle cx="40" cy="160" r="8" className="nn-node" />
        <circle cx="120" cy="50" r="8" className="nn-node nn-h" />
        <circle cx="120" cy="90" r="8" className="nn-node nn-h" />
        <circle cx="120" cy="130" r="8" className="nn-node nn-h" />
        <circle cx="200" cy="60" r="8" className="nn-node nn-h2" />
        <circle cx="200" cy="100" r="8" className="nn-node nn-h2" />
        <circle cx="200" cy="140" r="8" className="nn-node nn-h2" />
        <circle cx="260" cy="100" r="10" className="nn-node nn-out" />
        <line x1="48" y1="40" x2="112" y2="50" className="nn-line" />
        <line x1="48" y1="40" x2="112" y2="90" className="nn-line" />
        <line x1="48" y1="80" x2="112" y2="50" className="nn-line" />
        <line x1="48" y1="80" x2="112" y2="90" className="nn-line" />
        <line x1="48" y1="80" x2="112" y2="130" className="nn-line" />
        <line x1="48" y1="120" x2="112" y2="90" className="nn-line" />
        <line x1="48" y1="120" x2="112" y2="130" className="nn-line" />
        <line x1="48" y1="160" x2="112" y2="130" className="nn-line" />
        <line x1="48" y1="160" x2="112" y2="90" className="nn-line" />
        <line x1="128" y1="50" x2="192" y2="60" className="nn-line nn-l2" />
        <line x1="128" y1="50" x2="192" y2="100" className="nn-line nn-l2" />
        <line x1="128" y1="90" x2="192" y2="60" className="nn-line nn-l2" />
        <line x1="128" y1="90" x2="192" y2="100" className="nn-line nn-l2" />
        <line x1="128" y1="90" x2="192" y2="140" className="nn-line nn-l2" />
        <line x1="128" y1="130" x2="192" y2="100" className="nn-line nn-l2" />
        <line x1="128" y1="130" x2="192" y2="140" className="nn-line nn-l2" />
        <line x1="208" y1="60" x2="250" y2="100" className="nn-line nn-l3" />
        <line x1="208" y1="100" x2="250" y2="100" className="nn-line nn-l3" />
        <line x1="208" y1="140" x2="250" y2="100" className="nn-line nn-l3" />
        <circle r="3" className="nn-pulse">
          <animateMotion dur="3s" repeatCount="indefinite" path="M48,80 L112,90" />
        </circle>
        <circle r="3" className="nn-pulse">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M128,90 L192,100" />
        </circle>
        <circle r="3" className="nn-pulse">
          <animateMotion dur="2s" repeatCount="indefinite" path="M208,100 L250,100" />
        </circle>
      </svg>

      {/* iOS Wireframe */}
      <div className="hero-bg-element bg-wireframe bg-wire-1">
        <div className="wire-statusbar"><span>9:41</span><span>&#x25CF;&#x25CF;&#x25CF;</span></div>
        <div className="wire-nav-bar"></div>
        <div className="wire-card"></div>
        <div className="wire-card wire-card-sm"></div>
        <div className="wire-line"></div>
        <div className="wire-line wire-line-short"></div>
        <div className="wire-btn-row"><div className="wire-btn-pill"></div><div className="wire-btn-pill"></div></div>
        <div className="wire-tab-bar">
          <div className="wire-tab-dot"></div>
          <div className="wire-tab-dot active"></div>
          <div className="wire-tab-dot"></div>
          <div className="wire-tab-dot"></div>
        </div>
      </div>

      {/* ML Math Formulas */}
      <div className="hero-bg-element bg-formula bg-formula-1">&sigma;(z) = 1 / (1 + e<sup>&minus;z</sup>)</div>
      <div className="hero-bg-element bg-formula bg-formula-2">&nabla;<sub>&theta;</sub>J(&theta;) = E[&nabla;log &pi;<sub>&theta;</sub>]</div>
      <div className="hero-bg-element bg-formula bg-formula-3">L = &minus;&Sigma; y&middot;log(&ycirc;)</div>
      <div className="hero-bg-element bg-formula bg-formula-4">f(x) = ReLU(Wx + b)</div>

      {/* Circuit Lines */}
      <svg className="hero-bg-element bg-circuit" viewBox="0 0 400 300" fill="none">
        <path d="M20,150 H80 L100,100 H160 L180,150 H240 L260,80 H340" className="circuit-path" />
        <path d="M50,200 H120 L140,250 H200 L220,180 H300" className="circuit-path cp-2" />
        <circle cx="80" cy="150" r="4" className="circuit-node" />
        <circle cx="160" cy="100" r="4" className="circuit-node" />
        <circle cx="240" cy="150" r="4" className="circuit-node" />
        <circle cx="120" cy="200" r="4" className="circuit-node" />
        <circle cx="200" cy="250" r="4" className="circuit-node" />
        <circle r="3" className="circuit-pulse">
          <animateMotion dur="4s" repeatCount="indefinite" path="M20,150 L80,150 L100,100 L160,100 L180,150 L240,150 L260,80 L340,80" />
        </circle>
        <circle r="3" className="circuit-pulse cp-2">
          <animateMotion dur="5s" repeatCount="indefinite" path="M50,200 L120,200 L140,250 L200,250 L220,180 L300,180" />
        </circle>
      </svg>

      {/* Mini Chart */}
      <div className="hero-bg-element bg-minichart bg-minichart-1">
        <div className="mc-label">accuracy</div>
        <div className="mc-bars">
          <div className="mc-bar" style={{ height: '40%' }}></div>
          <div className="mc-bar" style={{ height: '55%' }}></div>
          <div className="mc-bar" style={{ height: '48%' }}></div>
          <div className="mc-bar" style={{ height: '72%' }}></div>
          <div className="mc-bar" style={{ height: '65%' }}></div>
          <div className="mc-bar" style={{ height: '80%' }}></div>
          <div className="mc-bar mc-bar-accent" style={{ height: '92%' }}></div>
        </div>
        <div className="mc-value">0.94</div>
      </div>

      {/* Loss Curve */}
      <svg className="hero-bg-element bg-losscurve" viewBox="0 0 180 80" fill="none">
        <text x="4" y="10" className="lc-label">training loss</text>
        <polyline points="10,60 30,52 50,40 70,30 90,24 110,20 130,18 150,17 170,16.5" className="lc-line" />
        <polyline points="10,65 30,58 50,48 70,42 90,38 110,36 130,35 150,34.5 170,34" className="lc-line lc-val" />
      </svg>

      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span> Available for opportunities &mdash; Baltimore, MD
          </div>
          <h1 className="hero-headline">
            <span className="text-gradient">iOS.</span> Data Science.<br />Perfection.
          </h1>
          <p className="hero-sub">
            I&apos;m Manikanta Sirumalla &mdash; an iOS Developer &amp; Data Science Enthusiast
            crafting elegant, performant apps with Swift and SwiftUI. Currently pursuing my
            Master&apos;s in Data Science at UMBC.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-filled">See my work</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
            <a href="#" className="btn btn-ghost">Resume &rsaquo;</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hs-value" data-count="3">0+</div>
              <div className="hs-label">Years Experience</div>
            </div>
            <div>
              <div className="hs-value" data-count="10">0+</div>
              <div className="hs-label">Apps Shipped</div>
            </div>
            <div>
              <div className="hs-value" data-count="6">0+</div>
              <div className="hs-label">Publications</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-3d">
            <div className="hero-photo-wash"></div>
            <div className="hero-photo-shadow"></div>
            <div className="hero-deco-line"></div>
            <div className="hero-deco-curve"></div>
            <img src={heroPhoto} alt="Manikanta" />
            <div className="float-badge float-badge-hello">Hello</div>
            <div className="float-badge float-badge-swift">🍎 Swift &amp; SwiftUI</div>
            <div className="float-badge float-badge-ml">📊 Data Science</div>
          </div>
        </div>
      </div>

      <div className="hero-tech-strip">
        <div className="tech-track">
          {[...TECHS, ...TECHS].map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
