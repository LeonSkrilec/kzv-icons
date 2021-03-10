const svgr = require("@svgr/core").default;
const config = require("../config");
const fs = require("fs");

const componentsFolder = config.componentsFolder;
const optimizedFilesFolder = config.optimizedFilesFolder;

async function generateReactComponents() {
  const files = fs.readdirSync(optimizedFilesFolder);

  for (const file of files) {
    if (file.endsWith(".svg")) {
      const svgFilePath = optimizedFilesFolder + "/" + file;
      let componentName = file[0].toUpperCase() + file.substring(1);
      componentName = componentName.split(".svg")[0];
      const svgString = fs.readFileSync(svgFilePath);
      const jsCode = await svgr(svgString, { icon: true }, { componentName });
      const componentFilePath = componentsFolder + "/" + componentName + ".js";
      fs.writeFileSync(componentFilePath, jsCode);
    }
  }

  console.log("Componentized " + files.length + " icons.");
}

generateReactComponents();
