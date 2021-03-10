const config = require("../config");
const fs = require("fs");
const { optimize } = require("svgo");

const filesFolder = config.svgFilesFolder;
const optimizedFilesFolder = config.optimizedFilesFolder;

async function optimizeIcons() {
  const files = fs.readdirSync(filesFolder);

  for (const file of files) {
    if (file.endsWith(".svg")) {
      const svgFilePath = filesFolder + "/" + file;
      const svgString = fs.readFileSync(svgFilePath);
      const result = optimize(svgString, {
        path: svgFilePath,
        ...config.svgo,
      });

      const optimizedFilePath = optimizedFilesFolder + "/" + file;
      fs.writeFileSync(optimizedFilePath, result.data);
    }
  }

  console.log("Optimized " + files.length + " icons.");
}

optimizeIcons();
