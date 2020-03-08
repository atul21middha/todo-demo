import {ADD_NEW_TASK, DELETE_TASK, GET_TASK_LIST, UPDATE_TASK_DETAILS} from "../constants/todo";

const initialState = {
  taskList: [],
  totalTasks: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_LIST:
      return {
        ...state,
        taskList: state.taskList,
        totalTasks: state.taskList.length,
      };

    case ADD_NEW_TASK:
      return {
        ...state,
        taskList: [action.payload, ...state.taskList],
        totalTasks: state.totalTasks + 1,
      };

    case UPDATE_TASK_DETAILS:
      return {
        ...state,
        taskList: state.taskList.map(task => task.id === action.payload.id ? action.payload : task)
      };

    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(task => task.id !== action.payload)
      };

    default:
      return state;
  }
};
