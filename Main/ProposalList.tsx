import React from 'react';
import './ProposalList.css';

const ProposalList: React.FC = () => {
  return (
    <div className="proposal-list">
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
          <div>Proposal</div>
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
        <div className="header">Proposal</div>
        <div className="table">
          <div className="table-header">
            <span>Name</span>
            <span>Blockchain</span>
            <span>Author</span>
            <span>Price</span>
          </div>
          <div className="table-row">
            <span>Election Season</span>
            <span>Solana</span>
            <span>Ivan Morais</span>
            <span>0.45 Sol</span>
          </div>
          <div className="table-row">
            <span>Lorr's Ad Issues</span>
            <span>Solana</span>
            <span>Langke Zambo</span>
            <span>5.13 Sol</span>
          </div>
          <div className="table-row">
            <span>Venture Capitalist</span>
            <span>Solana</span>
            <span>Cecilia Pozo</span>
            <span>3.59 Sol</span>
          </div>
          <div className="table-row">
            <span>Tracking on the Go</span>
            <span>Solana</span>
            <span>Matilda Evans</span>
            <span>0.45 Sol</span>
          </div>
          <div className="table-row">
            <span>Behind One of Hacks</span>
            <span>Solana</span>
            <span>Maeng Yeo-Jin</span>
            <span>3.40 Sol</span>
          </div>
          <div className="table-row">
            <span>Capturing Memories</span>
            <span>Solana</span>
            <span>Lungelo Ngoaba</span>
            <span>3.40 Sol</span>
          </div>
        </div>
        <div className="footer">
          <div>Primary Policy</div>
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

export default ProposalList;
