// Skills Section Component

const Skills = ({ id }) => {
  const skillCategories = [
    {
      title: "iOS Development",
      skills: [
        "Swift", "SwiftUI", "UIKit", "Xcode", "AutoLayout", 
        "Animations", "Concurrency", "Networking", "App Localisation", 
        "Accessibility", "Testing", "Debugging","ARKit", "Performance Optimization", "Widget kit","AVFoundation"
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Combine", "Firebase", "CocoaPods", "Swift Package Manager (SPM)", 
        "AVKit", "PDFKit", "Custom Frameworks", "Alamofire", 
        "MapKit", "AVFoundation", "Core Data", "Widget Kit", "ARKit"
      ]
    },
    {
      title: "Programming & Data Science",
      skills: [
        "Python", "R", "SQL", "Pandas", "NumPy", 
        "Scikit-learn", "TensorFlow", "PyTorch", 
        "Jupyter Notebooks", "MATLAB"
      ]
    },
    {
      title: "Software Development",
      skills: [
        "Software Development Methodologies", "API Integration", 
        "JSON & XML", "REST APIs", "Unit Testing", 
        "Agile", "TeamSupport", "Test Driven Development", "Code Reviews"
      ]
    }
  ];

  return (
    <section id={id} className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl shadow-lg bg-white"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-500">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-2 rounded-lg text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Publications & Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl shadow-lg bg-white">
              <h4 className="text-xl font-bold mb-6 text-blue-500">Technical Articles</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="block p-4 rounded-xl hover:bg-blue-50 transition-colors">
                    <h5 className="font-medium mb-1">Demystifying Debounce and Throttle in Combine Framework</h5>
                    <p className="text-sm text-gray-600">
                      This article explains how debounce filters out rapidly changing values, emitting the most recent one after a specified "quiet" period.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-4 rounded-xl hover:bg-blue-50 transition-colors">
                    <h5 className="font-medium mb-1">Exploring SwiftData: Enhancing Data Management in iOS Applications</h5>
                    <p className="text-sm text-gray-600">
                      Introduces SwiftData, highlighting its powerful functionalities for managing data in iOS applications.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-4 rounded-xl hover:bg-blue-50 transition-colors">
                    <h5 className="font-medium mb-1">How to Implement Native Volume Controls and AirPlay Button in SwiftUI</h5>
                    <p className="text-sm text-gray-600">
                      Explores how to implement native volume controls that respond to the iPhone's volume buttons and integrate an AirPlay button in SwiftUI.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-4 rounded-xl hover:bg-blue-50 transition-colors">
                    <h5 className="font-medium mb-1">A Guide to Localizing Your iOS Applications</h5>
                    <p className="text-sm text-gray-600">
                      Discusses the importance of localization in app development and provides steps to make your app accessible to a global audience.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-4 rounded-xl hover:bg-blue-50 transition-colors">
                    <h5 className="font-medium mb-1">Google Banner Ads in iOS Apps</h5>
                    <p className="text-sm text-gray-600">
                      Provides a walkthrough for integrating AdMob banner ads into an iOS app to maximize revenue potential.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-4 rounded-xl hover:bg-blue-50 transition-colors">
                    <h5 className="font-medium mb-1">Creating Custom iOS Frameworks</h5>
                    <p className="text-sm text-gray-600">
                      A comprehensive guide that walks through the process of creating a custom iOS framework and making it available through CocoaPods.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-3xl shadow-lg bg-white">
              <h4 className="text-xl font-bold mb-6 text-blue-500">Certifications</h4>
              <ul className="space-y-4">
                <li className="p-4 rounded-xl bg-gray-50">
                  <h5 className="font-medium mb-1">iOS & Swift Bootcamp</h5>
                  <p className="text-sm text-gray-600">Udemy</p>
                </li>
                <li className="p-4 rounded-xl bg-gray-50">
                  <h5 className="font-medium mb-1">Swift Fundamentals</h5>
                  <p className="text-sm text-gray-600">Pirple</p>
                </li>
                <li className="p-4 rounded-xl bg-gray-50">
                  <h5 className="font-medium mb-1">iOS App Development</h5>
                  <p className="text-sm text-gray-600">Pirple</p>
                </li>
                <li className="p-4 rounded-xl bg-gray-50">
                  <h5 className="font-medium mb-1">Python Programming Essentials</h5>
                  <p className="text-sm text-gray-600">ICAP</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
