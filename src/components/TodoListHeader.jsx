/* eslint-disable react/prop-types */
import { BsPlus } from "react-icons/bs";

export const TodoListHeader = ({
  handleAddTodoChange,
  searchInp,
  setSearchInp,
}) => {
  // const [inputValue, setInputValue] = useState("");

  return (
    <div className="todo_input_div">
      <input
        placeholder="SEARCH"
        className="todo_input"
        type="text"
        name="todo"
        value={searchInp}
        onChange={(e) => setSearchInp(e.target.value)}
      />
      <button className="todo_add_btn" onClick={handleAddTodoChange}>
        <BsPlus style={{ color: "white", fontSize: "28px" }} />
      </button>
    </div>
  );
};
