import axios from "axios";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
import auth from "../firebase/firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
        ] = useSignInWithEmailAndPassword(auth);
     const [userInfo , setUserInfo] = useState({
          name: "" ,
          email: "" ,
          password:"" ,
     })
     const [errors ,  setErrors] = useState({
          email:"" ,
          password:"",
     })
     const handleEmail = (e) =>{
          const emailRegex = /\S+@\S+\.\S+/
          const validEmail =   emailRegex.test(e.target.value)
          if(validEmail){
      
            setUserInfo({...userInfo , email: e.target.value})
            setErrors({...errors , email:''})
          }else{
            setErrors({...errors , email:'Invalid Email'})
          }
     }

     const handlePassword = (e) =>{
          const passwordRegex = /.{6}/;
          const validPassword = passwordRegex.test(e.target.value)
          if(validPassword){
        
           setUserInfo({...userInfo , password:e.target.value})
           setErrors({...errors , password:''})
          }else{
            setErrors({...errors , password:'Password Must Be  contain 6 characters'})
          }
        }
        
        const handleResetPassword = async () =>{
          if(userInfo.email){
  
            await sendPasswordResetEmail(userInfo.email)
            toast('Sent Email')
          }else{
            toast('Please Enter Your Email Address')
          }
        }
        
        const handleCreateAccount = async (e) =>{
          const email = userInfo.email
          e.preventDefault()
         await signInWithEmailAndPassword(email, userInfo.password)
         const {data} = await axios.post('https://limitless-springs-85910.herokuapp.com/login' , {email})
         console.log(data);
         localStorage.setItem('accessToken' , data.accessToken)
         navigate(from, { replace: true });
         

        }
        const navigate = useNavigate()
        const location = useLocation();
        let from = location.state?.from?.pathname || "/";
  
        
        useEffect(()=>{
          if(error){
            toast(error?.message)
            
          }
        },[error])
        if(loading){
          return loading;
        }
        
  return (
    <div>
      <form onSubmit={handleCreateAccount}>
        <div className="login">
          <h1 className="title">Login</h1>
          <div className="container">
            <div className="contact-form row">
              <div className="form-field col-lg-12">
                <input
                  placeholder="Email"
                  required
                  className="input-text"
                  type="email"
                  onChange={handleEmail}
                  name="email"
                />
                 {errors?.email && (
                  <p className="text-danger my-3 fw-bold">{errors?.email}</p>
                )}
              </div>
              <div className="form-field col-lg-12">
                <input
                  placeholder="password"
                  required
                  className="input-text"
                  onChange={handlePassword}
                  name="password"
                  type="password"
                />
                 {errors?.password && (
                  <p className="text-danger my-3 fw-bold">{errors?.password}</p>
                )}
               <p>Forget Password? <button className="btn btn-link text-primary pe-auto text-decoration-none" onClick={handleResetPassword}>Reset Password</button></p> 

               
                
              </div>

              <div className="form-field col-lg-12">
                <p className="my-3">
                  New In NH Travel? <Link to="/register">Create Account</Link>
                </p>

                <div className="d-flex align-items-center ">
                  <input
                    className="login-btn"
                    type="submit"
                    name=""
                    value="Login"
                  />
                <SocialLogin/>
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
