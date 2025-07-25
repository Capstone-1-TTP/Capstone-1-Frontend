import React from "react";
import "./ProfilePage.css";

const ProfilePage = ({ user }) => {
  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <img
        src={user.profilePic || "https://i.pravatar.cc/150?img=1"}
        alt="Profile"
        className="profile-pic"
      />
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default ProfilePage;
