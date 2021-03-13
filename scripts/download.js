require("dotenv").config();
const figmaApiExporter = require("figma-api-exporter").default;
const config = require("../config");
const fsExtra = require("fs-extra");
const filesFolder = config.svgFilesFolder;

async function getFigmaIcons() {
  const exporter = figmaApiExporter(process.env.FIGMA_TOKEN);
  const figmaFileId = "FI3os9U80hzrpAEZfRacZl";
  const canvasName = "IconsExport";

  const svgsData = await exporter.getSvgs({
    fileId: figmaFileId,
    canvas: canvasName,
  });

  if (svgsData.svgs.length === 0) {
    throw Error("No svgs were found in Figma file.");
  }

  fsExtra.emptyDirSync(filesFolder);

  await exporter.downloadSvgs({
    saveDirectory: filesFolder,
    svgsData: svgsData.svgs,
    lastModified: svgsData.lastModified,
  });
  console.log(
    "Successfully downloaded " + svgsData.svgs.length + " from Figma file."
  );
}

getFigmaIcons();
