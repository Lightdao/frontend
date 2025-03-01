import React from 'react';
import './ListingsListV1.css';

const ListingsListV1: React.FC = () => {
  return (
    <div className="listings-list-v1">
      <div className="sidebar">
        <div className="logo">LIGHTDAD</div>
        <div className="search">Search items, collections, and accounts</div>
        <div className="menu">
          <span>Explore</span>
          <span>Stats</span>
          <span>Drops</span>
          <span>Activity</span>
          <span>Create</span>
        </div>
        <div className="manage-listing">
          <div>Manage listing:</div>
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
        <div className="header">Your listings</div>
        <div className="table">
          <div className="table-header">
            <span>Name</span>
            <span>Category</span>
            <span>Blockchain</span>
            <span>Bid</span>
            <span>Views</span>
            <span>Auction</span>
          </div>
          <div className="table-row">
            <span>Election Season</span>
            <span>Art</span>
            <span>Flow</span>
            <span>0.45 Sd</span>
            <span>4,918</span>
            <span>Running</span>
          </div>
          <div className="table-row">
            <span>Lon’t Ad Issues</span>
            <span>Collections</span>
            <span>Tears</span>
            <span>5.13 Sd</span>
            <span>4,570</span>
            <span></span>
          </div>
          <div className="table-row">
            <span>Science Jobs</span>
            <span>Photography</span>
            <span>Emerson</span>
            <span>3.89 Sd</span>
            <span>4,310</span>
            <span></span>
          </div>
          <div className="table-row">
            <span>Capturing Memories</span>
            <span>Collections</span>
            <span>Flow</span>
            <span>0.45 Sd</span>
            <span>3,909</span>
            <span>Running</span>
          </div>
          <div className="table-row">
            <span>Tracking on the Go</span>
            <span>Art</span>
            <span>Tears</span>
            <span>3.40 Sd</span>
            <span>3,570</span>
            <span></span>
          </div>
        </div>
        <div className="footer">
          <div>Primary Policy</div>
          <div>License</div>
          <div>API</div>
          <div>© 2024 LightDun All rights reserved</div>
          <div>Currency - USD</div>
          <div>English</div>
        </div>
      </div>
    </div>
  );
};

export default ListingsListV1;
