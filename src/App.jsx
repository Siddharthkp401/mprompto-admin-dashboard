import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Tabs/Dashboard/Dashboard";
import Analytics from "./Tabs/Analytics/Analytics";
import Setup from "./Tabs/Setup/Setup";
import Admin from "./Tabs/Admin/Admin";
import Layout from "./components/Layout/Layout";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen min-w-[100dvw] bg-white">
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab === "dashboard" && <Dashboard setActiveTab={setActiveTab} />}
        {activeTab === "analytics" && <Analytics />}
        {activeTab === "setup" && <Setup />}
        {activeTab === "admin" && <Admin />}
      </Layout>
    </div>
  );
}

export default App;
