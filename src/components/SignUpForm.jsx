// src/components/SignUpForm.js
import React, { useContext, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";

const SignUpForm = ({ handleSignInClick }) => {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp({ name, email, password });
  };

  return (
    <form
      className="flex flex-col items-center justify-center h-full p-10 text-center"
      onSubmit={handleSignUp}
    >
      <h1 className="text-2xl font-bold mb-4 text-primary">Create Account</h1>
      <span className="text-sm mb-4">or use your email for registration</span>
      <input
        type="text"
        placeholder="Name"
        className="bg-gray-200 border-none p-3 mb-2 w-full rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button className="bg-white text-custom-green1 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-transparent hover:text-white hover:border-custom-green1 border-[1px]">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
