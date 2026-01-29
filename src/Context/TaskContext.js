import { createContext, useReducer, useEffect } from "react";
import { taskReducer } from "../Reducer/taskReducer";
import { fetchTasks } from "../api/taskApi";

export const TaskContext = createContext();

const initialState = {
  tasks: [],
  search: "",   
  priority: "all",
  loading: false,
  error: null,
};

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    async function loadTasks() {
      dispatch({ type: "LOADING" });
      try {
        const data = await fetchTasks();
        dispatch({ type: "SET_TASKS", payload: data });
      } catch (err) {
        dispatch({ type: "ERROR", payload: err.message });
      }
    }
    loadTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
