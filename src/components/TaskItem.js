export default function TaskItem({ task, onToggle, onDelete }) {
  const priorityColors = {
    high: "#dc2626",
    medium: "#f59e0b",
    low: "#10b981",
  };

  return (
    <div className={`task-item ${task.completed ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id, !task.completed)}
      />
      <span
        style={{
          background: priorityColors[task.priority] || "#6b7280",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "bold",
          marginLeft: "8px",
        }}
      >
        {task.priority}
      </span>

      <span style={{ marginLeft: "8px" }}>{task.text}</span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          marginLeft: "auto",
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}


