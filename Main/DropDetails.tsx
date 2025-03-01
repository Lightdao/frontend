import React from "react";
import "./dropdetails.css"; // Importing the CSS file

const Details = () => {
  const nfts = [
    { id: 1, name: "May Bring Back", price: "0.45 Sol", img: "/nft1.jpg" },
    { id: 2, name: "Auto Technology", price: "7 Sol", img: "/nft2.jpg" },
    { id: 3, name: "Agents Were Behind", price: "17.5 Sol", img: "/nft3.jpg" },
    { id: 4, name: "Front Desk", price: "3 Sol", img: "/nft4.jpg" },
    { id: 5, name: "Farhad’s and Mike", price: "0.05 Sol", img: "/nft5.jpg" },
    { id: 6, name: "Walgreens Chief", price: "0.58 Sol", img: "/nft6.jpg" },
    { id: 7, name: "Improving Culture", price: "9 Sol", img: "/nft7.jpg" },
    { id: 8, name: "Cloud Computing", price: "0.09 Sol", img: "/nft8.jpg" },
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>LIGHTDAO</h1>
        <input type="text" placeholder="Search items, collections..." className="search-bar" />
        <button className="create-button">Create</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Lion of Judah Collection</h2>
        <p>Ends in 18h 54m 29s</p>
      </section>

      {/* NFT Cards */}
      <div className="nft-grid">
        {nfts.map((nft) => (
          <div key={nft.id} className="nft-card">
            <img src={nft.img} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p>{nft.price}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 LightDAO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Details;
