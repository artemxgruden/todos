const { createElement } = require("react");

module.exports = ({ children }) => {
  return [
    createElement("header", { key: 1 }, "header->"),
    createElement("main", { key: 2 }, children),
    createElement("footer", { key: 3 }, "footer->"),
  ];
};
