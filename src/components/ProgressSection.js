import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function ProgressSection() {
  const { tasks = [] } = useContext(TaskContext);

  const total = tasks.length || 1;
  const completed = tasks.filter(t => t.completed).length;
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="progress-section">
      <h3>Task Progress</h3>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <span>{completed} of {total} completed ({percentage}%)</span>
    </div>
  );
}

