import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const TopNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Yahan agar tum session ya token use kar rahi ho toh clear kar sakti ho
    navigate("/"); // redirect to login
  };

  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
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
