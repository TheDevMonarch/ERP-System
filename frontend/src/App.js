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

  // 🔧 TEMP DEV BYPASS
  useEffect(() => {
    const dummyUser = {
      role: "admin", // admin | user | institute
    };
    setUser(dummyUser);
  }, []);

  const RoleRoute = ({ role, element }) => {
    if (!user) return <Navigate to="/" replace />;
    return user.role === role ? element : <Navigate to="/" replace />;
  };

  // ✅ DASHBOARD LAYOUT (Navbar + Page)
  const DashboardLayout = ({ children }) => {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  };

  return (
    <Router>
      <Routes>
        {/* ================= AUTH ================= */}
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

        {/* ================= DASHBOARDS ================= */}
        <Route
          path="/dashboard/admin/*"
          element={
            <RoleRoute
              role="admin"
              element={
                <DashboardLayout>
                  <Admin />
                </DashboardLayout>
              }
            />
          }
        />

        <Route
          path="/dashboard/institute/*"
          element={
            <RoleRoute
              role="institute"
              element={
                <DashboardLayout>
                  <InstituteDashboard />
                </DashboardLayout>
              }
            />
          }
        />

        <Route
          path="/dashboard/user/*"
          element={
            <RoleRoute
              role="user"
              element={
                <DashboardLayout>
                  <UserDashboard />
                </DashboardLayout>
              }
            />
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;