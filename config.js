const svgo = require("./svgo.config");
const path = require("path");

module.exports = {
  srcFolder: path.join(__dirname, "/src"),
  distFolder: path.join(__dirname, "/dist"),
  exampleBaseFolder: path.join(__dirname, "/example/src/icons"),
  svgFilesFolder: path.join(__dirname, "/example/src/icons/svg"),
  componentsFolder: path.join(__dirname, "/example/src/icons/components"),
  exampleFolder: path.join(__dirname, "/example/src"),
  svgo,
};
