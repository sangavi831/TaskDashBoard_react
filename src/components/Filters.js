import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function Filters() {
  const { priority, dispatch } = useContext(TaskContext);

  return (
    <div className="filters">
      
      <select
        value={priority}
        onChange={(e) =>
          dispatch({
            type: "SET_PRIORITY",
            payload: e.target.value
          })
        }
      >
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}
