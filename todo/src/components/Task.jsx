import React from "react";
import { PropTypes } from "prop-types";

const Task = ({ id, done, text, handleStatusChange, handleTaskDelete }) => {
  const listItemClass = `list-item ${done ? "list-item_done" : ""}`;

  return (
    <li className={listItemClass}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => {
          handleStatusChange(id);
        }}

        //
      />
      {text}
      <button
        className="list-item__delete-btn"
        onClick={() => {
          handleTaskDelete(id);
        }}
        //
      />
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool,
  text: PropTypes.string,
  handleStatusChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

// Task.defaultProps = {
//   done: false,
//   text: "",
// };

export default Task;
