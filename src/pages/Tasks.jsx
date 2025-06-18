import React, { useState } from "react";

const TaskCard = ({ title, description, status }) => (
  <div className="bg-white p-4 rounded-xl shadow-md mb-4 border hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
    <span
      className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
        status === "Completed"
          ? "bg-green-100 text-green-600"
          : "bg-yellow-100 text-yellow-600"
      }`}
    >
      {status}
    </span>
  </div>
);

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React assignment",
      description: "Finish the dashboard layout design",
      status: "Pending",
    },
    {
      id: 2,
      title: "Check Emails",
      description: "Reply to internship follow-ups",
      status: "Completed",
    },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  const [search, setSearch] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.description) return;

    const updatedTasks = [
      ...tasks,
      { ...newTask, id: Date.now() }
    ];

    setTasks(updatedTasks);
    setNewTask({ title: "", description: "", status: "Pending" });
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">My Tasks</h1>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* New Task Form */}
      <form
        onSubmit={handleAddTask}
        className="mb-6 bg-white p-4 rounded-xl shadow border"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Add New Task
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) =>
            setNewTask({ ...newTask, title: e.target.value })
          }
          className="w-full mb-3 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="w-full mb-3 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={newTask.status}
          onChange={(e) =>
            setNewTask({ ...newTask, status: e.target.value })
          }
          className="w-full mb-3 px-3 py-2 border rounded-md"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </form>

      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))
      ) : (
        <p className="text-gray-500">No tasks found.</p>
      )}
    </div>
  );
};

export default Tasks;
