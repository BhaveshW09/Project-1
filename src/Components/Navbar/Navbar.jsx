import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}

        <div className="logo">
          <Link to="/">
            <h2>BW Store</h2>
          </Link>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <NavLink to="/home">Home</NavLink>

            <NavLink to="/allProducts">All Products</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/contact">contact</NavLink>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <FaFacebookSquare className="facebook" />
            </li>
            <li>
              <FaInstagramSquare className="instagram" />
            </li>
            <li>
              <FaYoutubeSquare className="youtube" />
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
