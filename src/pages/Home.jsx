import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ navigation ke liye
import BottomNav from "../components/BottomNav";
import TopNavbar from "../components/TopNavbar";
import { FaTasks, FaEnvelope, FaBell, FaCog } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Tasks",
      icon: <FaTasks className="text-2xl text-white" />,
      count: 12,
      bg: "bg-blue-500",
      path: "/tasks", // ✅ path added
    },
    {
      title: "Messages",
      icon: <FaEnvelope className="text-2xl text-white" />,
      count: 5,
      bg: "bg-green-500",
      path: "/messages",
    },
    {
      title: "Notifications",
      icon: <FaBell className="text-2xl text-white" />,
      count: 3,
      bg: "bg-yellow-500",
      path: "/notifications",
    },
    {
      title: "Settings",
      icon: <FaCog className="text-2xl text-white" />,
      count: 1,
      bg: "bg-purple-500",
      path: "/settings",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <TopNavbar />

      <div className="flex-1 p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Welcome to Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)} // ✅ click to navigate
              className={`p-6 rounded-xl shadow-md text-white ${card.bg} flex justify-between items-center cursor-pointer hover:opacity-90 transition`}
            >
              <div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-3xl font-bold">{card.count}</p>
              </div>
              {card.icon}
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
