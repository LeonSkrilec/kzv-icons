require("dotenv").config();
const figmaApiExporter = require("figma-api-exporter").default;

async function getFigmaIcons() {
  const exporter = figmaApiExporter(process.env.FIGMA_TOKEN);
  const figmaFileId = "LFGWUwyi6maWPMqFfeLyn2";
  const canvasName = "IconsExport";

  const svgsData = await exporter.getSvgs({
    fileId: figmaFileId,
    canvas: canvasName,
  });

  await exporter.downloadSvgs({
    saveDirectory: exportFolder,
    svgsData: svgsData.svgs,
    lastModified: svgsData.lastModified,
  });
  console.log("Icons successfully synced from Figma file.");
}
