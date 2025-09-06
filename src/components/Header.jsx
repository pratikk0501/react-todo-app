export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;

  const istasksplural = todosLength !== 1;
  const taskstext = istasksplural ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {taskstext}.
      </h1>
    </header>
  );
}
