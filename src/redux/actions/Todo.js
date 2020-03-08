import {ADD_NEW_TASK, DELETE_TASK, GET_TASK_LIST, UPDATE_TASK_DETAILS} from "../constants/todo";

export const getTaskList = () => {
  return {
    type: GET_TASK_LIST
  }
};

export const addNewTask = (task) => {
  return {
    type: ADD_NEW_TASK,
    payload: task
  }
};

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK_DETAILS,
    payload: task
  }
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId
  }
};


