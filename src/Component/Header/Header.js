import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <nav className="menu">
        <a href="/home">Home</a>
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
        <a href="/Contact">Contact</a>
      </nav>
      <div className="header">
        <div className="header-content">
          <h1> Make your Company Best Skill Full Person:</h1>
          <p>
            Are you looking for Employe for establish company? Visited Our
            website and Hired skill full person
          </p>
          <h2>Minimum bagget : 10 milion per year </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
