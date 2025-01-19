import React from "react";
import "./CollectionsHeader.css";

const CollectionsHeader: React.FC = () => {
  return (
    <header className="collections-header">
      <div className="collections-logo">LIGHTDAO</div>
      <input
        type="text"
        className="collections-search-bar"
        placeholder="Search items, collections, and accounts"
      />
      <nav className="collections-nav-links">
        <a href="#">Explore</a>
        <a href="#">Stats</a>
        <a href="#">Drops</a>
        <a href="#">Activity</a>
        <button className="collections-create-btn">Create</button>
        <img src="/path/to/profile.jpg" alt="Profile" className="collections-profile-pic" />
      </nav>
    </header>
  );
};

export default CollectionsHeader;
