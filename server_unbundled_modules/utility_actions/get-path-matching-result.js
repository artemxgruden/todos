const { checkPathIsMatched } = require("react-routed-components");

module.exports = (routeParameters, currentPath) => {
  const matchResult = routeParameters.find(
    ({
      path,
      pathIsStrict,
      pathRegExp,
      pathRegExpGroupNames,
      componentIsWrapper,
      documentTitle,
    }) =>
      checkPathIsMatched({
        currentPath,
        path,
        pathIsStrict,
        pathRegExp,
        pathRegExpGroupNames,
        componentIsWrapper,
      })
    // checkPathIsMatched({currentPath, path, pathIsStrict, componentIsWrapper})
  );

  return matchResult;
};
