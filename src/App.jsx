import './App.css';
import { useState, useEffect, useCallback } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, [theme]);

  // Intersection Observer for .reveal elements
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Proficiency bar animation observer
  useEffect(() => {
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.observed === 'false') {
            entry.target.dataset.observed = 'true';
            entry.target.querySelectorAll('.prof-fill').forEach((bar, i) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.w + '%';
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('.proficiency').forEach((el) => barObs.observe(el));
    return () => barObs.disconnect();
  }, []);

  return (
    <>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Publications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
