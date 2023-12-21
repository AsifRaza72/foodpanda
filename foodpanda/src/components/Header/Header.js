import React from 'react'
// import {Link,useNavigate} from 'react-router-dom'
// import img from "../Images/logo.png"
import "../Header/Header.css"
// import  CartIcon from '../UI/Carts/CartIcon'
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
            <div><TopBanner/></div>
            {/* <div className='img'>
        <img src={img} alt=''/>
        </div>
        <div>

         <button className='btn1'
         onClick={<Login></Login>}
         >
         Log in</button>
        </div>
        <div>
       <button className='btn2'
       >Sign up</button>
       </div>
       <div>
        <button className='button' >
        <span className='icon'>
            <CartIcon/>
        </span>

        </button>
        </div> */}

        </div>
    )
}
export default Header