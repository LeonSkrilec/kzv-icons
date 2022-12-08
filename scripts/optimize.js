const config = require("../config");
const fs = require("fs");
const { optimize } = require("svgo");

const filesFolder = config.svgFilesFolder;

async function optimizeIcons() {
  const files = fs.readdirSync(filesFolder);

  for (const file of files) {
    if (file.endsWith(".svg")) {
      const svgFilePath = filesFolder + "/" + file;
      const svgString = fs.readFileSync(svgFilePath);
      try {
        const result = optimize(svgString, {
          path: svgFilePath,
          ...config.svgo,
        });
        const optimizedFilePath = filesFolder + "/" + file;
        fs.writeFileSync(optimizedFilePath, result.data);
      } catch (error) {
        console.error(error);
      }
    }
  }

  console.log("Optimized " + files.length + " icons.");
}

optimizeIcons();
