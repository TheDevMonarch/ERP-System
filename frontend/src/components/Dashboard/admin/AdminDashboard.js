import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [stats, setStats] = useState({
    institutes: 0,
    users: 0,
    pendingApprovals: 0,
    placements: 0,
  });

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        const [institutesRes, usersRes, pendingRes, placementsRes] =
          await Promise.all([
            axios.get(
              "https://backenderp-production-6374.up.railway.app/api/admin/institutes"
            ),
            axios.get(
              "https://backenderp-production-6374.up.railway.app/api/admin/users"
            ),
            axios.get(
              "https://backenderp-production-6374.up.railway.app/api/admin/pending"
            ),
            axios.get(
              "https://backenderp-production-6374.up.railway.app/api/admin/placements?period=month"
            ),
          ]);

        setStats({
          institutes: institutesRes.data?.length || 0,
          users: usersRes.data?.length || 0,
          pendingApprovals: pendingRes.data?.total || 0,
          placements: placementsRes.data?.count || 0,
        });
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      }
    };

    fetchAdminStats();
  }, []);

  const adminCards = [
    {
      title: "Institutes Registered",
      value: stats.institutes,
      icon: "ri-school-line",
      color: "#3b82f6",
      path: "institutes",
      helper: "Total onboarded institutes",
    },
    {
      title: "Total Users",
      value: stats.users,
      icon: "ri-team-line",
      color: "#22c55e",
      path: "users",
      helper: "Students, staff & admins",
    },
    {
      title: "Pending Approvals",
      value: stats.pendingApprovals,
      icon: "ri-alert-line",
      color: "#f59e0b",
      path: "approvals",
      helper: "Requires admin action",
    },
    {
      title: "Placements This Month",
      value: stats.placements,
      icon: "ri-briefcase-line",
      color: "#a855f7",
      path: "Placements",
      helper: "Approved placements",
    },
  ];

  return (
    <div className="dashboard-page">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-text">
          <h1>Welcome back, Admin 👋</h1>
          <p>
            Here’s a real-time overview of system operations and performance
          </p>
        </div>

        <div className="dashboard-header-actions">
          <input
            type="text"
            placeholder="Search institutes, users, reports, or transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      {/* Admin KPI Cards */}
      <section className="dashboard-cards">
        {adminCards.map((card) => (
          <div
            key={card.title}
            className="dashboard-card"
            onClick={() => navigate(`/dashboard/admin/${card.path}`)}
          >
            <div
              className="card-icon"
              style={{ backgroundColor: card.color }}
            >
              <i className={`ri ${card.icon}`} />
            </div>

            <div className="card-info">
              <p className="card-title">{card.title}</p>
              <h3 className="card-value">{card.value}</h3>
              <span className="card-helper">{card.helper}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AdminDashboard;