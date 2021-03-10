function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Koca(props) {
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
    d: "M16 9H4v9h12V9.08M4 12h12M4 15h4m4 0h4M2 10.312 10 2l8 8.312M6.5 6h7M4.556 7.463V5M8 14h4v4H8v-4z",
    strokeWidth: 1.3,
    strokeMiterlimit: 10
  }));
}

export default Koca;