import { useParams, useNavigate } from "react-router-dom";
import useTasks from "../Hooks/useTasks";

export default function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useTasks();

  const task = state.tasks.find(t => t.id === Number(id));

  if (!task) return <p className="m-4">Task not found</p>;

  return (
    <div className="container mt-4">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}
