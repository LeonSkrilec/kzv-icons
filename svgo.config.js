module.exports = {
  plugins: [
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
    { name: "removeAttrs", params: { attrs: "(stroke|fill)" } },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            stroke: "currentColor",
          },
          {
            "stroke-linecap": "round",
          },
          {
            "stroke-linejoin": "round",
          },
          {
            fill: "none",
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
