import React from "react";
import { ModeToggle } from "@/components/mode-toggle"
import { NewProposalForm } from "@/components/new-proposal-form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, ChevronDown, Search } from "lucide-react"
import ProjectOwnerLogo from "./ProjectOwnerLogo";
import ProjectOwnerSidebar from "./ProjectOwnerSidebar";

const ProjectOwnerNewProposal: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <ProjectOwnerSidebar />
      <div className="flex-1">
        <header className="border-b border-[#ededed] bg-white px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <ProjectOwnerLogo />
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#979797]" />
                <input
                  className="w-[400px] rounded-full bg-[#f5f5f5] pl-10 text-sm"
                  placeholder="Search proposals, projects, NFTs and reports..."
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-[#5d5d5b]" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#f71111]"></span>
              </button>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border border-[#d9d9d9]">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Crystal P." />
                  <AvatarFallback className="bg-[#7a52f4] text-white">CP</AvatarFallback>
                </Avatar>
                <div className="text-xs">
                  <div className="font-medium text-[#1c1b1f]">Crystal P.</div>
                  <div className="text-[#979797]">Project Owner</div>
                </div>
                <ChevronDown className="h-4 w-4 text-[#979797]" />
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">
          <NewProposalForm />
        </main>
        <footer className="border-t border-[#ededed] p-4 text-xs text-[#979797]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>License</span>
              <span>API</span>
              <span>© 2024 LightDAO All rights reserved</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                Currency <span className="font-medium">• USD</span>
              </div>
              <div>English</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ProjectOwnerNewProposal;