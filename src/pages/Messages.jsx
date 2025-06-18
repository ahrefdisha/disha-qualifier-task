import React from "react";

const messages = [
  {
    name: "Avi Singh",
    lastMessage: "Got it! Will do the changes.",
    time: "2:15 PM",
    unread: true,
  },
  {
    name: "Maa Laxmi Store",
    lastMessage: "Order delivered successfully!",
    time: "1:30 PM",
    unread: false,
  },
  {
    name: "Team Applied",
    lastMessage: "Meeting rescheduled to 5PM.",
    time: "Yesterday",
    unread: true,
  },
];

const Messages = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Messages</h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Chat List */}
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex justify-between items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition ${
              msg.unread ? "border-l-4 border-blue-500" : ""
            }`}
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{msg.name}</h2>
              <p className="text-sm text-gray-500">{msg.lastMessage}</p>
            </div>
            <div className="text-sm text-gray-400 text-right">
              <p>{msg.time}</p>
              {msg.unread && (
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-1"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
