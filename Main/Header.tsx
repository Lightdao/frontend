import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">LIGHTDAO</div>
      <input type="text" className="search-bar" placeholder="Search NFTs" />
      <nav className="nav">
        <a href="#">Explore</a>
        <a href="#">Stats</a>
        <a href="#">Activity</a>
      </nav>
    </header>
  );
};

export default Header;
