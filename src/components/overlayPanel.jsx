// src/components/OverlayPanel.js
import React from "react";

const OverlayPanel = ({ handleSignInClick, handleSignUpClick, SignUp }) => (
  <>
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
      <p className="text-primary mb-4">
        Enter your personal details and start your journey with us
      </p>
      <button
        className="bg-custom-green1 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-white hover:text-custom-green1 border-custom-green1 border-[1px]"
        onClick={handleSignUpClick}
      >
        Sign Up
      </button>
    </div>
  </>
);

export default OverlayPanel;
