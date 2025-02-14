// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // const ProfilePage = () => {
// //   const navigate = useNavigate();
// //   const [user, setUser] = useState(null);
// //   const [profileImage, setProfileImage] = useState("");

// //   // Fetch user data when page loads
// //   useEffect(() => {
// //     const userData = JSON.parse(localStorage.getItem("user"));
// //     if (!userData) {
// //       navigate("/login");
// //     } else {
// //       setUser(userData);

// //       // Fetch user details from backend (including profile image)
// //       fetch(`http://localhost:5005/api/user/${userData._id}`)
// //         .then((res) => res.json())
// //         .then((data) => {
// //           setUser(data);
// //           setProfileImage(data.profilePicture);
// //         })
// //         .catch((err) => console.error("Error fetching user data:", err));
// //     }
// //   }, [navigate]);

// //   // Handle Profile Image Upload
// //   const handleProfileImageChange = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     const formData = new FormData();
// //     formData.append("profilePicture", file);
// //     formData.append("userId", user._id);

// //     try {
// //       const response = await fetch("http://localhost:5005/api/upload-profile", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         setProfileImage(data.profilePicture);
// //         setUser({ ...user, profilePicture: data.profilePicture });

// //         // Update localStorage to persist image after logout
// //         localStorage.setItem("user", JSON.stringify({ ...user, profilePicture: data.profilePicture }));
// //       } else {
// //         alert("Failed to upload image.");
// //       }
// //     } catch (error) {
// //       console.error("Error uploading image:", error);
// //     }
// //   };

// //   // Logout Function
// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     navigate("/signup");
// //   };

// //   return (
// //     <div className="profile-container">
// //       <h2>Profile Page</h2>
// //       {user ? (
// //         <div className="profile-details">
// //          <img src="data:<%= user.image.contentType %>;base64,<%= user.image.data.toString('base64') %>" alt="Profile Picture"/>

// //           <input type="file" accept="image/*" onChange={handleProfileImageChange} />
// //           <h3>{user.name}</h3>
// //           <p>Email: {user.email}</p>
// //           <button onClick={handleLogout}>Logout</button>
// //         </div>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProfilePage;











import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [quizScores, setQuizScores] = useState([]); // State for storing quiz scores

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = localStorage.getItem("userId");
    if (!userData) {
      navigate("/login");
      return;
    }

    setUser(userData);
    setProfileImage(userData.profilePicture || "default-profile.png");

    const fetchScores = async () => {
      try {
        const res = await axios.get(`http://localhost:5005/api/scores/${userId}`);
        console.log(res.data.userScores);
        setQuizScores(res.data.userScores || []);
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchScores();
  }, [navigate]);

  // Group quiz scores by goalId
  const goalScores = Array(17).fill(0); // Initialize array for 17 goals

  quizScores.forEach((quiz) => {
    const goalIndex = parseInt(quiz.goalId) - 1; // Convert goalId to array index
    if (goalIndex >= 0 && goalIndex < 17) {
      goalScores[goalIndex] += quiz.score; // Sum scores for the goal
    }
  });

  // Bar Chart Data (Grouped by Goal ID)
  const quizzesData = {
    labels: Array.from({ length: 17 }, (_, i) => `Goal ${i + 1}`), // Goal labels
    datasets: [
      {
        label: "Total Score per Goal",
        data: goalScores, // Set accumulated score for each goal
        backgroundColor: "#008080",
        borderColor: "#008080",
        borderWidth: 1,
      },
    ],
  };

  const completedQuizzes = quizScores.length;
  const remainingQuizzes = 17 - completedQuizzes; // Assuming 17 quizzes in total

  const quizCompletionData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [completedQuizzes, remainingQuizzes],
        backgroundColor: ["#008080", "#f0b100"],
        borderWidth: 0,
      },
    ],
  };

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setUploadError("No file selected.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File size must be less than 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedUser = { ...user, profilePicture: reader.result };
      setProfileImage(reader.result);
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUploadError("");
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signup");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-teal-700"
              />
              <label className="absolute bottom-0 right-0 bg-teal-700 p-2 rounded-full cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  className="hidden"
                />
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </label>
            </div>
            {user && (
              <>
                <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </>
            )}
            {uploadError && (
              <p className="text-sm text-red-600">{uploadError}</p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quizzes Progress Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quizzes Progress (Grouped by Goal)
            </h3>
            <div className="h-64">
              <Bar
                data={quizzesData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 10,
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Quiz Completion Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quiz Completion
            </h3>
            <div className="h-64">
              <Doughnut
                data={quizCompletionData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-teal-50 rounded-lg">
                <p className="text-sm text-teal-700">Total Points</p>
                <p className="text-2xl font-bold text-teal-700">
                  {quizScores.reduce((acc, quiz) => acc + quiz.score, 0)}
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-700">Completed Goals</p>
                <p className="text-2xl font-bold text-yellow-700">
                  {completedQuizzes}/{17}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
