import React from 'react'
// import { Link } from 'react-router-dom'
import "../Header/TopBanner.css"
import img from "../Images/foodpanda-transparent-bag-remove-background-removebg-preview (1).png"


const TopBanner=(props)=> {
  return (
    <div className='top-pink-banner'>
    
    <div >
      <img src={img} alt='img' className='logo'/>
</div>
    <div className='Header-content'>
      <p>Do You Need a business account?</p>
</div>
    <di className='Header'>
      <button>SIGN UP NOW</button>
</di>


<ul >
{/* <li ><Link to="/Home" ><b>LIGIN</b></Link></li> */}
{/* <li><Link to="/Aboutus" ><b>About Us</b></Link></li>
<li><Link to="/Contactus" ><b>Contact Us</b></Link></li> */}
</ul>


    </div>
  )
}
export default TopBanner
