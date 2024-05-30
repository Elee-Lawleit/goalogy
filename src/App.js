import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import AdminComponent from "./components/dashboard";
// import AccountsettingsComponent from "./components/shared/AccountsettingsComponent";
// import CategoryComponent from "./components/shared/CategoryComponent";
// import StudentComponent from "./components/shared/StudentComponent";
// import ViewgoalComponent from "./components/shared/ViewgoalComponent";
// import StudentRegistrationComponent from "./components/shared/StudentRegistrationComponent";
// import SchoolstatusComponent from "./components/shared/SchoolstatusComponent";
// import UsersComponent from "./components/shared/UsersComponent";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import StudentDetails from "./pages/studentDetails";
import Goals from "./pages/goals";
import Layout from "./pages/Layout";
import AccountsSetting from "./pages/accountsSetting";

import AddStudent from "./pages/addStudent"
import AddGoal from "./pages/addGoal"
import LearningPlan from "./pages/learningplan"

function App() {
  return (
    <Router>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accountsettings" element={<AccountsSetting />} />

          {/* 
        <Route path="/schoolstatus/:id" element={<SchoolstatusComponent />} />
        <Route path="/category" element={<CategoryComponent />} />
        <Route path="/users" element={<UsersComponent />} />
        <Route path="/student/:id" element={<StudentComponent />} />
        <Route path="/view-goal/:id" element={<ViewgoalComponent />} /> */}
          {/* <Route
          path="/student-registration"
          element={<StudentRegistrationComponent />}
        /> */}
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path="/student-goals" element={<Goals />} />
          <Route path="/add-goal" element={<AddGoal />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/learning-plan" element={<LearningPlan />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
