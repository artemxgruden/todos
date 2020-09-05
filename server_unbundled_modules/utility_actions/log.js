const constants = require("./../constants.js");
const configuration = require("./../configuration.js");

const loggingWriteStream = require("./../logging-write-stream.js");

module.exports = (level = "info", data = null) => {
  const message =
    level === "error"
      ? `${new Date()} - ${level} - ${data.stack}`
      : `${new Date()} - ${level} - ${data}`;

  if (configuration.NODE_ENV === constants.DEVELOPMENT_NODE_ENV) {
    console.log(message);
  } else {
    loggingWriteStream.write(`${message}\n`);
  }
};
