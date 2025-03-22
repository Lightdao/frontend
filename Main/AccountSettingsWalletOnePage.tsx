import React from 'react';
import './AccountSettingsWalletOnePage.css';

const AccountSettingsWalletOnePage: React.FC = () => {
  return (
    <div className="account-settings-wallet">
      <h1>Account Settings</h1>
      <p className="sub">Manage your account profile</p>
      <div className="tabs">
        <button className="tab">Profile</button>
        <button className="tab active">Wallet</button>
        <button className="tab">Notifications</button>
      </div>

      <div className="wallet-section">
        <h2>Manage wallets</h2>
        <p>If you use more than one wallet, you can link them below to access your account. This also allows you to showcase all your artworks in one place.</p>

        <div className="wallet-card">
          <div className="wallet-info">
            <p><strong>Wallet</strong></p>
            <p>4N...tVZ1</p>
            <p><strong>3.05697 SOL</strong></p>
          </div>
          <div className="divider" />
          <button className="link-wallet">
            <span className="icon">⚙️</span>
            Link another wallet
          </button>
        </div>
      </div>

      <div className="action-buttons">
        <button className="publish">Publish</button>
        <button className="discard">Discard all</button>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">License</a>
          <a href="#">API</a>
          <span>© 2024 LightDao All rights reserved</span>
        </div>
        <div className="footer-buttons">
          <button>Currency - USD</button>
          <button>English</button>
        </div>
      </footer>
    </div>
  );
};

export default AccountSettingsWalletOnePage;
