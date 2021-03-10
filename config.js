const svgo = require("./svgo.config");

module.exports = {
  svgFilesFolder: __dirname + "/svg",
  optimizedFilesFolder: __dirname + "/svg/optimized",
  componentsFolder: __dirname + "/components",
  svgo,
};
