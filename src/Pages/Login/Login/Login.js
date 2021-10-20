import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    setIsLoading,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    error,
    handleResetPassword,
    processLogin,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  console.log("came from", location.state?.from);

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="login-form">
      <div>
        <h2>Please Login</h2>
        <form onSubmit={handleRegistration}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="inputEmail3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div className="row mb-3 text-danger">{error}</div>
          <button onClick={processLogin} type="submit" className="btn btn-info">
            Login
          </button>
          <button
            onClick={handleResetPassword}
            type="button"
            className="btn btn-info btn-sm mx-3"
          >
            Reset Password
          </button>
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
