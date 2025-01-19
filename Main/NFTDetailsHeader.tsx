import React from "react";
import "./NFTDetailsHeader.css";

const NFTDetailsHeader: React.FC = () => {
  return (
    <header className="nft-details-header">
      <div className="nft-details-logo">LIGHTDAO</div>
      <input
        type="text"
        className="nft-details-search-bar"
        placeholder="Search items, collections, and accounts"
      />
      <nav className="nft-details-nav">
        <a href="#">Explore</a>
        <a href="#">Stats</a>
        <a href="#">Drops</a>
        <a href="#">Activity</a>
        <button className="nft-details-create-btn">Create</button>
        <img
          src="/path/to/profile.jpg"
          alt="Profile"
          className="nft-details-profile-pic"
        />
      </nav>
    </header>
  );
};

export default NFTDetailsHeader;
       
