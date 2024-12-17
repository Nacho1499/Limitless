import React from "react";
import Logo from "../assets/Logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link text-light">
                Shop
              </Link>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link text-light">Contact</a>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Hoods</a></li>
            <li><a className="dropdown-item" href="#">Pen</a></li>
            <li><a className="dropdown-item" href="#">bags</a></li>
            <li><a className="dropdown-item" href="#">mogs</a></li>
            <li><a className="dropdown-item" href="#">caps</a></li>
            <li><a className="dropdown-item" href="#">Books</a></li>
          </ul>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
