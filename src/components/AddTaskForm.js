import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { addTask } from "../api/taskApi";

export default function AddTaskForm() {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const { dispatch } = useContext(TaskContext);

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const savedTask = await addTask({
      text,
      completed: false,
      priority,
    });

    dispatch({ type: "ADD_TASK", payload: savedTask });

    setText("");
    setPriority("medium");
  };

  return (
    <form onSubmit={submit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a task..." />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button>Add</button>
    </form>
  );
}

