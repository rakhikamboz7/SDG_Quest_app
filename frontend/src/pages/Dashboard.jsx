import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState("");

  // Fetch user data when page loads
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/login");
    } else {
      setUser(userData);

      // Fetch user details from backend (including profile image)
      fetch(`http://localhost:5005/api/user/${userData._id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setProfileImage(data.profilePicture);
        })
        .catch((err) => console.error("Error fetching user data:", err));
    }
  }, [navigate]);

  // Handle Profile Image Upload
  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePicture", file);
    formData.append("userId", user._id);

    try {
      const response = await fetch("http://localhost:5005/api/upload-profile", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setProfileImage(data.profilePicture);
        setUser({ ...user, profilePicture: data.profilePicture });

        // Update localStorage to persist image after logout
        localStorage.setItem("user", JSON.stringify({ ...user, profilePicture: data.profilePicture }));
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      {user ? (
        <div className="profile-details">
         <img src="data:<%= user.image.contentType %>;base64,<%= user.image.data.toString('base64') %>" alt="Profile Picture"/>

          <input type="file" accept="image/*" onChange={handleProfileImageChange} />
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;


