import React from 'react'
import img from "../Images/logo.png"
import "../Header/Header.css"
import  CartIcon from '../UI/Carts/CartIcon'
// import Login from '../Login/Login'
import TopBanner from './TopBanner'
const Header=()=>{
    // const [click ,setclick]=useState(false)
    // const navigate = useNavigate();
    // const clickHandler=()=>{
    //     setclick(true)
    //     navigate('/src/components/Body/Imagesection.js');
    // };
    // if (submitted) {
    //     return <Lo/>;
    //   }
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
         <button type='button' className='btn1'>Log in</button>
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