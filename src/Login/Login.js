import React from "react";
import PropTypes from "prop-types";
import "./Login.css";
import sideImg from "./31474530.jpg";
export default function Login(props) {
  return (
    <>
      <div className="login-body d-flex">
        <div className="container d-flex">
          <div className="login-side">
            <img src={sideImg} alt="" />
          </div>
          <div className="login-side">
            <h2>LogIn</h2>
            <form action="#" className="login_form">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Your Username"
                required
              />
              <br /> <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <br />
              <br />
              <input type="checkbox" name="tick" id="tick" />
              <label htmlFor="tick">Remember me</label>
              <br />
              <br />
              <button type="submit">Login</button>
            </form>
            <div className="form_below">
              <h3>Or Login With</h3>
              <button className="google" style={{ marginBottom: "6px" }}>
                Continue with Google
              </button>
              <br />
              <button className="facebook">Continue with Facebook</button>
            </div>
            <div className="account-crt">
              <h3 style={{marginBottom: "8px"}}>Have Not Any Account?</h3>
              <a href="#">Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Login.protoTypes = {
  head: PropTypes.string,
};
