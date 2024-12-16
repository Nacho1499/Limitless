import React from 'react'
import Logo from "../assets/Logo.webp"

const Footer = () => {
  return (
    <section className='container-fluid bg-dark p-4 mt-5'>
        <div className='container d-flex justify-content-evenly'>
            <div>
               <img className='logo' src={Logo} alt="logo" />
            

            </div>
            <div>
                <ul className='text-light'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div>
                <ul className='text-light'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            </div>

        </div>

    </section>
  )
}

export default Footer