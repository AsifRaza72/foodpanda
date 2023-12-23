import React from 'react'
import Button from '../UI/Button'
import './Login.css'
import fb from '../Images/Facebook-logo.png'


function Login(props) {
  return (
    <div className='login-container'>

        <h1>Welcome!</h1>
        <p>Sign up or log in to continue</p>
        <form>
          <Button > <img className='fb' src={fb}/>
            Continue with Facebook</Button>
          <Button>Continue with Google</Button>
          <Button>Continue with Apple</Button>
        </form>
    </div>
  )
}

export default Login