import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function SearchBar() {
  const { dispatch, search = "" } = useContext(TaskContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />
    </div>
  );
}



