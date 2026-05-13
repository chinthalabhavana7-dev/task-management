import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };
  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };
  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-5">Task Manager</h1>
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Enter task..."
          className="p-2 border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}/>
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>
      <div className="flex gap-3 mb-5">
        <button
          onClick={() => setFilter("all")}
          className="px-3 py-1 bg-gray-300 rounded"
        >All</button>
        <button
          onClick={() => setFilter("completed")}
          className="px-3 py-1 bg-green-500 rounded">Completed</button>
        <button
          onClick={() => setFilter("pending")}
          className="px-3 py-1 bg-yellow-500 rounded"
        > Pending</button>
      </div>
      <div className="w-full max-w-md">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow">
            <div className="flex flex-col gap-1">
              <span
                className={
                  task.completed ? "line-through text-gray-500" : ""
                }
              >
                {task.text}
              </span>
              <div className="flex gap-4">
                <label className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}/>
                  <span className="text-green-600 text-sm">Completed</span>
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={!task.completed}
                    onChange={() => toggleTask(task.id)}/>
                  <span className="text-yellow-600 text-sm">
                    Pending
                  </span>
                </label>
              </div>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 font-semibold">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}