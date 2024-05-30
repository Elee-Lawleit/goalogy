// src/contexts/AuthContext.js
import React, { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

// Create a context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);

    toast.success("Logged in successfully");
  };

  const logout = () => {
    setUser(null);
    toast.success("Logged out successfully");
  };

  const signUp = (userData) => {
    setUser(userData);
    toast.success("Account created successfully");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
