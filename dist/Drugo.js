function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Drugo(props) {
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
    d: "M15.8 7.9c0 3.5-4 8.1-5.4 9.6-.3.3-.7.3-1 0C8 16 4 11.4 4 7.9 4 4.7 6.7 2 9.9 2s5.9 2.6 5.9 5.9z",
    strokeMiterlimit: 10
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.8 10.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6z",
    strokeMiterlimit: 10
  }));
}

export default Drugo;