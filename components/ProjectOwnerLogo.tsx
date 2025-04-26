import React from "react";

const ProjectOwnerLogo: React.FC = () => {
  return (
    <a href="/" className="flex items-center gap-2">
    {/*<img
        src="/logo.svg" // Replace with the actual path to your logo file
        alt="LightDAO Logo"
        className="h-8 w-8"
      />*/}
      <span className="text-xl font-bold text-[#7a52f4]">LightDAO</span>
    </a>
  );
};

export default ProjectOwnerLogo;