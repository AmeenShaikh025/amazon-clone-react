import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import { auth } from "./firebase";
import logo from "./amazon_logo.png";

function Login() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in successfully
        //redirect to homepage
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created a user and login
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="logo" />
      </Link>
      <div className="logo__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit" className="login__signinButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
