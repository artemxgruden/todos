module.exports = (dataStateStorage, { id }) => {
  const todos = dataStateStorage.get("todos");
  const todo = todos.find(({ id: _id }) => _id === id);
  const newTodos = todos.filter(({ id: _id }) => _id !== id);

  const updatedTodos = [
    ...newTodos,
    {
      ...todo,
      status: todo.status === "uncompleted" ? "completed" : "uncompleted",
    },
  ];
  updatedTodos.sort((todo1, todo2) => todo1.id - todo2.id);

  dataStateStorage.set({
    todos: updatedTodos,
  });
};
