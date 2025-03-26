import './App.css';
import { useState, useEffect } from 'react';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Background />
      <div className="app-container">
        <Header activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero id="home" />
        <About id="about" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
