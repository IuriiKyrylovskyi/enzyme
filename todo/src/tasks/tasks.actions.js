import * as gateway from "../gateway";
import { tasksListSelector } from "./tasks.selectors";

export const TASKS_LIST_RECEIVED = "TASKS/TASKS_LIST_RECEIVED";

export const tasksListRecieved = (tasks) => {
  return {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasks,
    },
  };
};

export const getTasksList = () => {
  return function (dispatch) {
    gateway.fetchTasksList().then((tasks) => dispatch(tasksListRecieved(tasks)));
  };
};

export const updateTask = (taskId) => {
  return function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find((task) => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    gateway.updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()));
  };
};

export const deleteTask = (taskId) => {
  return function (dispatch) {
    gateway.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};

export const createTask = (text) => {
  return function (dispatch) {
    gateway
      .createTask({
        text,
        done: false,
        createdAt: new Date().toISOString(),
      })
      .then(() => dispatch(getTasksList()));
  };
};
