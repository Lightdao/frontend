import React from "react";
import "./DashboardSidebar.css";

const DashboardSidebar: React.FC = () => {
  return (
    <aside className="dashboard-sidebar">
      <ul className="sidebar-menu">
        <li className="active">Dashboard</li>
        <li>Your Listings</li>
        <li>Favorites</li>
        <li>Following</li>
        <li>Payouts</li>
        <hr />
        <li>Account Details</li>
        <li>Security</li>
        <li>Apps</li>
        <li>Notifications</li>
        <li>Help Center</li>
      </ul>
    </aside>
  );
};

export default DashboardSidebar;
