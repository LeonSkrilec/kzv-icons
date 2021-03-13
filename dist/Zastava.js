function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Zastava(props) {
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
    d: "M11.7 10.3c.5 0 1-.5 1-1s-.4-1-1-1h-1m1.1-6.2c.5 0 1 .4 1 1V9m-1.1-7H3v6.3m0 0h7.7M3 8.3V18m7.7-9.7v2.8c0 .8.6 1.4 1.4 1.4H17l-1.4-2.8L17 6.9h-4.2",
    strokeMiterlimit: 10
  }));
}

export default Zastava;