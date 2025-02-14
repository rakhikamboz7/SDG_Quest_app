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

  // Dummy data for quizzes
  const quizzesData = {
    labels: [
      "Quiz 1",
      "Quiz 2",
      "Quiz 3",
      "Quiz 4",
      "Quiz 5",
      "Quiz 6",
      "Quiz 7",
      "Quiz 8",
      "Quiz 9",
      "Quiz 10",
      "Quiz 11",
      "Quiz 12",
      "Quiz 13",
      "Quiz 14",
      "Quiz 15",
      "Quiz 16",
      "Quiz 17",
    ],
    datasets: [
      {
        label: "Points",
        data: [4, 3, 5, 2, 4, 5, 3, 4, 5, 4, 3, 5, 2, 4, 5, 3, 4],
        backgroundColor: "#008080",
        borderColor: "#008080",
        borderWidth: 1,
      },
    ],
  };

  const quizCompletionData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [8, 9],
        backgroundColor: ["#008080", "#f0b100"],
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/login");
    } else {
      setUser(userData);
      setProfileImage(userData.profilePicture || "default-profile.png");
    }
  }, [navigate]);

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setUploadError("No file selected.");
      return;
    }

    // Validate file type and size
    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
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
    navigate("/login");
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
              Quizzes Progress
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
                      max: 5,
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
                <p className="text-2xl font-bold text-teal-700">850</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-700">Completed Goals</p>
                <p className="text-2xl font-bold text-yellow-700">8/17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



