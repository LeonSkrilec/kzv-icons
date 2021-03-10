function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Kamping(props) {
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
    d: "M4.1 13.744 2 18v-1.68m2.1-2.576L10 5.12l5.9 8.624m-11.8 0V18h4.2v-3.136c0-1.12.8-2.128 1.7-2.128.5 0 .9.224 1.2.56.3.336.5.896.5 1.456v3.136h4.2v-4.144m0 0L18 18v-1.68m-13.9-.448H8m3.7 0h3.8M10.8 6.24 9.3 4m.3 1.68L10.7 4",
    strokeWidth: 1.3,
    strokeMiterlimit: 10
  }));
}

export default Kamping;