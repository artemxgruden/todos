const { createDataStateStorage } = require("react-data-connected-components");

const initialDataState = require("./initial-data-state.js");

module.exports = createDataStateStorage({
  ...initialDataState,
  // ...window.__INITIAL_DATA_STATE__,
});

// delete window.__INITIAL_DATA_STATE__;
