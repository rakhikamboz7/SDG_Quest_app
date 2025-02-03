import video from "/src/assets/video.mp4";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left side content */}
          <div className="flex flex-col items-center mr-350">
            <div className="flex items-center mr-300 space-x-4 mb-6">
              <img
                src="/src/assets/logo.svg"
                alt="SDG Logo"
                className="h-15 w-15"
              />
              <p className="text-lg font-bold">SDG Quest</p>
            </div>
            
            <img
              src="https://watermanaustralia.com/wp-content/uploads/2022/05/Sustainable-Development-Goals.png"
              alt="Sustainable Goals"
              className="w-48 h-16 object-contain rounded-lg shadow-lg"
            />
            
            <p className="mt-6 text-gray-400 text-sm">
              © {new Date().getFullYear()} SDG Quest. All rights reserved.
            </p>
          </div>

          {/* Right side video */}
          <div className="w-80 mr-150">
            <video 
              className="rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
              width="100%"
              height="auto"
            >
              <source src={video} type="video/mp4" />
              </video>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

