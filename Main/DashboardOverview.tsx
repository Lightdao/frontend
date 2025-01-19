import React from "react";
import "./DashboardOverview.css";

const DashboardOverview: React.FC = () => {
  return (
    <section className="dashboard-overview">
      <div className="overview-card">
        <h3>Total Revenue</h3>
        <p>$96.4k</p>
        <span>+10%</span>
      </div>
      <div className="overview-card">
        <h3>Transactions</h3>
        <p>4,950</p>
        <span>+1%</span>
      </div>
      <div className="overview-card">
        <h3>Conversion</h3>
        <p>2,148</p>
        <span>+2%</span>
      </div>
    </section>
  );
};

export default DashboardOverview;
