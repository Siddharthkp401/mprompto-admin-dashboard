import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FiTool } from "react-icons/fi";
import { HiOutlineServer } from "react-icons/hi2";
import { RiMenu2Fill } from "react-icons/ri";
import { LuSquareUserRound } from "react-icons/lu";
import {
  MdOutlineSync,
  MdOutlineInventory,
  MdOutlineCheckCircle,
} from "react-icons/md";
import { IoSyncSharp as SyncIcon } from "react-icons/io5";
import { BsBox as ManageProductsIcon } from "react-icons/bs";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { TbChecks as CurationIcon } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  // {
  //   id: "dashboard",
  //   name: "Dashboard",
  //   icon: HiOutlineServer,
  //   path: "/dashboard",
  // },
  // { id: "analytics", name: "Analytics", icon: FiTool, path: "/analytics" },
  {
    id: "manage-catalog",
    name: "Manage Catalog",
    icon: MdOutlineInventory,
    path: "/manage-catalog",
    children: [
      {
        id: "sync",
        name: "Sync",
        icon: SyncIcon,
        path: "/manage-catalog/sync",
      },
      {
        id: "manage_products",
        name: "Manage Products",
        icon: ManageProductsIcon,
        path: "/manage-catalog/manage-products",
      },
      {
        id: "curation_quality_control",
        name: "Curation & Quality Control",
        icon: CurationIcon,
        path: "/manage-catalog/curation-quality-control",
      },
    ],
  },
  // { id: "setup", name: "Setup", icon: CiSettings, path: "/setup" },
  // { id: "admin", name: "Admin", icon: LuSquareUserRound, path: "/admin" },
];

export default function Sidebar({ collapsed, toggleSidebar }) {
  const [hovering, setHovering] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const location = useLocation();

  // Determine if sidebar should be expanded
  const isExpanded = !collapsed || hovering;

  // Check if any child of a menu item is active
  const isAnyChildActive = (item) => {
    if (!item.children) return false;
    return item.children.some((child) => location.pathname === child.path);
  };

  const toggleMenu = (menuId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

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
              {item.children ? (
                <div
                  className={
                    isAnyChildActive(item) ? "bg-black rounded-lg" : ""
                  }
                >
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg ${
                      location.pathname.startsWith(item.path) ||
                      isAnyChildActive(item)
                        ? "bg-[#3D4344] text-white"
                        : "text-gray-500 hover:bg-gray-100 transition-colors duration-300"
                    }`}
                    title={!isExpanded ? item.name : ""}
                  >
                    <div className="flex items-center">
                      <item.icon
                        className={`h-5 w-5 ${isExpanded ? "mr-3" : "mx-auto"}`}
                      />
                      {isExpanded && (
                        <span className="transition-opacity duration-300">
                          {item.name}
                        </span>
                      )}
                    </div>
                    {isExpanded && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedMenus[item.id] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                  {isExpanded && expandedMenus[item.id] && (
                    <ul
                      className={`ml-4 mt-1 space-y-1 ${
                        isAnyChildActive(item) ? "bg-black pb-2" : ""
                      }`}
                    >
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            to={child.path}
                            className={`flex items-center px-4 py-2 text-sm rounded-lg ${
                              location.pathname === child.path
                                ? "bg-[#595C5C] text-white"
                                : "text-gray-500 hover:bg-gray-100 transition-colors duration-300"
                            }`}
                          >
                            <child.icon className="h-4 w-4 mr-3" />
                            <span>{child.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
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
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
