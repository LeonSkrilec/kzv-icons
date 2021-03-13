module.exports = {
  plugins: [
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            "stroke-linecap": "round",
          },
          {
            "stroke-linejoin": "round",
          },
        ],
      },
    },
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeEditorsNSData",
    "cleanupAttrs",
    "inlineStyles",
    "minifyStyles",
    "cleanupIDs",
    "removeUselessDefs",
    "cleanupNumericValues",
    "convertColors",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "cleanupEnableBackground",
    "removeHiddenElems",
    "removeEmptyText",
    "moveElemsAttrsToGroup",
    "moveGroupAttrsToElems",
    "collapseGroups",
    "convertPathData",
    "convertTransform",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "mergePaths",
    "removeUnusedNS",
    "sortDefsChildren",
    "removeTitle",
    "removeDesc",
  ],
};
