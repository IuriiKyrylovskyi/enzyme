// https://www.mockapi.io/projects/60a936bc20a6410017306e80
const baseUrl = "https://60a936bc20a6410017306e7f.mockapi.io/api/v1/tasks";

export const fetchTasksList = () => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to fetch");
  });
};

export const createTask = (newTaskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newTaskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedTaskData),
  }).then((response) => {
    if (!response) {
      throw new Error("Failed to update task");
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
};
