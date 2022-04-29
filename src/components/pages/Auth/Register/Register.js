import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword  , useUpdateProfile} from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import auth from "../firebase/firebase.init";
import { async } from "@firebase/util";
import { ToastContainer, toast } from "react-toastify";



const Register = () => {
     const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
     const [updateProfille , updating , profileError] = useUpdateProfile(auth)

     const [showPassword , setShowPassword] = useState(false);
     const [name , setName] = useState("")
     const [email , setEmail] = useState("")
     const [password , setPassword] = useState("")
     const [confirmPassword , setConfirmPassword] = useState("")
     const handleName = e =>{
          setName(e.target.value)
     }
     const handleEmail = e =>{
          setEmail(e.target.value)
     }
     const handlePassword = e =>{
          setPassword(e.target.value)
     }
     const handleConfirmPassword = e =>{
          setConfirmPassword(e.target.value)
     }
     const createAccount =   async e =>{
          e.preventDefault()
          createUserWithEmailAndPassword(email , password)
          await updateProfille({displayName:name})
          e.reset()

     }
  return (
    <div>
      <form onSubmit={createAccount}>
        <div className="login">
          <h1 className="title">Create Account</h1>
          <div className="container">
            <div className="contact-form row">
              <div className="form-field col-lg-6">
                <input
                  required
                  className="input-text"
                  type="text"
                  onChange={handleName}
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
                  onChange={handleEmail }
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-field col-lg-6">
                <input
                  required
                  className="input-text"
                  name="password"
                  onChange={ handlePassword}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />
              </div>
              <div className="form-field col-lg-6">
                <input
                  required
                  className="input-text"
                  name="confirmPassword"
                  onChange={handleConfirmPassword}
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                />
              </div>
              <p className="">
                {
                  <BsEyeFill
                    size={20}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                }{" "}
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
