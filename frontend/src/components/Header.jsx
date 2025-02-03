import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../backend/firebase";
import logo from '../assets/logo.svg'; 


const Header = () => {
  const [user, setUser] = useState(null);
  const [showQuizDropdown, setShowQuizDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Fallback to check localStorage if not authenticated via Firebase
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
          setUser(storedUser);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");  // Clear user data
    setUser(null);
    navigate("/login");
  };
  

  return (
    <header className="bg-white p-4 w-full flex fixed justify-between items-center z-50 opacity-100">
  
      <div className="flex items-center"> {/* Left-side logo and title */}
        <img src={logo} alt="SDG Quest Logo" className="h-15 w-10 mr-2" /> {/* Adjust 'h-8' as needed */}
        <h1 className="text-[#00786F] text-xl font-bold">SDG Quest</h1>
      </div>

      <div className="flex items-center"> {/* Right-side navigation and authentication */}
        <Link to="/home" className="text-[#00786F] mr-4 hover:text-gray-300">Learn Goals</Link>
        <Link to="/knowledge" className="text-[#00786F] mr-4 hover:text-gray-300">Knowledge Bites</Link>
        <div className="relative inline-block">
          <button
            onClick={() => setShowQuizDropdown(!showQuizDropdown)}
            className="text-[#00786F] mr-4 hover:text-gray-300"
          >
            Quizzes
            <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${showQuizDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showQuizDropdown && (
            <div className="absolute z-50 mt-2 w-52 bg-white rounded-md shadow-xl border border-gray-200">
              <div className="py-2">
                <Link to="/complete-quiz" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Take Quiz for Whole Goals</Link>
                <Link to="/individual-quiz" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Take Quiz for Individual Goals</Link>
              </div>
            </div>
          )}
        </div>

        {user ? (
  <div className="flex items-center">
    <Link to="/profile" className="text- mr-2 hover:underline">
      {user.displayName || user.name || user.email}
    </Link>
    <button 
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
      onClick={handleLogout}
    >
      Logout
    </button>
  </div>
) : (
  <Link to="/login" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
    Login / Signup
  </Link>
)}

      </div>
    </header>
  );
};

export default Header;
