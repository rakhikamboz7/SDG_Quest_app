const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-8 mt-10">
      <div className="flex items-center justify-center space-x-4 mb-6">
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
        className="mx-auto w-48 h-16 object-contain rounded-lg shadow-lg"
      />
      <p className="mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} SDG Quest. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
