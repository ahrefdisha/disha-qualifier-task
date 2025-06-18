import React, { useState } from "react";

const NotificationCard = ({ title, message, time }) => (
  <div className="bg-white p-4 rounded-xl shadow mb-3 border hover:shadow-md transition">
    <h3 className="text-md font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{message}</p>
    <p className="text-xs text-gray-400 mt-1">{time}</p>
  </div>
);

const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "Task Completed",
      message: "You completed the ‘Update Resume’ task.",
      time: "Just now",
    },
    {
      id: 2,
      title: "New Message",
      message: "You have 2 new messages from recruiter.",
      time: "10 minutes ago",
    },
    {
      id: 3,
      title: "Reminder",
      message: "Don't forget to attend the meeting at 5 PM.",
      time: "1 hour ago",
    },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Notifications</h1>
      {notifications.map((note) => (
        <NotificationCard
          key={note.id}
          title={note.title}
          message={note.message}
          time={note.time}
        />
      ))}
    </div>
  );
};

export default Notifications;
