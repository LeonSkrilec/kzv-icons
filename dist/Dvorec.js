function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Dvorec(props) {
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
    d: "M4.2 13.8v.9m11.7-.9v.9m-7.7 2.5v-1.6s-.1-2 1.8-2c1.9 0 1.8 2 1.8 2v1.3M8.8 9v1m2.6-1v1m-5.2.8H2v6.7h16v-6.7h-4.2V6.7H6.2v4.1zM15 6.7 10 2 4.9 6.7H15z",
    strokeWidth: 1.3,
    strokeMiterlimit: 10
  }));
}

export default Dvorec;