import React, { useState } from 'react';
import newswaveImage from '../assets/newswave.png';
import whimAIImage from '../assets/whimAI.png';
import phototalesImage from '../assets/phototales.png';
import calculatorImage from '../assets/calculator.png';

const Projects = ({ id }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [projects, setProjects] = useState([
    {
      title: "NewsWave",
      description: "A news aggregation app with multiple categories providing diverse content for users.",
      features: [
        "Multiple news categories (Entertainment, Business, Technology, Sports)",
        "Trending news and keyword search functionality",
        "Bookmarking for personalized user experiences",
        "Content sharing across social platforms",
        "Custom tab bar with interactive animations"
      ],
      techStack: "SwiftUI, Combine, Codable, Kingfisher, Firebase, Firestore, Authentication",
      image: newswaveImage
    },
    {
      title: "WhimAI",
      description: "An AI-powered chat application with voice input, text-to-speech, and multi-image support for interactive conversations.",
      features: [
        "Voice input and text-to-speech capabilities",
        "Multi-image support for enhanced interactions",
        "Custom voice options with 'Choose a Voice' feature",
        "PDF export of chat histories via MailGun integration",
        "Haptic feedback for improved user engagement",
        "Resizable widgets for enhanced accessibility"
      ],
      techStack: "Swift, SwiftUI, UIKit, Combine, AVFoundation, Firebase, MailGun, Alamofire",
      image: whimAIImage
    },
    {
      title: "PhotoTales",
      description: "An iOS application designed to provide users with a seamless experience in searching and viewing images along with their descriptions.",
      features: [
        "Image Search: Allows users to search for images using specific keywords, delivering relevant results promptly.",
        "Description Retrieval: Provides detailed descriptions related to the searched images, enhancing the user's understanding and engagement.",
        "Combine Framework Integration: Utilizes Apple's Combine framework for efficient handling of asynchronous events and data streams, ensuring smooth and reactive user interactions.",
        "MVVM Architecture: Implements the Model-View-ViewModel (MVVM) design pattern to promote a clear separation of concerns, resulting in more maintainable and testable code.",
        "User-Friendly Interface: Features an intuitive and clean interface, making navigation and interaction straightforward for users."
      ],
      techStack: "Swift, SwiftUI, Combine",
      image: phototalesImage
    },
    {
      title: "Calculator",
      description: "A user-friendly iOS application designed to perform basic arithmetic operations efficiently.",
      features: [
        "Basic Arithmetic Operations: Supports addition, subtraction, multiplication, and division.",
        "Clear Functionality: Includes a clear button to reset the current calculation.",
        "Real-Time Display: Provides immediate feedback by displaying inputs and results as calculations are performed.",
        "Error Handling: Implements safeguards against common errors, such as division by zero, ensuring reliable operation."
      ],
      techStack: "Swift, SwiftUI, MVC",
      image: calculatorImage
    },
    {
      title: "Graduate Admissions Predictor with ML (Academic project)",
      description: "A predictive model to analyze university admission chances based on various factors.",
      features: [
        "Analysis based on GRE, TOEFL scores, CGPA, and experience",
        "Multiple predictive models including regression and decision trees",
        "Comprehensive exploratory data analysis (EDA)",
        "Feature engineering for optimized performance"
      ],
      techStack: "Python, Pandas, NumPy, Scikit-learn, Matplotlib",
      image: null
    },
  ]);

  return (
    <section id={id} className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Selector */}
          <div className="lg:w-1/3">
            <div className="rounded-2xl p-6 bg-gray-100">
              <h3 className="text-xl font-bold mb-4">My Projects</h3>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <button 
                    key={index}
                    onClick={() => {
                      setActiveProject(-1); // Temporarily set to -1 to trigger re-render
                      setTimeout(() => setActiveProject(index), 100); // Set to the actual index after a short delay
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-colors ${
                      activeProject === index 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <h4 className="font-medium">{project.title}</h4>
                    <p className={`text-sm ${activeProject === index ? 'text-blue-100' : 'text-gray-500'}`}>
                      {project.techStack.split(',')[0]}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Project Details */}
          <div className="lg:w-2/3">
            {projects.length > 0 && activeProject !== -1 && (
              <div className="rounded-3xl overflow-hidden shadow-lg bg-white relative">
                <div className="h-64 flex items-center justify-center relative">
                  {projects[activeProject].image && (
                    <div className="w-48 h-96 border-0 border-transparent rounded-3xl overflow-hidden absolute top-0.5 transform -translate-x-1/5 -translate-y-1/5 z-30 animate-zoom-in">
                      <img src={projects[activeProject].image} alt={projects[activeProject].title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center  text-9xl font-bold gradient-text">
                    {projects[activeProject].title}
                  </div>
                </div>
                
                <div className="p-20">
                  <p className="text-gray-600 mb-6 mt-6">{projects[activeProject].description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-x-8 list-disc list-outside text-left">
                      {projects[activeProject].features.map((feature, index) => (
                        <li key={index} className="text-gray-600 text-sm mb-3">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].techStack.split(', ').map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;