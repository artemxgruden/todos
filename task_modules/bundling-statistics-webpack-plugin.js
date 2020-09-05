const { writeFileSync } = require("fs");

module.exports = class BundlingStatisticsWebpackPlugin {
  constructor(props) {
    this.filePath = props.filePath;
  }

  apply(compiler) {
    if ("hooks" in compiler) {
      compiler.hooks.done.tap(this.constructor.name, (statistics) => {
        writeFileSync(
          this.filePath,
          `module.exports = ${JSON.stringify(statistics.toJson())}`
        );
      });
    }
    return compiler;
  }
};
