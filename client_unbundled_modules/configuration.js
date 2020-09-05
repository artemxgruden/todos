const {
  DEVELOPMENT_NODE_ENV,
  STAGING_NODE_ENV,
  PRODUCTION_NODE_ENV,

  LOCAL_MACHINE,
  REMOTE_MACHINE,
} = require("./constants.js");

module.exports.NODE_ENV = process.env.NODE_ENV || DEVELOPMENT_NODE_ENV;
module.exports.MACHINE = process.env.MACHINE || LOCAL_MACHINE;
module.exports.VERSION = process.env.VERSION || process.env.npm_package_version;
module.exports.BACKEND_BASE_URL =
  process.env.BACKEND_BASE_URL || "http://localhost:3330";
module.exports.ROOT_DOM_ELEMENT_ID = process.env.ROOT_DOM_ELEMENT_ID || "root";
