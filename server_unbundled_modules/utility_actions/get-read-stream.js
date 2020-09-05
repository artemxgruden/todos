const { createReadStream } = require("fs");
const { join: joinPath } = require("path");

const configuration = require("./../configuration.js");

const checkFileIsAccessable = require("./check-file-is-accessable.js");

module.exports = async (path) => {
  const relativePath = path.replace(/\/files\//, "");

  const absoluteFilePath = joinPath(
    configuration.CURRENT_WORKING_DIRECTORY,
    relativePath
  );

  const fileIsAccessable = await checkFileIsAccessable(absoluteFilePath);

  if (fileIsAccessable) {
    const readStream = createReadStream(absoluteFilePath);

    return readStream;
  }

  return null;
};
