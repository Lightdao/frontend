import React from "react";
import Azm from "./icons/Azm";
import ChevronRight from "./icons/ChevronRight";
import ShowChart from "./icons/ShowChart";
import UniversalCurrency from "./icons/UniversalCurrency";
import Hourglass from "./icons/Hourglass";
import FlagCheck from "./icons/FlagCheck";

const ProjectOwnerStatsGrid: React.FC = () => {
    return(
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#ebf0f0] rounded-lg p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Azm className="h-5 w-5 text-[#3e7eff]" />
              <h3 className="font-medium text-[#5d5d5b]">Active Projects</h3>
            </div>
            <div className="text-xs text-[#5d5d5b]">
              Last 30 Days: +2 <ShowChart className="h-3 w-3 inline" />
            </div>
          </div>
          <div className="text-6xl font-bold text-[#3e7eff] mb-4">5</div>
          <a href="#" className="text-[#3e7eff] text-sm font-medium flex items-center gap-1 hover:underline">
            View Your Active Projects <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="bg-[#ebf0f0] rounded-lg p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <UniversalCurrency className="h-5 w-5 text-[#4caf50]" />
              <h3 className="font-medium text-[#5d5d5b]">Total Funds Raised</h3>
            </div>
          </div>
          <div className="text-6xl font-bold text-[#4caf50] mb-1">$1,000</div>
          <div className="text-sm text-[#5d5d5b] mb-3">raised so far</div>
          <a href="#" className="text-[#4caf50] text-sm font-medium flex items-center gap-1 hover:underline">
            View Fundraising Breakdown <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="bg-[#ffbb00]/20 rounded-lg p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Hourglass className="h-5 w-5 text-[#997000]" />
              <h3 className="font-medium text-[#5d5d5b]">Pending Proposals</h3>
            </div>
          </div>
          <div className="text-6xl font-bold text-[#997000] mb-1">30</div>
          <div className="text-sm text-[#5d5d5b] mb-3">Overdue: 5 | Awaiting Review: 25</div>
          <a href="#" className="text-[#997000] text-sm font-medium flex items-center gap-1 hover:underline">
            View Your Pending Proposals <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="bg-[#ff5722]/20 rounded-lg p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <FlagCheck className="h-5 w-5 text-[#ff5722]" />
              <h3 className="font-medium text-[#5d5d5b]">Milestones Achieved</h3>
            </div>
          </div>
          <div className="text-6xl font-bold text-[#ff5722] mb-1">5</div>
          <div className="text-sm text-[#5d5d5b] mb-3">great work, keep it up!</div>
          <a href="#" className="text-[#ff5722] text-sm font-medium flex items-center gap-1 hover:underline">
            View Your Milestones <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
}

export default ProjectOwnerStatsGrid;