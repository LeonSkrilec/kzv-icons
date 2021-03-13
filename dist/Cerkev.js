function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Cerkev(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10 2v3.333m0 0L6.19 9.43M10 5.333l3.81 4.096M8.476 3.524h3.048m1.714 5.333V18m0 0H6.762m6.476 0h4.19v-5M6.763 18V8.857m0 9.143h-4.19v-5M2 12.762l4.762-2.095M18 12.762l-4.762-2.095M11.524 18H8.476v-2.667c0-.857.667-1.524 1.524-1.524s1.524.667 1.524 1.524V18zm0-8.19a1.524 1.524 0 1 1-3.048 0 1.524 1.524 0 0 1 3.048 0z",
    stroke: "currentColor",
    strokeMiterlimit: 10
  }));
}

export default Cerkev;