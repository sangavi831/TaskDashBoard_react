import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskItem from "./TaskItem";
import { deleteTask, toggleTask } from "../api/taskApi";

export default function TaskList() {
  const { tasks = [], dispatch, search = "", priority = "all" } = useContext(TaskContext);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      dispatch({ type: "DELETE_TASK", payload: id });
    } catch (err) {
      alert(err.message);
    }
  };

  const handleToggle = async (id, completed) => {
    try {
      const updated = await toggleTask(id, completed);
      dispatch({ type: "UPDATE_TASK", payload: updated });
    } catch (err) {
      alert(err.message);
    }
  };

  const filtered = tasks
    .filter((t) => t.text.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => (priority === "all" ? true : t.priority === priority));

  if (!filtered.length) return <p>No tasks found</p>;

  return (
    <div>
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} />
      ))}
    </div>
  );
}
