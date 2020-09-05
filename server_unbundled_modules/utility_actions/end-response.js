const log = require("./log.js");

module.exports = (request, response, statusCode) => {
  response.statusCode = statusCode;

  log(
    "info",
    `${request.lowerCasedMethod} ${request.url} ${JSON.stringify(
      request.cookies,
      null,
      4
    )}`
  );

  response.end();
};
