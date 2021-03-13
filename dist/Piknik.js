function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Piknik(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 11.9 3.3 18m9.1-6.1 4.2 6.1M4.4 14.5h11.1M2 11.3h16m-11-.6c-1.1 0-2-.9-2-2V7.5h3.9v1.2c0 1.2-.9 2-1.9 2zm3.9-2h3.2v2.1h-3.2V8.7z",
    stroke: "currentColor",
    strokeMiterlimit: 10
  }));
}

export default Piknik;