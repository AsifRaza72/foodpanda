import './Login.css'
import React from 'react';
import Button from '../UI/Button';
import fbLogo from '../Images/Facebook-logo.png';
import googlelogo from '../Images/270799.png'
import applelogo from '../Images/apple-logo.png'
const Login = ({ showModal, handleClose, handleLogin }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}   style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" >
        <div className="modal-content login-modal">
          <div className="modal-header">
            <h5 className="modal-title">Welcome!</h5>
            <button type="button" className="close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Sign up or log in to continue</p>
            <form>
              <Button>
                <img className="fb-logo" alt="Facebook Logo" src={fbLogo} />
                <span>Continue with Facebook</span>
              </Button>
              <Button>
                <img className="google-logo" alt="google Logo" src={googlelogo}/>
                Continue with Google</Button>
              <Button>
              <img className="apple-logo" alt="apple Logo" src={applelogo}/>
               Continue with Apple</Button>
               <div>               <p style={{justifyContent:'center',alignItems:'center',marginleft:'30%'}}>or</p>
</div>
               <Button >Login</Button>
               <Button>Sign Up</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
