import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  console.log("came from", location.state?.from);

  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then((result) => {
      history.push(redirect_url);
    })
    .finally( () => setIsLoading(false))
  };
  return (
    <div className="login-form">
      <div>
        <h2>Please Login</h2>
        <form>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input className="mt-3" type="password" name="" id="" />
          <br />
          <input className="mt-3" type="submit" value="Submit" />
        </form>
        <p>
          New To Kids Care? <Link to="/register">Create Account</Link>
        </p>
        <div>-------or--------</div>
        <button onClick={handleGoogleLogin} className="btn btn-info">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
