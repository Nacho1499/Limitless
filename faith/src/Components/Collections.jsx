import React from 'react'
import images from "../assets/jacket.jpg"
import image1 from "../assets/1.png"
import image2 from "../assets/2.jpg"
import image3 from "../assets/3.jpg"
import image4 from "../assets/4.png"
import image5 from "../assets/5.png"
import image7 from "../assets/7.jpg"
import image8 from "../assets/8.png"

const Collections = () => {
  return (
    <main className='container p-3 mt-4 p-3'>
        <h5>New Arrival <i class="fa-solid fa-arrow-right"></i></h5>
        <hr />
       <div className='row g-3'>
        <div className='col-12 col-lg-3'>
            <img className='img-fluid' src={images} alt="" />
            <div className='mt-2'>
            <p>Jacket and Hood</p>
            <p>$60.00</p>
            <button className=' btn btn-warning'>Add To Cart</button>
            </div>

        </div>
        <div className='col-12 col-lg-3'>
            <img className='img-fluid' src={image1} alt="" />
            <div className='mt-2'>
            <p>bag</p>
            <p>$12.00</p>
            <button className=' btn btn-warning'>Add To Cart</button>
            </div>

        </div>
        <div className='col-12 col-lg-3'>
            <img className='img-fluid' src={image2} alt="" />
            <div className='mt-2'>
            <p>Jacket and Hood</p>
            <p>$15.00</p>
            <button className=' btn btn-warning'>Add To Cart</button>
            </div>

        </div>
        <div className='col-12 col-lg-3'>
            <img className='img-fluid' src={image3} alt="" />
            <div className='mt-2'>
            <p>Cap</p>
            <p>$60.00</p>
            <button className=' btn btn-warning'>Add To Cart</button>
            </div>

        </div>


        
       </div>
      
       <div className='row g-3 mt-4 p-3'>
       <h5>Limited Offers</h5>
       <hr />
        <div className='col-12 col-lg-3'>
            <img className='img-fluid' src={image4} alt="" />
            <div className='mt-2'>
            <p>mog</p>
            <p>$60.00</p>
            <button className=' btn btn-warning'>Add To Cart</button>
            </div>

        </div>
        <div className='col-12 col-lg-3'>
            <img className='img-fluid' src={image5} alt="" />
            <div className='mt-2'>
            <p>book</p>
            <p>$12.00</p>
            <button className=' btn btn-warning'>Add To Cart</button>
            </div>

        </div>
        <div className='col-12 col-lg-3'>
            <img className='img-fluid' src={image7} alt="" />
            <div className='mt-2'>
            <p>pen</p>
            <p>$15.00</p>
            <button className=' btn btn-warning'>Add To Cart</button>
            </div>

        </div>
        <div className='col-12 col-lg-3'>
            <img className='img-fluid' src={image8} alt="" />
            <div className='mt-2'>
            <p>Head warmer</p>
            <p>$60.00</p>
            <button className=' btn btn-warning'>Add To Cart</button>
            </div>

        </div>
        
       </div>

    </main>
  )
}

export default Collections