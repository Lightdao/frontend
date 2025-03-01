import React from "react";
import "./ListingsEmpty.css";

const ListingsEmpty = () => {
  return (
    <div className="listings-container">
      {/* Header */}
      <header className="header">
        <h1>LIGHTDAO</h1>
        <input type="text" placeholder="Search items, collections..." className="search-bar" />
        <nav>
          <a href="#">Explore</a>
          <a href="#">Stats</a>
          <a href="#">Drops</a>
          <a href="#">Activity</a>
          <button className="create-button">Create</button>
          <div className="profile-icon"></div>
        </nav>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Manage Listings</h3>
        <ul>
          <li className="active">Your Listings</li>
          <li>Favorites</li>
          <li>Following</li>
          <li>Payouts</li>
        </ul>
        <h3>Profile Settings</h3>
        <ul>
          <li>Account Details</li>
          <li>Security</li>
          <li>Apps</li>
          <li>Notifications</li>
          <li>Help Center</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <h2>Your Listings</h2>
        <div className="empty-listing">
          <img src="/empty-listing.svg" alt="No Listings" />
          <h3>No posted listings found</h3>
          <p>Try to assign more tasks to your employees or create a new project from scratch</p>
          <button className="post-button">Post your first NFT</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Privacy Policy | License | API</p>
        <span>© 2024 Lightdao All rights reserved</span>
        <span>Currency: USD | English</span>
      </footer>
    </div>
  );
};

export default ListingsEmpty;
