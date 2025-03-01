import React from 'react';
import './ListingsCollections.css';

const ListingsCollections: React.FC = () => {
  return (
    <div className="listings-collections">
      <div className="sidebar">
        <div className="logo">LIGHTDAD</div>
        <div className="search">Search items, collections, and accounts</div>
        <div className="menu">
          <div>Explore</div>
          <div>Stats</div>
          <div>Drops</div>
          <div>Activity</div>
          <div>Create</div>
        </div>
        <div className="manage-listings">Manage Listings</div>
        <div className="dashboard">Dashboard</div>
        <div className="user-section">
          <div>Your collections</div>
          <div>Your Listings</div>
          <div>Favorites</div>
          <div>Following</div>
          <div>Payouts</div>
          <div>Profits settings</div>
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
        <div className="header">
          <div>May Bring Back 10 Items</div>
          <div>Auto Technology 132 Items</div>
          <div>Front Desk 86 Items</div>
          <div>Farhad's and Mike 28.0DS ETH</div>
          <div>Walgreens Chief 66 Items</div>
          <div>Improving Culture 164 Items</div>
        </div>
        <div className="footer">
          <div>Primary Policy</div>
          <div>License API 6.2/3G Logistics All rights reserved</div>
          <div>Currency - USD English</div>
        </div>
      </div>
    </div>
  );
};

export default ListingsCollections;
