import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Create Your Account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input className="mt-3" type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input
            className="mt-3"
            type="password"
            name=""
            id=""
            placeholder="Re-enter Your Password"
          />
          <br />
          <input className="mt-3" type="submit" value="Submit" />
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
