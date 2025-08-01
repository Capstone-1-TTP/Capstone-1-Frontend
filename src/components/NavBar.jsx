import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Poll Palace</Link>
      </div>

      <div className="nav-links">
        {/* Add the Polls Link here */}
        <Link to="/pollfeed" className="nav-link">
          Poll Feed
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        {user ? (
          <div className="user-section">
            <span className="email">Welcome, {user.firstName}!</span>
            {/* <button onClick={onLogout} className="logout-btn">
              Logout
            </button> */}
            <Link to="/" className="logout-btn" onClick={onLogout}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
