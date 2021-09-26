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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            corrupti optio deleniti, natus atque ratione numquam minus
            blanditiis eos esse, temporibus consectetur veritatis quae minima
            laudantium obcaecati non expedita explicabo.
          </p>
          <h2>Minimum bagget : 10 milion per year </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
