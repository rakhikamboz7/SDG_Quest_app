import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.svg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white text-white fixed shadow-lg shadow-black-500/20 w-full p-4 flex justify-between items-center">
            {/* Left Section: Logo and Title */}
            <div className="flex items-center">
                <img src={logo} alt="SDG Quest Logo" className="h-15 md:h-15" />
                <h1 className="text-[#1D6F57] text-xl md:text-2xl font-bold ml-3">SDG Quest</h1>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#1D6F57] focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation Links */}
            <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${isOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-6 text-center md:text-left`}>
            <button className="w-full md:w-auto bg-[#1D6F57] text-white rounded-md px-4 mr-5 py-2 hover:bg-[#228B6C] transition-colors duration-300">
                        Quizzes
                    </button>

                <Link to="/login" className="block md:inline-block">
                    <button className="w-full md:w-auto bg-[#1D6F57] text-white rounded-md px-4 py-2 hover:border-2 hover:border-[#228B6C] transition-colors duration-300">
                        Login / Signup
                    </button>
                </Link>

                {/* Dropdown for Quizzes */}
                <div className="relative group w-full md:w-auto text-center">
                   
                    <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48 text-black">
                        <Link to="/individual-quiz" className="block px-4 py-2 hover:bg-gray-100">Individual Quiz</Link>
                        <Link to="/complete-quiz" className="block px-4 py-2 hover:bg-gray-100">Complete Quiz for All SDGs</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;


