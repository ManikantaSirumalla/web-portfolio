// Hero Section Component

import { useEffect } from 'react';
import swiftLogo from '../assets/swift-logo.png';

const Hero = ({ id }) => {
  useEffect(() => {
    const swiftLogo = document.getElementById('swift-logo');
    swiftLogo.classList.add('animate-bird-fly-in');
  }, []);

  return (
    <section id={id} className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
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
        <div className="md:w-2/5">
          <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl shadow-xl flex items-center justify-center z-10">
              <img id="swift-logo" src={swiftLogo} alt="SwiftLogo" className="w-80 h-80" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-2xl transform rotate-12 z-0 flex items-center justify-center">
              <span className="text-white font-bold text-6xl opacity-40">ML</span>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-500 rounded-full z-0 flex items-center justify-center">
              <span className="text-white font-bold text-6xl opacity-40 ">AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

