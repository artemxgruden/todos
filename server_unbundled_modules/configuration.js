module.exports = {
  CURRENT_WORKING_DIRECTORY: process.cwd(),
  HTTP_SERVER_PORT: process.env.HTTP_SERVER_PORT
    ? Number(process.env.HTTP_SERVER_PORT)
    : 3331,
  ROOT_DOM_ELEMENT_ID: process.env.ROOT_DOM_ELEMENT_ID || "root",
};
