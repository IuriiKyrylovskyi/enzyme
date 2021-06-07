import React, { useState } from "react";
import { PropTypes } from "prop-types";

const CreateTaskInput = ({ onCreate }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCreate = () => {
    onCreate(inputText);
    setInputText("");
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={inputText}
        onChange={handleChange}
        //
      />
      <button className="btn create-task__btn" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;
