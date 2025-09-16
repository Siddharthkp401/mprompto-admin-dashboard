"use client";

import { useState } from "react";
// import { Search, Download, ArrowLeft, ChevronUp } from "react-feather";
import { FiTool as Search } from "react-icons/fi";
import Card from "../../../../components/ui/Card";
import Select from "../../../../components/ui/Select";
import Button from "../../../../components/ui/Button";

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    isActive: true,
    permissions: ["CATALOG", "NUDGE", "ANALYTICS"],
    role: "ADMIN",
    roleColor: "blue",
  },
  {
    id: 2,
    name: "Jay Dalwadi",
    email: "jay@gmail.com",
    isActive: true,
    permissions: ["CATALOG", "ANALYTICS"],
    role: "ADMIN",
    roleColor: "blue",
  },
  {
    id: 3,
    name: "Rutul Patel",
    email: "rutulpatel@gmail.com",
    isActive: true,
    permissions: ["CATALOG", "NUDGE", "ANALYTICS"],
    role: "MEMBER",
    roleColor: "orange",
  },
  {
    id: 4,
    name: "Sidhdarth",
    email: "sidhdarth@gmail.com",
    isActive: false,
    permissions: ["CATALOG", "ANALYTICS"],
    role: "ADMIN",
    roleColor: "blue",
  },
];

export default function TeamUserManagement({ onBack }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [userRole, setUserRole] = useState("User Role");
  const [permission, setPermission] = useState("Permission");
  const [rowsPerPage, setRowsPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);

  const stats = [
    { label: "Total Users", value: "25" },
    { label: "New Users", value: "03" },
    { label: "Active Users", value: "240" },
    { label: "In-Active Users", value: "02" },
  ];

  const toggleUserStatus = (userId) => {
    // Handle toggle user status
    console.log("Toggle user status for:", userId);
  };

  const getPermissionBadge = (permission, isActive) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    if (isActive) {
      switch (permission) {
        case "CATALOG":
          return `${baseClasses} bg-green-100 text-green-800`;
        case "NUDGE":
          return `${baseClasses} bg-green-100 text-green-800`;
        case "ANALYTICS":
          return `${baseClasses} bg-green-100 text-green-800`;
        default:
          return `${baseClasses} bg-gray-100 text-gray-600`;
      }
    } else {
      return `${baseClasses} bg-gray-100 text-gray-400`;
    }
  };

  const getRoleBadge = (role, roleColor) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    if (roleColor === "blue") {
      return `${baseClasses} bg-blue-100 text-blue-800`;
    } else if (roleColor === "orange") {
      return `${baseClasses} bg-orange-100 text-orange-800`;
    }
    return `${baseClasses} bg-gray-100 text-gray-600`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700"
          >
            <Search className="h-5 w-5" />
          </button>
          <div>
            <div className="text-sm text-gray-500">
              <span className="text-blue-500">Admin</span> / Team & User
              Management
            </div>
          </div>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          + Invite User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          options={[
            { value: "User Role", label: "User Role" },
            { value: "Admin", label: "Admin" },
            { value: "Member", label: "Member" },
          ]}
          className="w-full md:w-40"
        />
        <Select
          value={permission}
          onChange={(e) => setPermission(e.target.value)}
          options={[
            { value: "Permission", label: "Permission" },
            { value: "Catalog", label: "Catalog" },
            { value: "Nudge", label: "Nudge" },
            { value: "Analytics", label: "Analytics" },
          ]}
          className="w-full md:w-40"
        />
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          <Search className="h-4 w-4 mr-2" />
          CSV
        </Button>
      </div>

      {/* Users Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    User Name
                    <Search className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Turn Off Toggle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User Roll
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userData.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 underline cursor-pointer">
                      {user.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-blue-500 underline cursor-pointer">
                      {user.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={user.isActive}
                        onChange={() => toggleUserStatus(user.id)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900">
                        {user.isActive ? "ON" : "OFF"}
                      </span>
                    </label>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {["CATALOG", "NUDGE", "ANALYTICS"].map((perm) => (
                        <span
                          key={perm}
                          className={getPermissionBadge(
                            perm,
                            user.permissions.includes(perm) && user.isActive
                          )}
                        >
                          {user.permissions.includes(perm) && user.isActive
                            ? "✓"
                            : ""}{" "}
                          {perm}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getRoleBadge(user.role, user.roleColor)}>
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-2">Rows per page:</span>
            <Select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(e.target.value)}
              options={[
                { value: "10", label: "10" },
                { value: "25", label: "25" },
                { value: "50", label: "50" },
              ]}
              className="w-20"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
              {"<"}
            </button>
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 text-sm rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <span className="px-3 py-1 text-sm text-gray-500">...</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
