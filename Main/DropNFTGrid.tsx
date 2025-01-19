import React from "react";
import "./DropNFTGrid.css";

type NFT = {
  title: string;
  price: string;
  image: string;
};

const nfts: NFT[] = [
  { title: "May Bring Rest", price: "5.4 ETH", image: "/path/to/image1.jpg" },
  { title: "Artistic Technology", price: "3.2 ETH", image: "/path/to/image2.jpg" },
  { title: "Agape Was Shed", price: "2.5 ETH", image: "/path/to/image3.jpg" },
  { title: "Heart Break", price: "1.8 ETH", image: "/path/to/image4.jpg" },
];

const DropNFTGrid: React.FC = () => {
  return (
    <div className="drop-nft-grid">
      <h2>What's Inside?</h2>
      <div className="drop-grid">
        {nfts.map((nft, index) => (
          <div className="drop-nft-card" key={index}>
            <img src={nft.image} alt={nft.title} />
            <h3>{nft.title}</h3>
            <p>{nft.price}</p>
          </div>
        ))}
      </div>
      <button className="drop-load-more-btn">Load More</button>
    </div>
  );
};

export default DropNFTGrid;
