const log = require("./../utility_actions/log.js");

module.exports = (error, socket) => {
  log("error", error);

  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
};
