import React from "react";
import logo from "../assets/Logo.webp";
import Footer from "./Footer";
import Scroll from "./Scroll";
import Navbar from "./Navbar"

const About = () => {
  return (
    <>
    <Scroll/>
    <Navbar/>
    <br />
    <br />
    <div className="container-fluid bg-dark p-2 mt-3">
      <div className="container text-light mb-3">
        <h5 className="mt-5">About Possibilities collections</h5>
        <hr />
        <img className="img-fluid about-logo mb-3 mt-4" src={logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in
          eius velit omnis architecto error quo at dolorem. Mollitia at fugit
          quod dolore eveniet dolorum dicta doloribus sapiente totam optio. Ab
          temporibus numquam, nesciunt excepturi, quos accusamus voluptas hic
          asperiores, itaque impedit dolorum minus neque facilis quia velit modi
          at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          velit aut dicta laborum, animi harum porro officiis at illo voluptatem
          excepturi quo eum magnam voluptatibus expedita corporis iste. Dolore
          molestias amet temporibus quos est veritatis deleniti corporis
          consequuntur esse distinctio facere iste fugiat reiciendis vel
          
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
