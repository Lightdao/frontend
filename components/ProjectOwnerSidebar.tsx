import React from "react";
import Dashboard from "./icons/Dashboard";
import ContractEdit from "./icons/ContractEdit";
import Hourglass from "./icons/Hourglass";
import ContractDelete from "./icons/ContractDelete";
import Azm from "./icons/Azm";
import Campaign from "./icons/Campaign";
import Volunteer from "./icons/Volunteer";
import Flag from "./icons/Flag";
import FlagCheck from "./icons/FlagCheck";
import Notifications from "./icons/Notifications";
import DataExploration from "./icons/DataExploration";
import FileExport from "./icons/FileExport";
import UniversalCurrency from "./icons/UniversalCurrency";

const Sidebar: React.FC = () => {
  return (
          <div className="flex flex-1">
            <aside className="w-[220px] border-r border-gray-200 bg-white">
              <nav className="flex flex-col p-4 gap-1">
                <div className="mb-2">
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <span>Home</span>
                  </a>
                </div>

                <div className="mb-2">
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-white bg-primary rounded-md">
                    <Dashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 px-3 py-1">Proposals Management</div>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <ContractEdit className="h-5 w-5" />
                    <span>New Proposal</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <Hourglass className="h-5 w-5" />
                    <span>Pending Proposals</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <ContractDelete className="h-5 w-5" />
                    <span>Rejected Proposals</span>
                  </a>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 px-3 py-1">Active Projects Management</div>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <Azm className="h-5 w-5" />
                    <span>Active Projects</span>
                  </a>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 px-3 py-1">Projects Update Management</div>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <Campaign className="h-5 w-5" />
                    <span>Projects Update</span>
                  </a>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 px-3 py-1">Donations Tracking</div>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <Volunteer className="h-5 w-5" />
                    <span>Donations Dashboard</span>
                  </a>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 px-3 py-1">Milestones Management</div>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <Flag className="h-5 w-5" />
                    <span>Milestone Definitions</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <FlagCheck className="h-5 w-5" />
                    <span>Milestone Tracking</span>
                  </a>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 px-3 py-1">Communications & Engagement</div>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <Notifications className="h-5 w-5" />
                    <span>Inbox & Messages</span>
                  </a>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 px-3 py-1">Analytics & Reports</div>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <DataExploration className="h-5 w-5" />
                    <span>Analytics Dashboard</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <FileExport className="h-5 w-5" />
                    <span>Export Reports</span>
                  </a>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 px-3 py-1">Funds Management</div>
                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100">
                    <UniversalCurrency className="h-5 w-5" />
                    <span>Withdraw Funds</span>
                  </a>
                </div>
              </nav>
            </aside>
          </div>
  );
};

export default Sidebar;