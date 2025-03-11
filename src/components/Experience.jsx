const Experience = ({ id }) => {
  return (
    <section id={id} className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="p-8 rounded-3xl bg-white shadow-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-2">iOS Developer</h3>
                <p className="text-blue-500 font-medium mb-2">ZetoStudio, Hyderabad</p>
                <p className="text-gray-600 mb-4">Jun 2022 - Aug 2024</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <ul className="space-y-6">
                <li className="p-6 rounded-2xl bg-gray-50">
                  <h4 className="font-medium mb-2">Architecture & Performance</h4>
                  <p className="text-gray-600">
                    Spearheaded the development of iOS applications, utilizing design patterns such as MVC, MVVM, and
                    Delegate to ensure robust architecture and maintainable codebases. Optimized API requests to reduce data retrieval time 
                    by 30%, enhancing overall app responsiveness.
                  </p>
                </li>
                
                <li className="p-6 rounded-2xl bg-gray-50">
                  <h4 className="font-medium mb-2">UI/UX & Animations</h4>
                  <p className="text-gray-600">
                    Boosted user engagement by 20% through the integration of interactive animations using SwiftUI, leading
                    to a more dynamic and appealing user experience. Designed and developed a custom tab bar, significantly improving app 
                    navigation flow and enhancing the overall user experience.
                  </p>
                </li>
                
                <li className="p-6 rounded-2xl bg-gray-50">
                  <h4 className="font-medium mb-2">Technical Implementation</h4>
                  <p className="text-gray-600">
                    Implemented efficient JSON parsing techniques with Codable, achieving a 50% reduction in data
                    processing time. Enhanced app performance by 40% through the adoption of SwiftUI's ListView to handle extensive data
                    sets, resulting in smoother scrolling and loading experiences.
                  </p>
                </li>
                
                <li className="p-6 rounded-2xl bg-gray-50">
                  <h4 className="font-medium mb-2">Optimization & Internationalization</h4>
                  <p className="text-gray-600">
                    Minimized code duplication by 30% by implementing generics and creating modular, reusable
                    components to promote cleaner code practices. Localized multiple apps to support diverse languages, ensuring a 
                    consistent user interface across different regions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
