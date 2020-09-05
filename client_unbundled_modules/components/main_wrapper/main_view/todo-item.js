const { createElement, useCallback, useContext } = require("react");

const {
  contexts: { dataStateStorageContext },
} = require("react-data-connected-components");

const toggleTodo = require("../../../actions/toggle-todo.js");

module.exports = ({ id, title, status }) => {
  const dataStateStorage = useContext(dataStateStorageContext);

  const onClick = useCallback(() => {
    toggleTodo(dataStateStorage, {id});
  });

  return createElement("li", { onClick }, title + ": " + status);
};
