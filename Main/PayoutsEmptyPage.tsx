import React from 'react';
import './PayoutsEmptyPage.css';

const PayoutsEmptyPage: React.FC = () => {
  return (
    <div className="payouts-page">
      <header className="top-bar">
        <div className="logo">LIGHTDAO</div>
        <div className="search-bar">
          <span className="icon">🔍</span>
          <input placeholder="Search items, collections, and accounts" />
        </div>
        <nav className="nav-links">
          <a href="#">Explore</a>
          <a href="#">Stats</a>
          <a href="#">Drops</a>
          <a href="#">Activity</a>
        </nav>
        <button className="create-button">Create</button>
        <div className="profile-icon" />
      </header>

      <div className="sidebar">
        <div className="section-title">Manage listings</div>
        <ul className="menu-list">
          <li>Dashboard</li>
          <li>Your Listings</li>
          <li>Favorites</li>
          <li>Following</li>
          <li className="active">Payouts</li>
        </ul>
        <div className="section-title">Profile settings</div>
        <ul className="menu-list">
          <li>Account Details</li>
          <li>Security</li>
          <li>Apps</li>
          <li>Notifications</li>
          <li>Help Center</li>
        </ul>
      </div>

      <main className="main-content">
        <h1 className="title">Your payouts</h1>
        <div className="empty-state">
          <img
            src="/assets/undraw_investment_re_rpk5.svg"
            alt="No payouts illustration"
            className="empty-img"
          />
          <h3>No processed payouts</h3>
          <p>Try to assign more tasks to your employees or create a new project from scratch</p>
          <button className="primary-button">List your first NFT</button>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">License</a>
          <a href="#">API</a>
          <span>© 2024 LightDAO All rights reserved</span>
        </div>
        <div className="footer-meta">
          <span>Currency - USD</span>
          <span>English</span>
        </div>
      </footer>
    </div>
  );
};

export default PayoutsEmptyPage;
