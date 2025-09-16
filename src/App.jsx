import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./Tabs/Dashboard/Dashboard";
import Analytics from "./Tabs/Analytics/Analytics";
import Setup from "./Tabs/Setup/Setup";
import Admin from "./Tabs/Admin/Admin";
import Layout from "./components/Layout/Layout";
import BrandAndProfile from "./Tabs/Admin/components/BrandAndProfile";
import TeamUserManagement from "./Tabs/Admin/components/TeamAndUserManagement";

function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-[100dvw] bg-white">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route
            path="/dashboard"
            element={
              <Layout activeTab="dashboard">
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/analytics"
            element={
              <Layout activeTab="analytics">
                <Analytics />
              </Layout>
            }
          />
          <Route
            path="/setup"
            element={
              <Layout activeTab="setup">
                <Setup />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout activeTab="admin">
                <Admin />
              </Layout>
            }
          />
          <Route
            path="/admin/brand-profile"
            element={
              <Layout activeTab="admin">
                <BrandAndProfile />
              </Layout>
            }
          />
          <Route
            path="/admin/team-user-management"
            element={
              <Layout activeTab="admin">
                <TeamUserManagement />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
