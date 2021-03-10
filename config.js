const svgo = require("./svgo.config");

module.exports = {
  srcFolder: __dirname + "/src",
  distFolder: __dirname + "/dist",
  svgFilesFolder: __dirname + "/src/svg",
  componentsFolder: __dirname + "/src/components",
  svgo,
};
