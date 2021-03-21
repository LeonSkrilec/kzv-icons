const svgr = require("@svgr/core").default;
const config = require("../config");
const fs = require("fs");
const fsExtra = require("fs-extra");
const { pascalCase } = require("change-case");
const generateIndex = require("./generateIndex");
const srcFolder = config.srcFolder;
const componentsFolder = config.componentsFolder;
const filesFolder = config.svgFilesFolder;

async function generateReactComponents() {
  const files = fs.readdirSync(filesFolder);
  fsExtra.emptyDirSync(componentsFolder);

  for (const file of files) {
    if (file.endsWith(".svg")) {
      const svgFilePath = filesFolder + "/" + file;
      let componentName = file.split(".svg")[0];
      componentName = pascalCase(componentName);
      const svgString = fs.readFileSync(svgFilePath);
      const jsCode = await svgr(svgString, { icon: true }, { componentName });
      const componentFilePath = componentsFolder + "/" + componentName + ".js";
      fs.writeFileSync(componentFilePath, jsCode);
    }
  }

  generateIndex();
  console.log("Componentized " + files.length + " icons.");
}

generateReactComponents();
