// Header Component

import { useState, useEffect, useRef } from 'react';

const Header = ({ activeSection, menuOpen, setMenuOpen }) => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = window.scrollY;
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' }
    ];
  
    const handleNavClick = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-white text-gray-900 border-gray-200 border-b`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center text-white font-bold">
              MS
            </div>
            <span className="font-semibold text-xl">Manikanta Sirumalla</span>
          </div>
  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-200 hover:text-blue-500 ${activeSection === item.id ? 'text-blue-500 font-medium' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:text-blue-500"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
  
        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="md:hidden py-4 px-6 space-y-4 bg-white">
            {navItems.map(item => (
              <div key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2 ${activeSection === item.id ? 'text-blue-500 font-medium' : ''}`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>
        )}
      </header>
    );
  };

export default Header;

