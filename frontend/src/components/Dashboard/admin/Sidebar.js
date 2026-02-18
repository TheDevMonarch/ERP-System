import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";

const sidebarSections = [
  {
    label: "Dashboard",
    items: [
      {
        path: "",
        label: "Overview",
        icon: "ri-dashboard-2-line",
        color: "#3b82f6",
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        path: "institutes",
        label: "Institutes",
        icon: "ri-school-line",
        color: "#10b981",
      },
      {
        path: "users",
        label: "Users",
        icon: "ri-team-line",
        color: "#f59e0b",
      },
      {
        path: "Placements",
        label: "Placements",
        icon: "ri-briefcase-line",
        color: "#ef4444",
      },
    ],
  },
  {
    label: "Operations",
    items: [
      {
        path: "AdminImmersion",
        label: "Academic Immersion",
        icon: "ri-book-open-line",
        color: "#8b5cf6",
      },
      {
        path: "financials",
        label: "Financials",
        icon: "ri-money-dollar-circle-line",
        color: "#84cc16",
      },
      {
        path: "reports",
        label: "Reports",
        icon: "ri-bar-chart-line",
        color: "#06b6d4",
      },
    ],
  },
  {
    label: "Communication",
    items: [
      {
        path: "notifications",
        label: "Notifications",
        icon: "ri-notification-3-line",
        color: "#f97316",
      },
    ],
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout disabled in dev mode");
  };

  return (
    <aside className="sidebar">
      {/* ============ MENU ============ */}
      <nav className="sidebar-menu">
        {sidebarSections.map((section) => (
          <div key={section.label} className="sidebar-section">
            <p className="sidebar-section-label">{section.label}</p>

            {section.items.map((item) => (
              <NavLink
                key={item.label}
                to={`/dashboard/admin/${item.path}`}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                end
              >
                <i
                  className={`ri ${item.icon}`}
                  style={{ color: item.color }}
                />
                <span className="sidebar-text">{item.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      {/* ============ FOOTER / PROFILE ============ */}
      <div className="sidebar-footer">
        <div
          className="user-info clickable"
          onClick={() => navigate("/dashboard/admin/profile")}
          title="View Profile"
        >
          <div className="user-avatar">S</div>

          <div>
            <p className="user-name">Admin User</p>
            <p className="user-role">System Administrator</p>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <i className="ri-logout-box-r-line" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;