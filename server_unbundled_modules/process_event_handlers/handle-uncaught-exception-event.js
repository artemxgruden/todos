const httpServer = require("./../http-server.js");
const loggingWriteStream = require("./../logging-write-stream.js");
const log = require("./../utility_actions/log.js");

module.exports = (error) => {
  log("error", error);

  httpServer.close();

  if (loggingWriteStream) {
    loggingWriteStream.end();
  }

  process.exit(1);
};
