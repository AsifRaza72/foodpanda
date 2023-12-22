import React from 'react'
import './Footer.css'
import img from '../Images/foodpanda-grey.png'
import fblogo from '../Images/Facebook-logo.png'
import instalogo from '../Images/insta.png'

function Footer() {
  return (
    <div className='footer_logos_container'>

      <div className='footer_logo'>
      <hr/>
        <img   src={img} alt='img'/>
        <hr/>
        </div>
        <div className='footer_logo2'>

          <img src={fblogo} alt='logo'/>
          <img src={instalogo}/>
        </div>
        {/* <hr/> */}
        </div>
  )
}

export default Footer