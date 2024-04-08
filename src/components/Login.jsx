import { useRef, useState } from "react";
import { checkValidateData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleLogIn = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="loginWrapper">
      <div className="loginFormContainer">
        <form onSubmit={(e) => e.preventDefault()} className="loginForm">
          <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>

          {!isSignInForm && (
            <div className="formGroup">
              <label htmlFor="text">User Name</label>
              <input
                ref={name}
                type="text"
                id="text"
                placeholder="Enter your Name"
              />
            </div>
          )}

          <div className="formGroup">
            <label htmlFor="email">Email Address</label>
            <input
              ref={email}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              ref={password}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <p className="errorMessage"> {errorMessage} </p>

          <button className="btn" type="submit" onClick={handleLogIn}>
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
