import React from 'react';
import './FavoritesEmpty.css';

const FavoritesEmpty: React.FC = () => {
  return (
    <div className="favorites-empty">
      <div className="sidebar">
        <div className="logo">LIGHTDAO</div>
        <div className="search">Search items, collections, and accounts</div>
        <div className="menu">
          <span>Explore</span>
          <span>Stats</span>
          <span>Drops</span>
          <span>Activity</span>
          <span>Create</span>
        </div>
        <div className="manage-listings">
          <div>Manage listings:</div>
          <div>Dashboard</div>
          <div>Your Listings</div>
          <div>Favorites</div>
          <div>Following</div>
          <div>Payouts</div>
          <div>Profile settings</div>
        </div>
        <div className="settings">
          <div>Account Details</div>
          <div>Security</div>
          <div>Apps</div>
          <div>Notifications</div>
          <div>Help Center</div>
        </div>
      </div>
      <div className="main-content">
        <div className="header">Favorites</div>
        <div className="empty-state">
          <div className="empty-message">Favorite items not found</div>
          <div className="suggestion">Try to assign more tasks to your employees or create a new project from scratch</div>
          <button className="explore-button">Explore NFTs</button>
        </div>
        <div className="footer">
          <div>Privacy Policy</div>
          <div>License</div>
          <div>API</div>
          <div>© 2024 LightDao All rights reserved</div>
          <div>Currency - USD</div>
          <div>English</div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesEmpty;
