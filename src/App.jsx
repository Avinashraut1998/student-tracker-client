import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyContext } from "./MyContext";
import TeacherLogin from "./component/Teacher/TeacherLogin";
import TeacherSignUp from "./component/Teacher/TeacherSignUp";
import StudentLogin from "./component/students/StudentLogin";
import StudentSignup from "./component/students/StudentSignup";
import AdminLogin from "./component/admin/AdminLogin";
import LandingPage from "./pages/LandingPage";
import TeacherPage from "./pages/TeacherPage";
import NavBar from "./component/NavBar";
import { useState } from "react";

import TeacherDashboard from "./component/Teacher/TeacherDashboard";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Teacher Routes */}
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/teacher/signup" element={<TeacherSignUp />} />
          <Route path="/teacher" element={<TeacherPage />}>
            <Route index path="dashboard" element={<TeacherDashboard />} />
          </Route>
          {/* Students Routes */}
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />

          <Route path="admin/login" element={<AdminLogin />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
