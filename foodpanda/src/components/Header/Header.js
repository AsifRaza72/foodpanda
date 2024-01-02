import React from 'react'
import img from "../Images/logo.png"
import "../Header/Header.css"
import  CartIcon from '../UI/Carts/CartIcon'
// import Login from '../Login/Login'
import TopBanner from './TopBanner'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
const Header=({ onLoginClick })=>{
    // const [click ,setclick]=useState(false)
    // const loginHandler=()=>{
    //     setclick(true)

    return(
        <div className='Header'>
            <div className='top_banner'>
                <TopBanner/>
                </div>
            <div className='Header-login-container'>
            <div className='Header-logo'>
        <img src={img} alt=''/>
        </div>

        <div className='Header-buttons'>
        <div>
         <button type='button' className='btn1 'onClick={onLoginClick} >Log in</button>
        </div>
        <div>
       <button type='button' className='btn2'>Sign up</button>
       </div>
       </div>

       <div>
       <div>
        <button className='cart-icon' >
            <CartIcon/>

        </button>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Header