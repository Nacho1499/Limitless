import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero container-fluid mb-5">
      <div className="text-center">
        <p className="text-light mb-3">__________Stylish__________</p>
        <h1 className="text-light">LIMITELESS POSSIBILITIES COLLECTIONS</h1>
        <Link to="/shop" className="hero-btn btn btn-outline-light mt-3">
          SHOP NOW
        </Link>
        <button className="hero-btn btn btn-outline-light mt-3">
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default Hero;
