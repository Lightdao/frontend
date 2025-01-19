import React from "react";
import "./StatsHeader.css";

const StatsHeader: React.FC = () => {
  return (
    <header className="stats-header">
      <div className="stats-logo">LIGHTDAO</div>
      <input
        type="text"
        className="stats-search-bar"
        placeholder="Search items, collections, and accounts"
      />
      <nav className="stats-nav-links">
        <a href="#">Explore</a>
        <a href="#">Stats</a>
        <a href="#">Drops</a>
        <a href="#">Activity</a>
        <button className="stats-create-btn">Create</button>
        <img src="/path/to/profile.jpg" alt="Profile" className="stats-profile-pic" />
      </nav>
    </header>
  );
};

export default StatsHeader;
