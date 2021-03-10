const config = require("../config");
const fs = require("fs");

const filesFolder = config.svgFilesFolder;

function renameIcons() {
  const files = fs.readdirSync(filesFolder);
  for (const file of files) {
    if (file.endsWith(".svg")) {
      const existingFilePath = filesFolder + "/" + file;
      const newFileName = file.replace("Ikona_", "").toLowerCase();
      const newFilePath = filesFolder + "/" + newFileName;
      fs.rename(existingFilePath, newFilePath, (err) => {
        if (err) console.log(err);
      });
    }
  }

  console.log("Renamed " + files.length + " icons.");
}

renameIcons();
