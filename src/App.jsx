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
import SyncData from "./Tabs/ManageCatalog/SyncData";
import ManageProducts from "./Tabs/ManageCatalog/ManageProducts";
import CurationQualityControl from "./Tabs/ManageCatalog/CurationQualityControl";

function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-[100dvw] bg-white">
        <Routes>
          <Route path="/" element={<Navigate to="/manage-catalog/sync" replace />} />
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
          <Route
            path="/manage-catalog/sync"
            element={
              <Layout activeTab="manage-catalog">
                <SyncData />
              </Layout>
            }
          />
          <Route
            path="/manage-catalog/manage-products"
            element={
              <Layout activeTab="manage-catalog">
                <ManageProducts />
              </Layout>
            }
          />
          <Route
            path="/manage-catalog/curation-quality-control"
            element={
              <Layout activeTab="manage-catalog">
                <CurationQualityControl />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
