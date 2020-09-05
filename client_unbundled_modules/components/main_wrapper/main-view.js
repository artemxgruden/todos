const { createElement, useCallback, useContext } = require("react");

const {
  useData,
  contexts: { dataStateStorageContext },
} = require("react-data-connected-components");

const TodoItem = require("./main_view/todo-item.js");
const constructTodoItem = require("../../actions/construct-todo-item.js");

module.exports = () => {
  const dataStateStorage = useContext(dataStateStorageContext);

  const { currentTodoName, todos } = useData(["currentTodoName", "todos"]);

  const onChange = useCallback((event) => {
    console.log("onchange", event.target.value);
    dataStateStorage.set({ currentTodoName: event.target.value });

    console.log("data state", dataStateStorage.getDataState());
  });

  const onClick = useCallback((event) => {
    console.log("onclick");
    const todos = dataStateStorage.get("todos");
    dataStateStorage.set({
      todos: [...todos, constructTodoItem({ title: currentTodoName })],
    });
    console.log("data state", dataStateStorage.getDataState());
  });

  return createElement(
    "div",
    {},
    "Главная страница",
    createElement("input", { value: currentTodoName, onChange }),
    createElement("button", { onClick }, "добавить в список"),

    todos
      ? createElement(
          "ul",
          {},
          todos.map(({ id, title, status }, i) =>
            createElement(TodoItem, { key: id, id, title, status })
          )
        )
      : null
  );
};
