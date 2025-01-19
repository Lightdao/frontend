import React from "react";
import "./DropHeader.css";

const DropHeader: React.FC = () => {
  return (
    <header className="drop-header">
      <div className="drop-logo">LIGHTDAO</div>
      <input
        type="text"
        className="drop-search-bar"
        placeholder="Search items, collections, and accounts"
      />
      <nav className="drop-nav-links">
        <a href="#">Explore</a>
        <a href="#">Stats</a>
        <a href="#">Drops</a>
        <a href="#">Activity</a>
        <button className="drop-create-btn">Create</button>
        <img src="/path/to/profile.jpg" alt="Profile" className="drop-profile-pic" />
      </nav>
    </header>
  );
};

export default DropHeader;
