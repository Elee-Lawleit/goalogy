// src/components/SignInForm.js
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignInForm = ({ handleForgotPasswordClick }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form
      className="flex flex-col items-center justify-center h-full p-10 text-center"
      onSubmit={handleLogin}
    >
      <h1 className="text-2xl font-bold mb-4 text-primary">Sign in</h1>
      <input
        type="email"
        placeholder="Email"
        className="bg-gray-200 border-none p-3 mb-2 w-full rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-gray-200 border-none p-3 mb-4 w-full rounded-md"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default SignInForm;
