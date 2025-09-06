import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, activeTab } = props;

  const filteredTodosList =
    activeTab === "All"
      ? todos
      : activeTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filteredTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todo={todo}
            todoIndex={todos.findIndex((obj) => obj.input === todo.input)}
            {...props}
          />
        );
      })}
    </>
  );
}
