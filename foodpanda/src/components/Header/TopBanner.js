import React from 'react'
// import { Link } from 'react-router-dom'
import "../Header/TopBanner.css"
import img from "../Images/foodpanda-transparent-bag-remove-background-removebg-preview (1).png"


const TopBanner=(props)=> {
  return (
    <div className='top-pink-banner'>
    <div className='logo'>
      <img src={img} alt='img'/>
</div>
    <div className='top-pink-content'>
      <p>Do You Need a business account?</p>
</div>
    <div className='top-pink-banner-button'>
      <button>SIGN UP NOW</button>
</div>


    </div>
  )
}
export default TopBanner
