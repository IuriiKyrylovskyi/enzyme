import { TASKS_LIST_RECEIVED } from "./tasks.actions";

const initState = {
  tasksList: [],
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECEIVED: {
      return {
        ...state,
        tasksList: action.payload.tasks,
      };
    }
    default: {
      return state;
    }
  }
};

export default tasksReducer;
