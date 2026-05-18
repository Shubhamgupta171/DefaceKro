import React from "react";

/**
 * 🛡️ Top Navbar Component (Matching Target Screenshot UI)
 * Styled using `.top-navbar` and standard `ul` / `li` navigation links.
 * Features the signature bottom border accent as specified in index.css.
 */
const Navbar = () => {
  return (
    <nav className="top-navbar sticky top-0 z-40 shadow-sm">
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT ME</a></li>
        <li><a href="#admin">ADMIN Panel</a></li>
        <li><a href="#api">API Status</a></li>
        <li><a href="#register">Register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
