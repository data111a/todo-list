/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegTrashAlt, FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { TodoDetails } from "./TodoDetails";
import { replaceAll } from "../utils/replaceAll";

export const Todo = ({
  day,
  month,
  year,
  title,
  desc,
  date,
  doneStatus,
  index,
  changeSatatus,
  deleteTodo,
}) => {
  const [seeDetails, setSeeDetails] = useState(false);

  const handleSeeDetailsChange = () => {
    console.log("clicked");
    setSeeDetails(!seeDetails);
  };

  console.log(month);

  const todoYear = date.slice(0, 4);
  const todoMonth = date.slice(5, 7);
  const todoDay = date.slice(8, 10);

  const yearLeft = todoYear - year;
  const monthLeft = todoMonth - month + yearLeft * 12;
  const daysLeft = todoDay - day + monthLeft * 30;

  return (
    <>
      <div className={`todo_component_div ${seeDetails && "inactive_todo"}`}>
        <div className="todo_title_div">
          <h3 className="title" onClick={handleSeeDetailsChange}>
            {title}
          </h3>
          <p>
            Deadline : {replaceAll(date, "-", "/")}{" "}
            {!doneStatus ? (
              <span
                className={`days_left ${daysLeft <= 0 ? "error_message" : ""}`}
              >
                (Left : {daysLeft > 0 ? daysLeft : 0} day/days)
              </span>
            ) : (
              <span className="todo_done">(Done)</span>
            )}
          </p>
          {/* <p className="days_left">(Left : {daysLeft})</p> */}
        </div>
        <div className="todo_status_div">
          {doneStatus ? (
            <FaCheckCircle
              style={{ color: "#20EEB0" }}
              onClick={() => changeSatatus(index)}
            />
          ) : (
            <FaRegCheckCircle
              style={{ color: "#20EEB0" }}
              onClick={() => changeSatatus(index)}
            />
          )}
          <FaRegTrashAlt
            onClick={() => deleteTodo(index)}
            style={{ color: "#FF4545" }}
          />
        </div>
      </div>
      {seeDetails ? (
        <div className={"overlay"}>
          <TodoDetails
            handleSeeDetailsChange={handleSeeDetailsChange}
            title={title}
            desc={desc}
            date={date}
            status={doneStatus}
            changeSatatus={changeSatatus}
            index={index}
            handleDeleteTodo={deleteTodo}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
