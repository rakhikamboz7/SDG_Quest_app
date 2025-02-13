const Footer = () => {
  return (
    <footer className="px-2 bg-white text-teal-700 z-50 opacity-100 shadow-md py-4 px-2 md:px-2 lg:px-12 flex flex-col items-center">
      {/* Main Footer Content */}
      <div className="w-full flex justify-between items-start">
        {/* Left Side: Logo and Tagline */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-4">
            <img src="src/assets/logo.svg" alt="SDG Logo" className="w-25 h-20" />
            <div>
              <h2 className="mr-20 text-l0 text-teal-700">Learn, Maintain, Support, Uphold</h2>
              <p className="mr-40 text-2xl font-semibold mt-2">Start Contributing to a healthy community Today!!</p>
            </div>
          </div>

          <div className="flex justify-between items-center w-250">
            <div className="relative bottom-20 left-100 grid grid-cols-3 gap-x-6 gap-y-1 ml-100">
              <a href="/about" className="hover:text-green-800">About</a>
              <a href="/dashboard" className="hover:text-green-800">Dashboard</a>
              <a href="/contact" className="hover:text-green-800">Contact Us</a>
              <a href="/learn-goals" className="hover:text-green-800">Learn Goals</a>
              <a href="/privacy" className="hover:text-green-800">Privacy Policy</a>
              <a href="/play-quiz" className="hover:text-green-800">Play Quiz</a>
            </div>

            <div className="flex flex-col items-start space-y-2 relative ml-15">
              <h3 className="text-lg font-semibold mr-29">Let&#39;s Chat!</h3>
              <div className="flex space-x-4 relative bottom-10 left-23">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="src/assets/x-icon.svg" alt="Twitter" className="w-8 h-7" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons8-facebook.svg" alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <hr className="w-full border-t relative top-0 border-gray-300 my-0" />
      <p className="text-sm mt-2 text-gray-600">&copy; {new Date().getFullYear()} SDG Quest. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

