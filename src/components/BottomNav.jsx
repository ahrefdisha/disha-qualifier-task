import React from "react";
import { useNavigate } from "react-router-dom";
import { ListTodo, MessageCircle, Settings, Bell } from "lucide-react";

const BottomNav = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: <ListTodo size={24} />, path: "/tasks" },
    { icon: <MessageCircle size={24} />, path: "/messages" },
    { icon: <Settings size={24} />, path: "/settings" },
    { icon: <Bell size={24} />, path: "/notifications" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center h-16 border-t rounded-t-xl">
      {navItems.map((item, index) => (
        <button
          key={index}
          className="flex flex-col items-center text-gray-600 hover:text-blue-500 transition"
          onClick={() => navigate(item.path)}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
