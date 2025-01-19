import React from "react";
import "./NFTDetailsSidebar.css";

const NFTDetailsSidebar: React.FC = () => {
  const bids = [
    { user: "User1", amount: "3.25 SOL", time: "14 Aug 2024, 18:40" },
    { user: "User2", amount: "3.50 SOL", time: "12 Aug 2024, 17:30" },
    { user: "User3", amount: "2.90 SOL", time: "10 Aug 2024, 16:20" },
  ];

  return (
    <aside className="nft-details-sidebar">
      <h2>Bids</h2>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>
            <span>{bid.user}</span>
            <span>{bid.amount}</span>
            <span>{bid.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default NFTDetailsSidebar;
