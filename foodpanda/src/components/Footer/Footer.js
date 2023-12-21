import React from 'react'
import './Footer.css'
import img from '../Images/foodpanda-grey.png'

function Footer() {
  return (
    <div className='footer_logo'>

        <hr/>
        <img  src={img} alt='img'/> 
        <hr/>
        </div>
  )
}

export default Footer