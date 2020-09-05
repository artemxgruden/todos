const { access, F_OK } = require("fs");

module.exports = (path) =>
  new Promise((resolve) => {
    access(path, F_OK, (error) => {
      if (error) {
        return resolve(false);
      }

      resolve(true);
    });
  });
