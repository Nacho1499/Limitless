import React from "react";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import Footer from "./Footer";
import bag1 from "../assets/1.png";
import bag2 from "../assets/19.png";
import bag3 from "../assets/20.jpg";
import bag4 from "../assets/21.jpg";

const Bags = () => {
  return (
    <>
      <Scroll />
      <div className=" bags container-fluid">
        <div className="text-center">
          <i className="fa-solid fa-shop fa-2x text-light mb-3"></i>
          <h4 className="text-light">Welcome To Store</h4>
          <Link to="/shop" className="text-decoration-none text-light">
            Shop/Back
          </Link>
        </div>
      </div>

      <div className="container mt-4 p-4">
        <div className="row g-3">
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={bag1} alt="" />
            <div className="mt-2">
              <p>$60.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={bag2} alt="" />
            <div className="mt-2">
              <p>$12.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={bag3} alt="" />
            <div className="mt-2">
              <p>$60.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={bag4} alt="" />
            <div className="mt-2">
              <p>$12.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bags;
