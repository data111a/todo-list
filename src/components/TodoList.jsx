import { useEffect, useState } from "react";
import { DateComponent } from "./DateComponent";
import { Todo } from "./Todo";
import { TodoListHeader } from "./TodoListHeader";
import { AddTodo } from "./AddTodo";
import Filter from "./Filter";

export const TodoList = () => {
  const [addTodoStatus, setAddTodoStatus] = useState(false);
  const [searchInp, setSearchInp] = useState("");
  const [currentDate] = useState(new Date());
  const [todoList, setTodoList] = useState([]);
  const [showFinishedTasks, setShowFinishedTasks] = useState(null);

  // console.log("rerendered");

  useEffect(() => {
    const data = localStorage.getItem("data");
    setTodoList(data !== null ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    if (todoList.length !== 0) {
      localStorage.setItem("data", JSON.stringify(todoList));
    }
  }, [todoList]);

  // function to change if todo is done or not
  const handleTodoStatusChange = (index) => {
    const newList = todoList.map((todo) => {
      if (todo.index === index) {
        todo.doneStatus = !todo.doneStatus;
      }
      return todo;
    });
    setTodoList(newList);
  };

  // function to change if user is adding todo or not
  const handleAddTodoChange = () => {
    setAddTodoStatus(!addTodoStatus);
  };

  const handleTodoDelete = (index) => {
    const newList = todoList.filter((todo) => {
      if (todo?.index !== index) {
        return todo;
      }
    });
    setTodoList(newList);
  };

  const handleTodoAdd = (title, desc, date) => {
    const newItem = {
      title: title,
      desc: desc,
      date: date,
      doneStatus: false,
      index:
        todoList.length === 0 ? 0 : todoList[todoList.length - 1].index + 1,
    };
    setTodoList([...todoList, newItem]);
  };

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <div className="todo_div">
      <div
        className={
          addTodoStatus ? "inactive_todo_content_div" : "todo_content_div"
        }
      >
        <DateComponent />
        <div className="content_div">
          <TodoListHeader
            searchInp={searchInp}
            setSearchInp={setSearchInp}
            addTodoStatus={addTodoStatus}
            handleAddTodoChange={handleAddTodoChange}
          />
          <Filter
            showFinishedTasks={showFinishedTasks}
            setShowFinishedTasks={setShowFinishedTasks}
          />
          {/* <Todo /> */}
          <div className="todos_div">
            {todoList.map((todo, index) => {
              if (todo != undefined) {
                if (todo.title.includes(searchInp)) {
                  if (
                    todo.doneStatus === showFinishedTasks ||
                    showFinishedTasks === null
                  ) {
                    return (
                      <Todo
                        key={index}
                        day={day}
                        month={month}
                        year={year}
                        title={todo.title}
                        desc={todo.desc}
                        date={todo.date}
                        doneStatus={todo.doneStatus}
                        changeSatatus={handleTodoStatusChange}
                        index={todo.index}
                        deleteTodo={handleTodoDelete}
                      />
                    );
                  }
                }
              }
            })}
          </div>
        </div>
      </div>
      {addTodoStatus ? (
        <div className={"overlay"}>
          <AddTodo
            handleAddTodoChange={handleAddTodoChange}
            handleTodoAdd={handleTodoAdd}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
