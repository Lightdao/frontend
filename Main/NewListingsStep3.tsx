import React from 'react';
import './NewListingsStep3.css';

const NewListingsStep3: React.FC = () => {
  return (
    <div className="step3-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo-circle">
          <div className="logo-shape" />
        </div>
        <button className="cancel-button">Cancel</button>
      </div>

      {/* Title */}
      <h1 className="title">Upload an item</h1>
      <p className="subtitle">
        They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
      </p>

      {/* Upload Box */}
      <div className="upload-box">
        <div className="upload-icon">⭳</div>
        <div className="upload-instruction">Drag your item to upload</div>
        <div className="upload-details">
          PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="nav-button back">Back</button>
        <button className="nav-button next">Next</button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
};

export default NewListingsStep3;
