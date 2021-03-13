function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Hrib(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m6.2 11.8.7 1.4 1.4-2.1 1.4 2.1 1.4-2.1 1.4 2.1.9-1.7M9.7 6.2 2 18h16L9.7 6.2zm0 0V2m4.2 2.8H9.7V2.7h4.2l-.7 1.1.7 1z",
    strokeMiterlimit: 10
  }));
}

export default Hrib;