import React from "react";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import Footer from "./Footer";
import shirt1 from "../assets/15.png";
import shirt2 from "../assets/16.png";
import shirt3 from "../assets/17.png";
import shirt4 from "../assets/10.png";
const Shits = () => {
  return (
    <>
      <Scroll />
      <div className=" shit container-fluid">
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
            <img className="img-fluid" src={shirt1} alt="" />
            <div className="mt-2">
              <p>$60.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={shirt2} alt="" />
            <div className="mt-2">
              <p>$12.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={shirt3} alt="" />
            <div className="mt-2">
              <p>$60.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={shirt4} alt="" />
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

export default Shits;
