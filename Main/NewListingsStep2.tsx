import React from 'react';
import './NewListingsStep2.css';

const NewListingsStep2: React.FC = () => {
  return (
    <div className="new-listings-step2">
      <div className="header">Upload an item</div>
      <div className="description">
        They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
      </div>
      <div className="options">
        <div className="option">
          <div className="option-title">Create single item</div>
          <button className="select-button">Select</button>
        </div>
        <div className="option">
          <div className="option-title">Create collection</div>
          <button className="select-button">Select</button>
        </div>
      </div>
      <div className="navigation">
        <button className="back-button">Back</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default NewListingsStep2;
