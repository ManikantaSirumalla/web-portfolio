export default function Header({ theme, toggleTheme, menuOpen, setMenuOpen }) {
  const closeMobile = () => setMenuOpen(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    closeMobile();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">Manikanta Sirumalla.</a>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
            <li><a href="#work" onClick={(e) => handleNavClick(e, '#work')}>Work</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
            <li><a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')}>Testimonials</a></li>
            <li><a href="#writing" onClick={(e) => handleNavClick(e, '#writing')}>Publications</a></li>
          </ul>
          <div className="nav-right">
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '\u2600' : '\u263E'}
            </button>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={closeMobile}>{'\u2715'}</button>
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
        <a href="#work" onClick={(e) => handleNavClick(e, '#work')}>Work</a>
        <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a>
        <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')}>Testimonials</a>
        <a href="#writing" onClick={(e) => handleNavClick(e, '#writing')}>Publications</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
      </div>
    </>
  );
}
