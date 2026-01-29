import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function StatsCards() {
  const { tasks = [] } = useContext(TaskContext);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="dashboard-cards">
      <div className="card total">
        <h4>Total</h4>
        <p>{total}</p>
      </div>
      <div className="card completed">
        <h4>Completed</h4>
        <p>{completed}</p>
      </div>
      <div className="card pending">
        <h4>Pending</h4>
        <p>{pending}</p>
      </div>
    </div>
  );
}

