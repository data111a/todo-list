import "./App.css";
import { Logo } from "./components/Logo";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="main_div">
      <Logo />
      <TodoList />
    </div>
  );
}

export default App;
