// src/App.js
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Goals from "./pages/goals";
import AccountsSetting from "./pages/accountsSetting";
import { AuthProvider } from "./contexts/AuthContext";
import Student from "./pages/student";
import RegisterStudent from "./pages/resgisterStudent";
import AddNewGoal from "./pages/addNewGoal";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accountsettings" element={<AccountsSetting />} />
          <Route path="/student-details" element={<Student />} />
          <Route path="/student-goals" element={<Goals />} />
          <Route path="/add-goal" element={<AddNewGoal />} />
          <Route path="/add-student" element={<RegisterStudent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
