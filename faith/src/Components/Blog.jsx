import React from 'react'
import blog2 from "../assets/logo2.webp"
import blog3 from "../assets/jacket.jpg"

const Blog = () => {
  return (
    <div className='container mt-4'>
        <h5>Our Blogs</h5>
        <hr />
        <div className='row g-3 p-3'>
            <div className='col-12 col-lg-4'>
                <img className='img-fluid mb-3' src={blog3} alt="" />
                <a href="https://dailypost.ng/2024/12/15/nigerians-criticise-my-fashion-choices-due-to-my-age-tiwa-savage/" className='text-decoration-none text-dark'><h5>Nigerians criticise my fashion choices due to my age – Tiwa Savage</h5></a>

            </div>
            <div className='col-12 col-lg-4'>
                <img className='img-fluid mb-3' src={blog2} alt="" />
                <a href="https://www.townandcountrymag.com/style/fashion-trends/a63161481/best-east-west-bags/" className='text-decoration-none text-dark'><h5>The Best East-West Bags to Carry into 2025</h5></a>

            </div>
            <div className='col-12 col-lg-4'>
                <img className='img-fluid mb-3' src={blog3} alt="" />
                <a href="https://www.msn.com/en-us/entertainment/celebrities/anne-hathaway-cried-telling-rick-owens-about-her-beloved-leather-jacket/ar-AA1vUEoy?ocid=BingNewsVerp" className='text-decoration-none text-dark'><h5>Anne Hathaway 'cried' telling Rick Owens about her beloved leather jacket</h5></a>

            </div>

        </div>

    </div>
  )
}

export default Blog