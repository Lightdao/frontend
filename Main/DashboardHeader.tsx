import React from "react";
import "./DashboardHeader.css";

const DashboardHeader: React.FC = () => {
  return (
    <header className="dashboard-header">
      <div className="dashboard-logo">LIGHTDAO</div>
      <input
        type="text"
        className="dashboard-search-bar"
        placeholder="Search items, collections, and accounts"
      />
      <nav className="dashboard-nav">
        <a href="#">Explore</a>
        <a href="#">Stats</a>
        <a href="#">Drops</a>
        <a href="#">Activity</a>
        <button className="dashboard-create-btn">Create</button>
        <img src="/path/to/profile.jpg" alt="Profile" className="dashboard-profile-pic" />
      </nav>
    </header>
  );
};

export default DashboardHeader;
