import React, { useState } from "react";

import ProjectOwnerSidebar from "./ProjectOwnerSidebar";
import ProjectOwnerFooter from "./ProjectOwnerFooter";
import ProjectOwnerHeader from "./ProjectOwnerHeader";
import ProjectOwnerStatsGrid from "./ProjectOwnerStatsGrid";
import ProjectOwnerQuickActions from "./ProjectOwnerQuickActions";

const ProjectOwnerDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("Dashboard");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <ProjectOwnerHeader />

      {/* Page Content */}

      <div className="flex flex-1">
        {/* Sidebar */}
        <ProjectOwnerSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="text-sm text-[#979797] mb-4">PROJECT OWNER - HOME &gt; DASHBOARD</div>

          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-[#5d5d5b] mb-6">
            Here, you can see quick stats of your active projects, pending proposals, milestones achieved and many
            more...
          </p>

          {/* Stats Grid */}
          <ProjectOwnerStatsGrid />
          <hr className="my-8 border-[#ededed]" />

          {/* Quick Actions */}
          <ProjectOwnerQuickActions />
        </main>
      </div>
      {/* Footer */}
      <ProjectOwnerFooter />
    </div>
  );
};

export default ProjectOwnerDashboard;