import React from "react";
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
import Goals from "./pages/goals"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* 
        <Route path="/schoolstatus/:id" element={<SchoolstatusComponent />} />
        <Route path="/accountsettings" element={<AccountsettingsComponent />} />
        <Route path="/category" element={<CategoryComponent />} />
        <Route path="/users" element={<UsersComponent />} />
        <Route path="/student/:id" element={<StudentComponent />} />
        <Route path="/view-goal/:id" element={<ViewgoalComponent />} /> */}
        {/* <Route
          path="/student-registration"
          element={<StudentRegistrationComponent />}
        /> */}
        <Route path="/student-details" element={<StudentDetails/>}/>
        <Route path="/student-goals" element={<Goals/>}/>
      </Routes>
    </Router>
  );
}

export default App;
