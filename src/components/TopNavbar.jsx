import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs"; // 🌙 Toggle Icons
import { toggleTheme } from "../utils/theme"; // 🌙 Theme toggle function

const TopNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // redirect to login
  };

  const isDark = document.documentElement.classList.contains("dark");

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-900 px-6 py-4 shadow-md">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
      <div className="flex items-center gap-4">
        {/* 🌙 Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-yellow-300 text-xl hover:scale-110 transition"
        >
          {isDark ? <BsSun /> : <BsMoon />}
        </button>

        {/* 👤 Profile image */}
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />

        {/* 🔴 Logout */}
        <button
          onClick={handleLogout}
          className="text-red-500 hover:text-red-700 transition flex items-center gap-1"
        >
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
