function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function MuzejNaProstem(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m13.632 6.178 2.987 3.873h-6.082m.32-4.178L9.15 7.809m-2.882 7.134C3.921 14.943 2 13.108 2 10.866S3.92 6.79 6.268 6.79s4.269 1.834 4.269 4.076c0 1.835-1.83 3.363-3.537 3.873h10.9l-3.201-4.382m-1.494 4.79V18H11.39v-2.854M6.268 9.848V18m0-4.28 1.708-1.835M4.56 11.07l1.708 1.53M12.138 2 9.15 5.873h5.869l-1.921-2.65L12.138 2z",
    strokeWidth: 1.3,
    strokeMiterlimit: 10
  }));
}

export default MuzejNaProstem;