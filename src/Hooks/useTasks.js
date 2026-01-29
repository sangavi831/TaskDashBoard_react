import { useContext, useMemo } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function useTasks() {
  const context = useContext(TaskContext);

  const filteredTasks = useMemo(() => {
    const tasks = context?.tasks || [];
    const search = context?.search || "";
    const priority = context?.priority || "all";

    return tasks.filter((task) => {
      const text = task.text || "";

      const matchText = text
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchPriority =
        priority === "all" || task.priority === priority;

      return matchText && matchPriority;
    });
  }, [context]);

  return { tasks: filteredTasks };
}
