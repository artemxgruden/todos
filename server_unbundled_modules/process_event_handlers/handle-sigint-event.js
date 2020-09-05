const httpServer = require("./../http-server.js");
const loggingWriteStream = require("./../logging-write-stream.js");

module.exports = () => {
  httpServer.close();

  if (loggingWriteStream) {
    loggingWriteStream.end();
  }

  process.exit(0);
};
