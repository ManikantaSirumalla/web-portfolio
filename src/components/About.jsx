import profilepic from '../assets/profile.JPG';

const About = ({ id }) => {
  return (
    <section id={id} className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="p-8 rounded-3xl shadow-lg bg-white">
              <div className="w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
                <img src={profilepic} alt="Profile" className="w-full h-full" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Manikanta Sirumalla</h3>
                <p className="mb-4 text-gray-600">iOS Developer & Data Science Enthusiast</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="p-6 rounded-3xl shadow-lg bg-white h-full">
              <h3 className="text-2xl font-bold mb-2">Innovative iOS Developer transitioning to Data Science</h3>
              <p className="mb-2 text-gray-600">
                With around 3 years of experience developing iOS applications using Swift and SwiftUI, I've specialized in creating 
                elegant, user-friendly interfaces and optimizing app performance. Currently pursuing a Master's in Data Science at 
                the University of Maryland, Baltimore County (UMBC).
              </p>
              <p className="mb-4 text-gray-600">
                I'm passionate about leveraging my programming expertise to solve complex problems through machine learning and 
                data analytics. My background in iOS development gives me a unique perspective on creating data-driven applications 
                with exceptional user experiences.
              </p>
              <p className="mb-2 text-gray-600">
                Throughout my career, I have worked on various projects that have honed my skills in software development, problem-solving, 
                and teamwork. My experience at ZetoStudio, Grid Dynamics, and Cognizant has provided me with a solid foundation in 
                software engineering principles and best practices.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-100">
                  <h4 className="font-medium mb-2">Education</h4>
                  <p className="text-gray-600">Masters in Data Science, UMBC</p>
                  <p className="text-gray-600">B.Tech in Computer Science</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-100">
                  <h4 className="font-medium mb-2">Location</h4>
                  <p className="text-gray-600">Baltimore, MD, USA</p>
                  <p className="text-gray-600">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;