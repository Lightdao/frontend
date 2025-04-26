import React from "react";
import ContractEdit from "./icons/ContractEdit";
import Azm from "./icons/Azm";
import DataExploration from "./icons/DataExploration";

const ProjectOwnerQuickActions: React.FC = () => {
    return(
        <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <p className="text-[#5d5d5b] mb-6">
          Use the quick actions buttons below to submit new proposals, see active projects and analytics
          dashboard...
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#7a52f4] hover:bg-[#7a52f4]/90 text-white rounded-full px-6">
            SUBMIT NEW PROPOSAL <ContractEdit className="h-4 w-4 ml-2" />
          </button>
          <button className="bg-[#3e7eff] hover:bg-[#3e7eff]/90 text-white rounded-full px-6">
            {/*<Activity className="h-4 w-4 mr-2" />*/}
            ACTIVE PROJECTS <Azm className="h-4 w-4 ml-2" />
          </button>
          <button className="bg-[#005934] hover:bg-[#005934]/90 text-white rounded-full px-6">
           {/*<PieChart className="h-4 w-4 mr-2" />*/}
            ANALYTICS DASHBOARD <DataExploration className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    );
}

export default ProjectOwnerQuickActions;