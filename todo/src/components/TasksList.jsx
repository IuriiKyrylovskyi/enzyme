import React from "react";
import { PropTypes } from "prop-types";
import Task from "./Task";

const TasksList = ({ tasks, handleStatusChange, handleTaskDelete }) => {
  // const sortedTasks = tasks.slice().sort((a, b) => a.done - b.done);

  return (
    <ul className="list">
      {tasks.length > 0 &&
        tasks.map((task) => {
          const { id, done, text } = task;

          return (
            <Task
              key={id}
              id={id}
              done={done}
              text={text}
              handleStatusChange={handleStatusChange}
              handleTaskDelete={handleTaskDelete}
              //
            />
          );
        })}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  handleStatusChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

export default TasksList;
