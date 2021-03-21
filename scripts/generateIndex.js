const config = require("../config");
const fs = require("fs");

const componentsFolder = config.componentsFolder;
const exampleBaseFolder = config.exampleBaseFolder;

function generateIndex() {
  const files = fs.readdirSync(componentsFolder);
  const index = files
    .map((file) => {
      const typename = file.replace(".js", "");
      if (typename === "index") return "";
      return `export { default as ${typename} } from './components/${typename}';\n`;
    })
    .join("");

  const indexFilePath = exampleBaseFolder + "/index.js";
  fs.writeFileSync(indexFilePath, index);
  console.log("Index generated!");
}

generateIndex();

module.exports = generateIndex;
