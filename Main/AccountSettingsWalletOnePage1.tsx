import React from 'react';
import './AccountSettingsWalletOnePage1.css';

const AccountSettingsWalletOnePage1: React.FC = () => {
  return (
    <div className="wallet-settings-page">
      <header className="top-nav">
        <div className="logo">LIGHTDAO</div>
        <input className="search-bar" placeholder="Search items, collections, and accounts" />
        <nav className="menu-links">
          <a>Explore</a>
          <a>Stats</a>
          <a>Drops</a>
          <a>Activity</a>
        </nav>
        <button className="create-button">Create</button>
        <div className="profile-icon" />
      </header>

      <main className="content">
        <h1>Account Settings</h1>
        <p className="sub">Manage your account profile</p>
        <div className="tabs">
          <button>Profile</button>
          <button className="active">Wallet</button>
          <button>Notifications</button>
        </div>

        <section className="wallet-section">
          <h2>Manage wallets</h2>
          <p>If you use more than one wallet, you can link them below to access your account. This also allows you to showcase all your artworks in one place.</p>
          <div className="wallet-card">
            <div className="wallet-info">
              <strong>Wallet</strong>
              <p>4NU***6Vz1</p>
              <p className="sol">3.00597 SOL</p>
            </div>
            <hr className="divider" />
            <button className="link-wallet">🔗 Link another wallet</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">License</a>
          <a href="#">API</a>
          <span>© 2024 LightDao All rights reserved</span>
        </div>
        <div className="footer-buttons">
          <button className="publish">Publish</button>
          <button className="discard">Discard all</button>
        </div>
      </footer>
    </div>
  );
};

export default AccountSettingsWalletOnePage1;
