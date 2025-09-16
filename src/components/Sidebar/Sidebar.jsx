import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FiTool } from "react-icons/fi";
import { HiOutlineServer } from "react-icons/hi2";
import { RiMenu2Fill } from "react-icons/ri";
import { LuSquareUserRound } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: HiOutlineServer,
    path: "/dashboard",
  },
  { id: "analytics", name: "Analytics", icon: FiTool, path: "/analytics" },
  { id: "setup", name: "Setup", icon: CiSettings, path: "/setup" },
  { id: "admin", name: "Admin", icon: LuSquareUserRound, path: "/admin" },
];

export default function Sidebar({ collapsed, toggleSidebar }) {
  const [hovering, setHovering] = useState(false);
  const location = useLocation();

  // Determine if sidebar should be expanded
  const isExpanded = !collapsed || hovering;

  // Width class based on sidebar state
  const widthClass = isExpanded ? "w-48" : "w-16";

  return (
    <div
      className={`${widthClass} bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="p-4 border-b border-gray-200 flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-1 bg-transparent hover:bg-gray-100 transition-colors"
          aria-label="Toggle sidebar"
        >
          <RiMenu2Fill className="h-5 w-5" />
        </button>
        {isExpanded && (
          <div className="font-bold text-xl ml-2 transition-opacity duration-300">
            BrandName
          </div>
        )}
      </div>
      <nav className="flex-1 pt-4 overflow-hidden">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  location.pathname.startsWith(item.path)
                    ? "bg-gray-800 text-white"
                    : "text-gray-500 hover:bg-gray-100 transition-colors duration-300"
                } `}
                title={!isExpanded ? item.name : ""}
              >
                <item.icon
                  className={`h-5 w-5 ${isExpanded ? "mr-3" : "mx-auto"}`}
                />
                {isExpanded && (
                  <span className="transition-opacity duration-300">
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
