// src/App.js
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../contexts/AuthContext";
import SignInForm from "../components/signInForm";
import SignUpForm from "../components/SignUpForm";
import ForgotPasswordForm from "../components/forgotPasswordForm";
import OverlayPanel from "../components/overlayPanel";

const App = () => {
  const [SignUp, setSignUp] = useState(false);
  const [SignIn, setSignIn] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSignUpClick = () => {
    setSignUp(true);
    setSignIn(false);
  };

  const handleSignInClick = () => {
    setSignUp(false);
    setSignIn(true);
    setForgotPassword(false);
  };

  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
    setSignIn(false);
    setSignUp(false);
  };

  return (
    <AuthProvider>
      <div className="h-screen sign-up-in flex justify-center items-center ">
        <ToastContainer />
        <div className="flex flex-col items-center justify-center bg-gray-100">
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
              <SignUpForm handleSignInClick={handleSignInClick} />
            </div>
            <div
              className={`form-container sign-in-container absolute top-0 h-full w-1/2 transition-all duration-600 ${
                SignUp ? "translate-x-full" : "translate-x-0 z-10"
              }`}
            >
              {SignIn && (
                <SignInForm
                  handleForgotPasswordClick={handleForgotPasswordClick}
                />
              )}
              {forgotPassword && (
                <ForgotPasswordForm handleSignInClick={handleSignInClick} />
              )}
            </div>
            <div
              className={`overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ${
                SignUp ? "-translate-x-full" : ""
              }`}
            >
              <div className="overlay bg-gradient-to-r text-white h-full w-[200%] transform translate-x-0 transition-transform duration-600">
                <OverlayPanel
                  handleSignInClick={handleSignInClick}
                  handleSignUpClick={handleSignUpClick}
                  SignUp={SignUp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
