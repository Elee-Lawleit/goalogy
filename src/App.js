// src/App.js
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import StudentDetails from "./pages/studentDetails";
import Goals from "./pages/goals";

import AccountsSetting from "./pages/accountsSetting";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accountsettings" element={<AccountsSetting />} />
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path="/student-goals" element={<Goals />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
