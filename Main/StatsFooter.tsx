import React from "react";
import "./StatsFooter.css";

const StatsFooter: React.FC = () => {
  return (
    <footer className="stats-footer">
      <p>Subscribe to updates</p>
      <input type="email" placeholder="Enter your e-mail" />
      <div className="stats-footer-links">
        <div>
          <h3>Marketplace</h3>
          <a href="#">Explore</a>
          <a href="#">Help Center</a>
        </div>
        <div>
          <h3>Apply</h3>
          <a href="#">Profile</a>
          <a href="#">Watchlist</a>
        </div>
        <div>
          <h3>Region</h3>
          <p>Currency: USD</p>
        </div>
      </div>
      <p>&copy; 2025 LIGHTDAO. All rights reserved.</p>
    </footer>
  );
};

export default StatsFooter;
