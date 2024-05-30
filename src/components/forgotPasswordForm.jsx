// src/components/ForgotPasswordForm.js
import React, { useState } from "react";

const ForgotPasswordForm = ({ handleSignInClick }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Add reset password logic here
  };

  return (
    <form
      className="flex flex-col items-center justify-center h-full p-10 text-center"
      onSubmit={handleResetPassword}
    >
      <h1 className="text-2xl font-bold mb-4 text-primary">
        Reset your Password
      </h1>
      <p className="text-primary text-sm mb-4">
        Change your account password and make yourself more secure
      </p>
      <input
        type="email"
        placeholder="Email"
        className="bg-gray-200 border-none p-3 mb-2 w-full rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-white text-custom-green1 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-transparent hover:text-white hover:border-custom-green1 border-[1px]">
        Reset
      </button>
      <p
        className="text-primary text-sm my-2 cursor-pointer"
        onClick={handleSignInClick}
      >
        Already have an account?
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
