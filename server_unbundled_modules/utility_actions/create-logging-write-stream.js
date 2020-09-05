const { existsSync, mkdirSync, createWriteStream } = require("fs");
const { resolve: resolvePath } = require("path");

const constants = require("./../constants.js");
const configuration = require("./../configuration.js");

module.exports = () => {
  if (configuration.MACHINE === constants.LOCAL_MACHINE) {
    return null;
  }

  const logsDirectoryPath = resolvePath(
    configuration.CURRENT_WORKING_DIRECTORY,
    `logs/`
  );

  const logsDirectoryIsExist = existsSync(logsDirectoryPath);

  if (logsDirectoryIsExist === false) {
    mkdirSync(logsDirectoryPath);
  }

  return createWriteStream(
    resolvePath(
      configuration.CURRENT_WORKING_DIRECTORY,
      `logs/${new Date()}.txt`
    )
  );
};
