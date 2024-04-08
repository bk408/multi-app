import { useState } from "react";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
   setIsSignInForm(!isSignInForm)
 }


  return (
    <div className="loginWrapper">
      <div className="loginFormContainer">
        <form className="loginForm">
          <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>

         {!isSignInForm && <div className="formGroup">
            <label htmlFor="text">Full Name</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter your Name"
            />
          </div>}

          <div className="formGroup">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn" type="submit">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p>
            <span className="signUp-btn" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to MULTI APP? Sign Up now."
                : "Already registered? Sign In now."}
            </span>{" "}
          </p>
        </form>
      </div>

      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg"
          alt="logo"
          className="log-img"
        />
      </div>
    </div>
  );
};

export default Login;

/*

 <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg"
          alt="logo"
          className="log-img"
        />
          </div>

*/



