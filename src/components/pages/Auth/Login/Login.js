import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
     return (
          <div>
              <form >
        <div className="login">
          <h1 className="title">Login</h1>
          <div className="container">
            <div className="contact-form row">
              <div className="form-field col-lg-12">
                <input placeholder="Email" required  className="input-text" type="email" name="email" />
                
              </div>
              <div className="form-field col-lg-12">
                <input placeholder="password" required  className="input-text" name="password" />
                
               <p>Forget Password? <button className="btn btn-link text-primary pe-auto text-decoration-none" >Reset Password</button></p> 
               
              </div>
              
              <div className="form-field col-lg-12">
              
               <p className="my-3">New In NH Travel? <Link to="/register">Create Account</Link></p>
               
               <div className="d-flex align-items-center ">
                
                <input
                  className="login-btn"
                  type="submit"
                  name=""
                  value="Login"
                />
              
               </div>
               
              </div>
            </div>
          </div>
        </div>
      </form> 
          </div>
     );
};

export default Login;