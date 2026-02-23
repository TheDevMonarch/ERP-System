import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import ForgotPassword from "./components/Login/ForgotPassword";

import Admin from "./components/Dashboard/admin/admin";
import UserDashboard from "./components/Dashboard/User/User";
import InstituteDashboard from "./components/Dashboard/institute/institute";

import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    setUser(storedUser);
  }, []);

const RoleRoute = ({ role, element }) => {
    if (!user) return <Navigate to="/" replace />;
    return user.role === role ? element : <Navigate to="/" replace />;
  };

  const DashboardLayout = ({ children }) => (
    <>
      <Navbar />
      {children}
    </>
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to={`/dashboard/${user.role}`} replace />
            ) : (
              <Login />
            )
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/dashboard/admin/*"
          element={
            // <RoleRoute role="admin" element={<DashboardLayout><Admin /></DashboardLayout>} />
            <DashboardLayout><Admin /></DashboardLayout>
          }
        />

        <Route
          path="/dashboard/institute/*"
          element={
            // <RoleRoute role="institute" element={<InstituteDashboard />} />
            <InstituteDashboard />
          }
        />

        <Route
          path="/dashboard/user/*"
          element={
            // <RoleRoute role="institute" element={<InstituteDashboard />} />
              <UserDashboard />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;