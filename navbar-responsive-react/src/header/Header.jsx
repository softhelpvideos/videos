import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    if (!showMenuItems) {
      setShowMenuItems(true);
    } else {
      setShowMenuItems(false);
    }
  };

  return (
    <nav className="nav-bar">
      <Link to="/" className="title">
        Web
      </Link>
      <div className="menu" onClick={handleMenuOpen}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <ul className={`list ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <NavLink to="/products" className="nav-text">
            Productos{" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-text">
            Servicios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-text">
            Contacto{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
