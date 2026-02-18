import React, { useState } from "react";
import axios from "axios";
import "./Reports.css";

const reportTypes = [
  "Attendance",
  "Enrollment",
  "Financial",
  "Performance",
  "Custom",
];

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(reportTypes[0]);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setReportData(null);

    try {
      const response = await axios.post(
        "https://backenderp-production-6374.up.railway.app/api/admin/reports",
        {
          type: selectedReport,
          from: dateRange.from,
          to: dateRange.to,
        }
      );
      setReportData(response.data);
    } catch (err) {
      setError("Failed to generate report. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reports-page">
      <div className="reports-container">
        {/* Header */}
        <div className="reports-header">
          <h1>Reports & Analytics</h1>
          <p>
            Generate insights by selecting report type and date range.
          </p>
        </div>

        {/* Form */}
        <form className="report-form" onSubmit={handleGenerate}>
          <div className="form-group">
            <label>Report Type</label>
            <select
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
            >
              {reportTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>From</label>
            <input
              type="date"
              name="from"
              value={dateRange.from}
              onChange={(e) =>
                setDateRange({ ...dateRange, from: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>To</label>
            <input
              type="date"
              name="to"
              value={dateRange.to}
              onChange={(e) =>
                setDateRange({ ...dateRange, to: e.target.value })
              }
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate Report"}
          </button>
        </form>

        {/* Output */}
        <div className="report-output">
          {error && <p className="error-msg">{error}</p>}

          {reportData ? (
            <pre>{JSON.stringify(reportData, null, 2)}</pre>
          ) : (
            <p className="placeholder-text">
              Generated reports will appear here once implemented.
              Use the form above to select report type and date range.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;