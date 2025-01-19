import React from "react";
import "./MarketplaceNFTCard.css";

type NFTCardProps = {
  title: string;
  price: string;
  image: string;
};

const NFTCard: React.FC<NFTCardProps> = ({ title, price, image }) => {
  return (
    <div className="nft-card">
      <img className="nft-image" src={image} alt={title} />
      <div className="nft-info">
        <h3>{title}</h3>
        <p>{price} SOL</p>
      </div>
    </div>
  );
};

export default NFTCard;
