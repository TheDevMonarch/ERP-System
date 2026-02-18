import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../image/safhonimage.jpg"; // adjust path if needed

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="top-navbar">
      {/* Left: Logo */}
      <div className="navbar-left" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-brand">
          <span className="brand-name">Saathaihum</span>
          <span className="brand-sub">FOUNDATION</span>
        </div>
      </div>

      {/* Center / Right: Links */}
      <nav className="navbar-links">
        <span onClick={() => navigate("/dashboard/admin/donation")}>
          Donation
        </span>
        <span onClick={() => navigate("/dashboard/admin/mou")}>
          MOU
        </span>
        <span onClick={() => navigate("/dashboard/admin/membership")}>
          Membership
        </span>
      </nav>

      {/* Right: Profile */}
      <div className="navbar-right">
        <div
          className="profile-circle"
          onClick={() => navigate("/dashboard/admin/profile")}
          title="Profile"
        >
          S
        </div>
      </div>
    </header>
  );
};

export default Navbar;