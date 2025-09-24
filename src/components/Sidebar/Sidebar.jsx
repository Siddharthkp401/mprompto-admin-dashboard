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
import { TbUserStar as UserStarIcon } from "react-icons/tb";
import { HiOutlineSquares2X2 as AppearanceThemeIcon } from "react-icons/hi2";
import { HiOutlineLightBulb as AssistedKnowledgeIcon } from "react-icons/hi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
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
    ],
  },
  {
    id: "manage-experience",
    name: "Manage Experience",
    icon: UserStarIcon,
    path: "/manage-experience",
    children: [
      {
        id: "appearance-theme",
        name: "Appearance & Theme",
        icon: AppearanceThemeIcon,
        path: "/manage-experience/appearance-theme",
      },
      {
        id: "assisted-knowledge",
        name: "Assisted Knowledge",
        icon: AssistedKnowledgeIcon,
        path: "/manage-experience/assisted-knowledge",
      },
    ],
  },
  // { id: "setup", name: "Setup", icon: CiSettings, path: "/setup" },
  // { id: "admin", name: "Admin", icon: LuSquareUserRound, path: "/admin" },
];

export default function Sidebar({ collapsed, toggleSidebar }) {
  const [hovering, setHovering] = useState(false);
  const location = useLocation();

  // Initialize expanded menus with currently active children
  const [expandedMenus, setExpandedMenus] = useState(() => {
    const initialExpanded = {};
    navItems.forEach((item) => {
      if (item.children) {
        const hasActiveChild = item.children.some(
          (child) => location.pathname === child.path
        );
        if (hasActiveChild) {
          initialExpanded[item.id] = true;
        }
      }
    });
    return initialExpanded;
  });

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

  return (
    <div
      className={`max-w-[260px] bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out`}
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
      <nav className="flex-1 pt-4 overflow-hidden px-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.children ? (
                <div
                  className={
                    isAnyChildActive(item) ? "bg-black rounded-lg" : "bg-[#F9F9F9]"
                  }
                >
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className={`w-full flex items-center justify-between gap-3 px-2 py-3 text-sm font-medium rounded-lg ${
                      location.pathname.startsWith(item.path) ||
                      isAnyChildActive(item)
                        ? "bg-[#595C5C00] text-white"
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
                      className={`ml-3 mt-1 space-y-1 ${
                        isAnyChildActive(item) ? "bg-black pb-2" : ""
                      }`}
                    >
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            to={child.path}
                            className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                              location.pathname === child.path
                                ? "bg-[#595C5C] text-white"
                                : "text-gray-500 hover:bg-[#595C5C] transition-colors duration-300"
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
                  className={`flex items-center px-6 py-3 text-sm font-medium rounded-lg ${
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

      {/* Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
          {/* Profile Picture */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">E</span>
          </div>

          {/* Profile Info */}
          {isExpanded && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                Evano
              </p>
              <p className="text-xs text-gray-500 truncate">Project Manager</p>
            </div>
          )}

          {/* Dropdown Icon */}
          {isExpanded && (
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus["profile"] ? "rotate-180" : ""
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
        </div>
      </div>
    </div>
  );
}
