require("dotenv").config();
const figmaApiExporter = require("figma-api-exporter").default;
const config = require("../config");
const filesFolder = config.svgFilesFolder;

async function getFigmaIcons() {
  const exporter = figmaApiExporter(process.env.FIGMA_TOKEN);
  const figmaFileId = "f4NjhEDOqw29Zhi1Uoz6BD";
  const canvasName = "IconsExport";

  const svgsData = await exporter.getSvgs({
    fileId: figmaFileId,
    canvas: canvasName,
  });

  await exporter.downloadSvgs({
    saveDirectory: filesFolder,
    svgsData: svgsData.svgs,
    lastModified: svgsData.lastModified,
  });
  console.log("Icons successfully synced from Figma file.");
}

getFigmaIcons();
