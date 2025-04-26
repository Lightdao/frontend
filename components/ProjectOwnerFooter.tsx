import React from "react";

const ProjectOwnerFooter: React.FC = () => {
    return (
        <footer className="border-t border-[#ededed] py-3 px-6 flex justify-between text-xs text-[#979797]">
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#7a52f4]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#7a52f4]">
            License
          </a>
          <a href="#" className="hover:text-[#7a52f4]">
            API
          </a>
          <span>© 2024 LightDAO All rights reserved</span>
        </div>
        <div className="flex gap-4">
          <span>Currency - USD</span>
          <span>English</span>
        </div>
      </footer>
    );
}

export default ProjectOwnerFooter;