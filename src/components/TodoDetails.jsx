/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoCloseOutline } from "react-icons/io5";
import { replaceAll } from "../utils/replaceAll";

export const TodoDetails = ({
  handleSeeDetailsChange,
  title,
  desc,
  date,
  status,
  changeSatatus,
  index,
  handleDeleteTodo,
}) => {
  const deleteTodo = (index) => {
    console.log("clicked");
    handleDeleteTodo(index);
    handleSeeDetailsChange();
  };

  return (
    <div className="todo_details_div">
      <div>
        <h1>{title}</h1>
        <p>Description : {desc}</p>
        <p>
          Deadline :{" "}
          {replaceAll(replaceAll(JSON.stringify(date), '"', ""), "-", "/")}
        </p>
        <button className="close_button" onClick={handleSeeDetailsChange}>
          <IoCloseOutline style={{ fontSize: "26px" }} />
        </button>
      </div>
      <div className="details_options_div">
        <button onClick={() => deleteTodo(index)} className="delete_btn">
          DELETE
        </button>
        <button
          onClick={() => changeSatatus(index)}
          className={status ? "done_btn" : "undone_btn"}
        >
          {status ? "UN" : ""}
          DONE
        </button>
      </div>
    </div>
  );
};
