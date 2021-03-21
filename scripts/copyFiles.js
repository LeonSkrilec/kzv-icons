const copydir = require("copy-dir");
const config = require("../config");
const fsExtra = require("fs-extra");

fsExtra.emptyDirSync(config.distFolder + "/svg");
copydir.sync(config.svgFilesFolder, config.distFolder + "/svg");
copydir.sync(config.srcFolder + "/hooks", config.distFolder + "/hooks");
