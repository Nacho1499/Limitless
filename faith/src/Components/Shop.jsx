import React from "react";
import images from "../assets/12.png";
import image1 from "../assets/10.png";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.png";
import image5 from "../assets/9.png";
import image7 from "../assets/13.jpg";
import image8 from "../assets/11.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";

const Shop = () => {
  return (
    <>
     <Scroll/>
      <div className=" shop container-fluid">
        <div className="text-center">
          <i class="fa-solid fa-shop fa-2x text-light mb-3"></i>
          <h4 className="text-light">Welcome To Store</h4>
          <Link to="/" className="text-decoration-none text-light">
            Home/shop
          </Link>
        </div>
      </div>
      <div className="container mt-5 p-4">
        <div className="row g-3">
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={images} alt="" />
            <div className="mt-2">
              <p>Jacket and Hood</p>
              <p>$60.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={image1} alt="" />
            <div className="mt-2">
              <p>bag</p>
              <p>$12.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={image4} alt="" />
            <div className="mt-2">
              <p>mog</p>
              <p>$60.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={image5} alt="" />
            <div className="mt-2">
              <p>book</p>
              <p>$12.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={image7} alt="" />
            <div className="mt-2">
              <p>pen</p>
              <p>$15.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={image8} alt="" />
            <div className="mt-2">
              <p>Head warmer</p>
              <p>$60.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={image2} alt="" />
            <div className="mt-2">
              <p>Jacket and Hood</p>
              <p>$15.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={image3} alt="" />
            <div className="mt-2">
              <p>Cap</p>
              <p>$60.00</p>
              <button className=" btn btn-outline-dark">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
