function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Voda(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 16.896a3.666 3.666 0 0 1-1.766-1.556c-1.247 2.179-4.468 2.179-5.715 0-1.246 2.179-4.467 2.179-5.714 0C4.182 16.377 3.143 17 2 17m16-4.774a3.666 3.666 0 0 1-1.766-1.556c-1.247 2.18-4.468 2.18-5.715 0-1.246 2.18-4.467 2.18-5.714 0-.623 1.037-1.662 1.66-2.805 1.66m16-4.773A3.666 3.666 0 0 1 16.234 6c-1.247 2.18-4.468 2.18-5.715 0-1.246 2.18-4.467 2.18-5.714 0C4.182 7.038 3.143 7.66 2 7.66",
    stroke: "currentColor",
    strokeMiterlimit: 10
  }));
}

export default Voda;