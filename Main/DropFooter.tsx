import React from "react";
import "./DropFooter.css";

const DropFooter: React.FC = () => {
  return (
    <footer className="drop-footer">
      <p>Subscribe to updates</p>
      <input type="email" placeholder="Enter your e-mail" />
      <p>&copy; 2025 LIGHTDAO. All rights reserved.</p>
    </footer>
  );
};

export default DropFooter;
