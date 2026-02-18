import React from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminDashboard from "./AdminDashboard";
import Institutes from "./Institutes";
import Users from "./Users";
import AdminImmersion from "./AdminImmersion";
import Financials from "./Financials";
import Reports from "./Reports";
import Notifications from "./Notifications";
import Placements from "./Placements";
import Profile from "./Profile";
import "./admin.css";


const primaryTabs = [
  { label: "Dashboard", to: "/dashboard/admin/admin" },
  { label: "Institutes", to: "/dashboard/admin/institutes" },
  { label: "Users", to: "/dashboard/admin/users" },
  { label: "Immersion", to: "/dashboard/admin/AdminImmersion" },
  { label: "Placements", to: "/dashboard/admin/Placements" },
  { label: "Financials", to: "/dashboard/admin/financials" },
  { label: "Reports", to: "/dashboard/admin/reports" },
  { label: "Notifications", to: "/dashboard/admin/notifications" },
];

const Admin = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">


        <main className="dashboard-content" aria-label="Admin main content">
          <div className="dashboard-page-container">
            <Routes>
              <Route index element={<AdminDashboard />} />
              <Route path="admin" element={<AdminDashboard />} /> 
              <Route path="institutes" element={<Institutes />} />
              <Route path="users" element={<Users />} />
              <Route path="AdminImmersion" element={<AdminImmersion />} />
              <Route path="financials" element={<Financials />} />
              <Route path="reports" element={<Reports />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="Placements" element={<Placements />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
