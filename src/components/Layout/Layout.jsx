import React, { useState } from "react";
import { CiSearch as Search } from "react-icons/ci";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children, activeTab, setActiveTab }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="flex-1 flex flex-col">
        <header className="border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-medium">
                {activeTab === "dashboard"
                  ? "Dashboard"
                  : activeTab === "analytics"
                  ? "Analytics"
                  : activeTab === "manage-catalog"
                  ? "Manage Catalog"
                  : activeTab === "setup"
                  ? "Setup"
                  : "Admin"}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-white font-bold p-1">
                <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
