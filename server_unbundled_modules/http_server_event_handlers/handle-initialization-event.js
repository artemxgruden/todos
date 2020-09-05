const configuration = require("./../configuration.js");

const log = require("./../utility_actions/log.js");

module.exports = () => {
  log(
    "info",
    `process current working directory: ${configuration.CURRENT_WORKING_DIRECTORY}`
  );
  log("info", `process environment: ${configuration.NODE_ENV}`);
  log(
    "info",
    `process http server listening on port: ${configuration.HTTP_SERVER_PORT}`
  );
  log(
    "info",
    `server modules configuration: ${JSON.stringify(configuration, null, 4)}`
  );
};
