import React, { useState } from "react";
import "./Navbar.css";
import image from "../assets/logo.svg";
import { FaUserCircle, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For toggling mobile menu
  const [isSearching, setIsSearching] = useState(false); // For toggling search input
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleSearchClick = () => setIsSearching(!isSearching);
  const handleInputBlur = () => setIsSearching(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logopng" src={image} alt="Logo" />
      </div>
      <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
        {isSearching ? (
          <li className="search-container">
            <input
              type="text"
              placeholder="Search by tags..."
              onBlur={handleInputBlur}
              autoFocus
            />
          </li>
        ) : (
          <li onClick={handleSearchClick}>
            <a href="#">
              <FaSearch /> &nbsp; Search
            </a>
          </li>
        )}
        <li><a href="/">Home</a></li>
        <li><a href="featuresection">Features</a></li>
        <li><a href="/auth">Register</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
