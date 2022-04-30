import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import auth from "../firebase/firebase.init";
import { async } from "@firebase/util";
import { toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfille, updating, profileError] = useUpdateProfile(auth);

  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleName = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  const handleEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
    }
  };
  const handlePassword = (e) => {
    // setPassword(e.target.value)
    const passwordRegex = /.{6}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: "Password Must Be  contain 6 characters",
      });
    }
  };
  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password Don't Match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };
  const createAccount = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    await updateProfille({ displayName: userInfo.name });
  };
  useEffect(() => {
    if (error) {
      toast(error?.message);
    }
  }, [error]);
  const navigate = useNavigate()
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
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
                  onChange={handleEmail}
                  placeholder="Enter Your Email"
                />
                {errors?.email && (
                  <p className="text-danger my-3 fw-bold">{errors?.email}</p>
                )}
              </div>
              <div className="form-field col-lg-6">
                <input
                  required
                  className="input-text"
                  name="password"
                  onChange={handlePassword}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />
                {errors?.password && (
                  <p className="text-danger my-3 fw-bold">{errors?.password}</p>
                )}
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
                {errors?.confirmPassword && (
                  <p className="text-danger my-3 fw-bold">
                    {errors?.confirmPassword}
                  </p>
                )}
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

export default Register;
