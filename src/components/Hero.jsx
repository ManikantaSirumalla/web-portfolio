// Hero Section Component

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import iosVideo from '../assets/iosVideo.mov';

const Hero = ({ id }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById(id);
      const rect = heroSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setPlaying(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);

  return (
    <section id={id} className="min-h-screen flex items-center justify-center p-6 bg-white relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <p>
              <span className="gradient-text">iOS Developer,</span> <br />
              <span className="gradient-text">Data Science Fanatic </span> <br />
              with a Passion for Perfection.
            </p>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Crafting elegant, performant Apps with Swift & SwiftUI
          </p>
          <div className="flex flex-wrap gap-4 justify-center ">
            <a 
              href="https://drive.google.com/file/d/1Tj-ORp2vV8j-25CTqcRpLJUgHBOlOjL_/view?usp=share_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Resume
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w h-full absolute top-50 right-0 left-170 z-0">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <ReactPlayer 
              url={iosVideo} 
              playing={playing} 
              muted 
              width="100%" 
              height="100%" 
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-0"></div>
    </section>
  );
};

export default Hero;

