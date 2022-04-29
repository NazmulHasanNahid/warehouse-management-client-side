import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
     return (
          <div>
               <form >
        <div className="login">
          <h1 className="title">Create Account</h1>
          <div className="container">
            <div className="contact-form row">
              <div className="form-field col-lg-6">
                <input
                  required
                  
                  className="input-text"
                  type="text"
                  name="name"
                  placeholder="Enter Your name"
                />
              </div>
              <div className="form-field col-lg-6">
                <input
                  required
                 
                  className="input-text"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                
               
              </div>
              <div className="form-field col-lg-6">
                <input
                  required
                  
                  className="input-text"
                 
                  name="password"
                  placeholder="Password"
                />
                
               
              </div>
              <div className="form-field col-lg-6">
                <input
                
                  required
                  className="input-text"
                 
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                
              </div>
              <p className="">
                
                show Password
              </p>

              <div className="form-field col-lg-12">
                <p className="my-3">
                  Already Have An Account <Link to="/login">Login</Link>
                </p>
                <div className="d-flex align-items-center">
                  <input
                    className="login-btn"
                    type="submit"
                    name=""
                    value="Sign Up"
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

export default Register;