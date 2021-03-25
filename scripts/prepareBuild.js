/**
 * 1. Copy example/src/icons/components to src/components and example/src/hooks folders to src folder
 * 2. Take index file from example/src/icons/index.js and copy it to src folder
 * 3. Update paths in index file to ./components/Icon_name
 * 4. Add hook export to index export
 */

const copydir = require("copy-dir");
const config = require("../config");
const fs = require("fs");

copydir.sync(config.exampleFolder + "/icons", config.srcFolder + "/icons");
copydir.sync(config.exampleFolder + "/hooks", config.srcFolder + "/hooks");

fs.copyFile(
  config.srcFolder + "/icons/index.js",
  config.srcFolder + "/index.js",
  (err) => {
    if (err) throw err;
  }
);

const componentsFolder = config.srcFolder + "/icons/components";

const files = fs.readdirSync(componentsFolder);
let index = files
  .map((file) => {
    const typename = file.replace(".js", "");
    if (typename === "index") return "";
    return `export { default as ${typename} } from './icons/components/${typename}';\n`;
  })
  .join("");

index += `export { default as useIcons } from './hooks/useIcons';\n`;

const indexFilePath = config.srcFolder + "/index.js";
fs.writeFileSync(indexFilePath, index);

console.log("Build ready in src folder.");
