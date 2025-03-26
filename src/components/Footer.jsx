// Footer Component
const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t bg-gray-50 border-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center text-white font-bold">
                MS
              </div>
              <span className="font-semibold text-xl">Manikanta Sirumalla</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              iOS Developer & Data Science Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Manikanta Sirumalla. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
