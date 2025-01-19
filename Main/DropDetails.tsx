import React from "react";
import "./DropDetails.css";

const DropDetails: React.FC = () => {
  return (
    <div className="drop-details">
      <h2>Lion of Judah Collection</h2>
      <p>
        The Lion of Judah Collection is a showcase of powerful artwork representing courage,
        strength, and faith. Each piece is crafted with attention to detail, bringing the spirit of
        the Lion of Judah to life.
      </p>
      <button className="drop-more-details-btn">Browse Details</button>
    </div>
  );
};

export default DropDetails;
