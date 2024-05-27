import React, { useState } from "react";

const App = () => {
  const [SignUp, setSignUp] = useState(false);
  const [SignIn, setSignIn] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSignUpClick = () => {
    setSignUp(true);
  };

  const handleSignInClick = () => {
    setSignUp(false);
    setSignIn(true);
  };
  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
    setSignIn(false);
    setSignUp(false);
  };

  return (
    <div className="h-screen sign-up-in flex justify-center items-center ">
      <div className="flex flex-col items-center justify-center  bg-gray-100">
        <div
          className={`container ${
            SignUp ? "right-panel-active" : ""
          } relative overflow-hidden w-full max-w-4xl min-h-96 bg-white shadow-lg rounded-lg`}
        >
          <div
            className={`form-container sign-up-container absolute top-0 h-full w-1/2 transition-all duration-600 ${
              SignUp ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <form className="flex flex-col items-center justify-center h-full p-10 text-center">
              <h1 className="text-2xl font-bold mb-4 text-primary">
                Create Account
              </h1>

              <span className="text-sm mb-4">
                or use your email for registration
              </span>
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-200 border-none p-3 mb-2 w-full rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-200 border-none p-3 mb-2 w-full rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-200 border-none p-3 mb-4 w-full rounded-md"
              />
              <button className="bg-white text-custom-green1 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-transparent hover:text-white hover:border-custom-green1 border-[1px]">
                Sign Up
              </button>
            </form>
          </div>
          <div
            className={`form-container sign-in-container absolute top-0 h-full w-1/2 transition-all duration-600 ${
              SignUp ? "translate-x-full" : "translate-x-0 z-10"
            }`}
          >
            {SignIn && (
              <form className="flex flex-col items-center justify-center h-full p-10 text-center">
                <h1 className="text-2xl font-bold mb-4 text-primary">
                  Sign in
                </h1>

                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-200 border-none p-3 mb-2 w-full rounded-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-200 border-none p-3 mb-4 w-full rounded-md"
                />
                <span
                  className="text-sm mb-4 cursor-pointer text-primary"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot your password?
                </span>
                <button className="bg-white text-custom-green1 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-transparent hover:text-white hover:border-custom-green1 border-[1px]">
                  Sign In
                </button>
              </form>
            )}
            {forgotPassword && (
              <form className="flex flex-col items-center justify-center h-full p-10 text-center">
                <h1 className="text-2xl font-bold mb-4 text-primary">
                  Reset your Password
                </h1>
                <p className=" text-primary text-sm mb-4">
                  Change your account password and make your self more secure
                </p>

                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-200 border-none p-3 mb-2 w-full rounded-md"
                />

                <button className="bg-white text-custom-green1 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-transparent hover:text-white hover:border-custom-green1 border-[1px]">
                  Reset
                </button>

                <p
                  className=" text-primary text-sm my-2 cursor-pointer"
                  onClick={handleSignInClick}
                >
                  Already have an account?
                </p>
              </form>
            )}
          </div>
          <div
            className={`overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ${
              SignUp ? "-translate-x-full" : ""
            }`}
          >
            <div className="overlay bg-gradient-to-r  text-white h-full w-[200%] transform translate-x-0 transition-transform duration-600">
              <div
                className={`overlay-panel overlay-left absolute top-0 h-full w-1/2 flex flex-col items-center justify-center text-center p-10 transition-transform duration-600 ${
                  SignUp ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="w-36 my-4">
                  <img src="goalogylogo.png" alt="" />
                </div>
                <p className="mb-4 text-primary">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="bg-custom-green1 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-white hover:text-custom-green1 border-custom-green1 border-[1px]"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>
              <div
                className={`overlay-panel overlay-right absolute top-0 right-0 h-full w-1/2 flex flex-col items-center justify-center text-center p-10 transition-transform duration-600 ${
                  SignUp ? "translate-x-full" : "translate-x-0"
                }`}
              >
                <div className="w-36 my-4">
                  <img src="goalogylogo.png" alt="" />
                </div>
                <p className="text-primary  mb-4">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="bg-custom-green1 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-white hover:text-custom-green1 border-custom-green1 border-[1px]"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
