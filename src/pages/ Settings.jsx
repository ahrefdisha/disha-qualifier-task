import React, { useState, useEffect } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Settings
      </h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-200 text-lg font-medium">
            Dark Mode
          </span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 relative">
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 peer-checked:translate-x-5"></span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
