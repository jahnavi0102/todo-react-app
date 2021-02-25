import React, {useState, useEffect} from "react";
import './App.css';
//importing Componenets
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]= useState([]);
  const [status, setStatus]= useState("all");
  const [filteredTodos, setFilteredTodos]= useState([])

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status){
      case "completed":
        setFilteredTodos(todos.fiter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.fiter((todo) => todo.completed === false));
        break;  
      default:
        setFilteredTodos(todos);
        break;  
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Jj's todo-list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
