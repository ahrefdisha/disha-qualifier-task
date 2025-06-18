import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Settings as SettingsIcon, User, Lock, Info, Moon, Sun } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  // Check localStorage theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLogout = () => {
    // localStorage.clear(); // Uncomment if needed
    navigate("/"); // Redirect to Login
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <SettingsIcon /> Settings
      </h1>

      <div className="space-y-4">
        <div className="flex items-center p-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl hover:shadow-md transition">
          <User className="text-blue-500 mr-4" />
          <span className="text-gray-700 dark:text-white font-medium">Account Information</span>
        </div>

        <div className="flex items-center p-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl hover:shadow-md transition">
          <Lock className="text-green-500 mr-4" />
          <span className="text-gray-700 dark:text-white font-medium">Privacy & Security</span>
        </div>

        <div className="flex items-center p-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl hover:shadow-md transition">
          <Info className="text-yellow-500 mr-4" />
          <span className="text-gray-700 dark:text-white font-medium">App Info</span>
        </div>

        {/* 🌗 Dark/Light Toggle */}
        <div
          className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl hover:shadow-md transition cursor-pointer"
          onClick={handleToggleTheme}
        >
          <div className="flex items-center">
            {isDark ? (
              <Sun className="text-yellow-400 mr-4" />
            ) : (
              <Moon className="text-gray-600 mr-4" />
            )}
            <span className="text-gray-700 dark:text-white font-medium">
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
          <span className="text-sm text-blue-500">{isDark ? "ON" : "OFF"}</span>
        </div>
      </div>

      {/* 🔴 Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-10 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Settings;
