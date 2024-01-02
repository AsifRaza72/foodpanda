import './Login.css'
import React from 'react';
import Button from '../UI/Button'; // Assuming you have a Button component
import fbLogo from '../Images/Facebook-logo.png'; // Replace with your actual image path
// import './Modal.css'; // Assuming you have a CSS file for modal styling

const Login = ({ showModal, handleClose, handleLogin }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
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
                <img className="fb" alt="Facebook Logo" src={fbLogo} />
                Continue with Facebook
              </Button>
              <Button>Continue with Google</Button>
              <Button>Continue with Apple</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
