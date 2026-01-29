export function taskReducer(state, action) {
  switch (action.type) {

    case "LOADING":
      return { ...state, loading: true };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload, 
      };
    case "SET_PRIORITY":
      return {
        ...state,
        priority: action.payload,
      };
    case "DELETE_TASK":
     return {
    ...state,
    tasks: state.tasks.filter(task => task.id !== action.payload),
  };


    case "SET_TASKS":
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    case "UPDATE_TASK":
     return {
        ...state,
        tasks: state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
    ),
  };


    default:
      return state;
  }
}
