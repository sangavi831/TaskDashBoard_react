import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { addTask } from "../api/taskApi";
import { useNavigate } from "react-router-dom";

export default function AddTaskPage() {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { dispatch } = useContext(TaskContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Task cannot be empty");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const savedTask = await addTask({
        text,
        completed: false,
        priority,
      });

      dispatch({ type: "ADD_TASK", payload: savedTask });

      setText("");
      setPriority("medium");
      setLoading(false);

      // Redirect to home after 1 second
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="add-task-container">
        <h1> Add New Task</h1>

        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={submit} className="add-task-form">
          <div className="form-group">
            <label htmlFor="task-input">Task Description</label>
            <input
              id="task-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your task here..."
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="priority-select">Priority Level</label>
            <select
              id="priority-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="form-select"
            >
              <option value="low"> Low</option>
              <option value="medium"> Medium</option>
              <option value="high"> High</option>
            </select>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Adding..." : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
}
