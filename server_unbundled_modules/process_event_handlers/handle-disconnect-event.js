const log = require("./../utility_actions/log.js");

module.exports = (code) => {
  log("info", `disconnect: ${code}`);
};
