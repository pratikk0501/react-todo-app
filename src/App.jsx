import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { useState, useEffect, use } from "react";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: true },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Get a job and find your place in the world!", complete: false },
  // ];

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [activeTab, setActiveTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const updatedTodos = [...todos, { input: newTodo, complete: false }];
    setTodos(updatedTodos);
    handleSaveData(updatedTodos);
  }

  function handleDeleteTodo(index) {
    let updatedTodos = todos.filter((todo, idx) => {
      return idx !== index;
    });
    setTodos(updatedTodos);
    handleSaveData(updatedTodos);
  }

  function handleEditTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = newTodoList[index];
    completedTodo.complete = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(todos) {
    localStorage.setItem("todo-app-data", JSON.stringify({ todos: todos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app-data")) {
      return;
    }
    let savedTodos = JSON.parse(localStorage.getItem("todo-app-data"));
    setTodos(savedTodos.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        activeTab={activeTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
