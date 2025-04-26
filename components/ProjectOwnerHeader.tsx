import React from "react";
import Search from "./icons/Search";
import Notifications from "./icons/Notifications";
import AccountCircle from "./icons/AccountCircle";
import ProjectOwnerLogo from "./ProjectOwnerLogo";

const ProjectOwnerHeader: React.FC = () => {
    return (
            <div>
                <header className="border-b border-[#ededed] py-3 px-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                <a href="/" className="text-[#7a52f4] font-bold text-xl">
                    <ProjectOwnerLogo />
                </a>
                <div className="relative max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#979797] h-4 w-4" />
                    <input
                    type="text"
                    className="pl-10 bg-[#ebf0f0] border-none rounded-full text-sm"
                    placeholder="Search proposals, projects, NFTs and reports..."
                    />
                </div>
                </div>
                <div className="flex items-center gap-4">
                <button className="rounded-full">
                    <span className="sr-only">Toggle theme</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="M4.93 4.93l1.41 1.41"></path>
                    <path d="M17.66 17.66l1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="M6.34 17.66l-1.41 1.41"></path>
                    <path d="M19.07 4.93l-1.41 1.41"></path>
                    </svg>
                </button>
                <button className="rounded-full relative">
                    <Notifications className="h-5 w-5" />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-[#f71111] rounded-full"></span>
                </button>
                <div className="flex items-center gap-2">
                    {/*<img src="/placeholder.svg?height=32&width=32" alt="Crystal P." />*/}
                    <AccountCircle className="h-5 w-5" />
                    <div className="flex flex-col text-xs">
                    <span className="font-medium">Crystal P.</span>
                    <span className="text-[#979797]">Project Owner</span>
                    </div>
                </div>
                </div>
            </header>
        </div>
    );
}

export default ProjectOwnerHeader;