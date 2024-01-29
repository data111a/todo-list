/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { replaceAll } from "../utils/replaceAll";

export const AddTodo = ({ handleAddTodoChange, handleTodoAdd }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const [todoDeadLine, setTodoDeadLine] = useState();
  const [descError, setDescErrorError] = useState("");
  const [titleError, setTitleError] = useState("");

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= 66) {
      if (input.length === 66) {
        setTitleError("Title is full!");
      } else {
        setTitleError("");
      }
      setTodoTitle(e.target.value);
    }
  };

  const handleDescChange = (e) => {
    const input = e.target.value;
    if (input.length <= 255) {
      if (input.length === 255) {
        setDescErrorError("Description is full!");
      } else {
        setDescErrorError("");
      }
      setTodoDesc(e.target.value);
    }
  };

  const handleDateChange = (event) => {
    setTodoDeadLine(event.target.value);
  };

  const checkAndGo = (title, desc, date) => {
    if (title === "") {
      setTitleError("You have to fill title!");
    } else {
      handleTodoAdd(title, desc, date);
      handleAddTodoChange();
    }
  };

  return (
    <>
      <div className="add_todo_title_div">
        <div>
          <h1>Add Todo</h1>
          <button className="close_button" onClick={handleAddTodoChange}>
            <IoCloseOutline style={{ fontSize: "26px" }} />
          </button>
          <div className="todo_input_title_div">
            <p>Title</p>
            <p
              style={{
                color: `${todoTitle.length !== 66 ? "white" : "#FF4545"}`,
              }}
            >
              {todoTitle.length}/66
            </p>
            <input
              placeholder="Todo title"
              className={`add_todo_title ${
                titleError !== "" ? "error_inp" : ""
              }`}
              type="text"
              name="todo_title"
              value={todoTitle}
              onChange={(e) => handleTitleChange(e)}
            />
            <p className="error_message">{titleError}</p>
          </div>
        </div>
        <div className="add_todo_desc_div">
          <p>Description (optional)</p>
          <p
            style={{
              color: `${todoDesc.length !== 255 ? "white" : "#FF4545"}`,
            }}
          >
            {todoDesc.length}/255
          </p>
          <textarea
            className={`add_todo_desc ${descError !== "" ? "error_inp" : ""}`}
            value={todoDesc}
            onChange={(e) => handleDescChange(e)}
            placeholder="Todo description..."
            cols="40"
            rows="5"
          ></textarea>
          <p className="error_message">{descError}</p>
        </div>
        <div className="date-input-container">
          <label htmlFor="dateInput">Select a date:</label>
          <input
            type="date"
            id="dateInput"
            value={todoDeadLine}
            onChange={handleDateChange}
            className="date-input"
          />
          <p>Selected Date: {replaceAll(todoDeadLine, "-", "/")}</p>
        </div>
      </div>
      <button
        className="add_btn"
        onClick={() => checkAndGo(todoTitle, todoDesc, todoDeadLine)}
      >
        ADD
      </button>
    </>
  );
};
