import React from "react";
import Logo from "../assets/Logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  let year = new Date();
  let date = year.getFullYear();
  return (
    <section className="container-fluid bg-dark p-4 mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 col-lg-4">
            <img className="logo mb-2" src={Logo} alt="logo" />
            <p className="text-light">Email: limitless@gmail.com</p>
            <p className="text-light">Tele: +567-675796</p>
          </div>
          <div className="col-6 col-lg-4">
            <ul className="text-light">
              <h6 className="text-warning">Quick Links</h6>
              <hr />
              <li>
                <Link to="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-light">
                  About
                </Link>
              </li>
              <li>
                <a href="" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/shop" className="text-decoration-none text-light">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-4">
            <div className="text-light">
              <h6 className="text-warning">Social Links</h6>
              <hr />
              <i className="media-logo fa-brands fa-square-whatsapp fa-2x"></i>
              <i className="media-logo fa-brands fa-square-instagram fa-2x"></i>
              <i className="media-logo fa-brands fa-twitter fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <p className="text-light mt-4 text-center">
        ©<span className="date">{date}</span> Limitless possibililties
        Collections. All right reserved
      </p>
    </section>
  );
};

export default Footer;
