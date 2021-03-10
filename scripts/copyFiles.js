const copydir = require("copy-dir");
const config = require("../config");

copydir.sync(config.svgFilesFolder, config.distFolder + "/svg");
