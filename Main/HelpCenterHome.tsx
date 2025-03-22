import React from 'react';
import './HelpCenterHome.css';

const HelpCenterHome: React.FC = () => {
  return (
    <div className="help-center-home">
      <header className="top-bar">
        <div className="logo">LIGHTDAO</div>
        <input className="search-input" placeholder="Search items, collections, and accounts" />
        <nav className="nav-links">
          <span>Explore</span>
          <span>Stats</span>
          <span>Drops</span>
          <span>Activity</span>
          <button className="create-button">Create</button>
          <div className="user-avatar" />
        </nav>
      </header>

      <aside className="sidebar">
        <div className="menu-header">Manage listings</div>
        <div className="menu-item">Dashboard</div>
        <div className="menu-item">Your Listings</div>
        <div className="menu-item">Favorites</div>
        <div className="menu-item">Following</div>
        <div className="menu-item">Payouts</div>
        <div className="menu-header">Profile settings</div>
        <div className="menu-item">Account Details</div>
        <div className="menu-item">Security</div>
        <div className="menu-item">Apps</div>
        <div className="menu-item">Notifications</div>
        <div className="menu-item active">Help Center</div>
      </aside>

      <main className="main-content">
        <h1>How it works</h1>
        <section className="help-boxes">
          <div className="help-box">
            <h2>Getting started</h2>
            <ul>
              <li>What is an NFT?</li>
              <li>What are Proof of Work blockchains?</li>
              <li>What is a wallet? Why do I need one?</li>
              <li>How much does it cost to create an NFT?</li>
            </ul>
            <a href="#">See more articles</a>
          </div>
          <div className="help-box">
            <h2>Using NFT Marketplace</h2>
            <ul>
              <li>Which blockchains does marketplace support?</li>
              <li>Why should I use Ethereum?</li>
              <li>Why should I use Flow on this marketplace?</li>
              <li>Why should I use Tezos on this marketplace?</li>
            </ul>
            <a href="#">See more articles</a>
          </div>
          <div className="help-box">
            <h2>Safety, Security, and Policies</h2>
            <ul>
              <li>Is connecting my wallet secure?</li>
              <li>I bought an NFT, but I think I was scammed?</li>
              <li>My verification request was rejected. Can I reapply?</li>
              <li>What are your community rules and guidelines?</li>
            </ul>
            <a href="#">See more articles</a>
          </div>
          <div className="help-box">
            <h2>Troubleshooting</h2>
            <ul>
              <li>I should have received NFT. How do I claim it?</li>
              <li>I think I minted duplicate NFTs</li>
              <li>Marketplace isn't working properly. Now what?</li>
              <li>I think my NFT disappeared. Why?</li>
            </ul>
            <a href="#">See more articles</a>
          </div>
        </section>

        <section className="popular-articles">
          <h2>Popular help articles</h2>
          <div className="article">
            <h3>I can’t see the artwork on NFT’s marketplace listing, what’s wrong?</h3>
            <p>NFTs are decentralized and stored on the blockchain forever — so you might be to see</p>
            <a href="#">Read more</a>
          </div>
          <div className="article">
            <h3>How do I change or cancel my experience reservation?</h3>
            <p>Is our site or your profile not loading? Are you having issues trying to create, buy, or sell NFTs</p>
            <a href="#">Read more</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="subscribe">Subscribe to updates</div>
        <div className="email-input">Enter your e-mail</div>
        <div className="social-icons">Follow us: [fb] [slack] [tw] [pin] [ln]</div>
        <div className="links">Privacy Policy | License | API</div>
        <div className="copyright">© 2024 Lightdao. All rights reserved</div>
      </footer>
    </div>
  );
};

export default HelpCenterHome;
