import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import * as tasksAction from "../tasks/tasks.actions";
import { sortedTasksListSelector } from "../tasks/tasks.selectors";
import TasksList from "./TasksList";
import CreateTaskInput from "./CreateTaskInput";

const TodoList = ({ tasksList, getTasksList, updateTask, deleteTask, createTask }) => {
  useEffect(() => {
    getTasksList();
  }, [getTasksList]);

  return (
    <div>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput onCreate={createTask} />
        <TasksList
          tasks={tasksList}
          handleStatusChange={updateTask}
          handleTaskDelete={deleteTask}
          //
        />
      </main>
    </div>
  );
};

TodoList.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.shape()),
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    tasksList: sortedTasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

export default connect(mapState, mapDispatch)(TodoList);
