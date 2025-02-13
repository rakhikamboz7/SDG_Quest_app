import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../backend/firebase";
import logo from '../assets/logo.svg'; 

const Header = () => {
  const [user, setUser] = useState(null);
 
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
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
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-white p-4 w-full flex fixed justify-between items-center z-50 opacity-100 shadow-md">
      <div className="flex items-center"> 
        <img src={logo} alt="SDG Quest Logo" className="h-10 w-10 mr-2" /> 
        <h1 className="text-[#00786F] text-2xl font-bold"> <Link to="/" >SDG Quest</Link></h1>
      </div>

      <div className="flex items-right ml-130 space-x-6 font-bold "> 
        <Link to="/home" className="text-[#00786F] hover:text-green-800">Learn Goals</Link>
        <Link to="/knowledge" className="text-[#00786F] hover:text-green-800">Knowledge Bites</Link>
        <Link to="/quiz/:id" className="text-[#00786F] hover:text-green-800">Start Quiz</Link>
        
           
          
            </div>
         
       

        {user ? (
          <div className="relative">
            <button onClick={() => setShowProfileDropdown(!showProfileDropdown)} className="text-[#00786F] hover:text-gray-500 flex items-center">
              {user.displayName || user.name || user.email}
              <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${showProfileDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showProfileDropdown && (
              <div className="absolute z-50 mt-2 w-48 bg-white rounded-md shadow-xl border border-gray-200">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                <button 
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signup" className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-5 rounded">
            Signup
          </Link>
        )}
     
    </header>
  );
};

export default Header;