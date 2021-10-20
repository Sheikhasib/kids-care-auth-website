import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const {
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    error,
    handleResetPassword,
    handleNameChange,
    registerNewUser,
  } = useAuth();
  return (
    <div className="login-form">
      <div>
        <h2>Create Your Account</h2>
        <form onSubmit={handleRegistration}>
          <div class="row mb-3">
            <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleNameChange}
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Your Name"
              />
            </div>
          </div>
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
          <button
            onClick={registerNewUser}
            type="submit"
            className="btn btn-info"
          >
            Register
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
          Already Have An Account? <Link to="/login">Login</Link>
        </p>
        <div>--------or--------</div>
        <button className="btn btn-info">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
