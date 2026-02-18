import React from "react";
import "./Profile.css";

const user = {
  name: "Darshita Ranvirkar",
  role: "Admin",
  email: "darshita@email.com",
  department: "ERP Management",
  location: "Ahmedabad",
  status: "Active",
  joined: "Jan 2026",
};

const Profile = () => {
  return (
    <div className="profile-grid">
  <div className="admin-profile-card">
    <h3>Personal Info</h3>
    <p><span>Role</span>{user.role}</p>
    <p><span>Department</span>{user.department}</p>
    <p><span>Location</span>{user.location}</p>
  </div>

  <div className="admin-profile-card">
    <h3>Account</h3>
    <p><span>Status</span>{user.status}</p>
    <p><span>Joined</span>{user.joined}</p>
  </div>

  {/* Full-width */}
  <div className="admin-profile-card actions full-width">
    <h3>Security</h3>
    <button className="btn secondary">Change Password</button>
    <button className="btn danger">Logout</button>
    </div>
    </div>
  );
};


export default Profile;