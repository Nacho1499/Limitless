import React from 'react'
import Logo from "../assets/Logo.webp";

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
  <div className="container">
    <a className="navbar-brand" href="javascript:void(0)"><img className='logo' src={Logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link text-light" href="javascript:void(0)">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="javascript:void(0)">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="javascript:void(0)">Shop</a>
        </li>
        <li className="nav-item text-light">
          <a className="nav-link text-light" href="javascript:void(0)">Contact</a>
        </li>
        
      </ul>
      
     
    </div>
    
  </div>
</nav>
  )
}

export default Navbar