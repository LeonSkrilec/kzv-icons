function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Kajak(props) {
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
    d: "M11.853 13.616h.947c1.61 0 3.505-.405 4.358-2.02.095-.203.19-.405.19-.607 0-.202-.159-.489-.348-.489h-3.126m-.695-1.127-3.63 5.253m0 0 .57 1.313-.854 1.515c-.284.505-1.042.707-1.515.404-.474-.303-.663-.91-.38-1.414l.853-1.515 1.327-.303zm2.588-1.01H5.789c-1.894 0-2.652-.405-3.6-2.02-.094-.203-.189-.405-.189-.708 0-.202.19-.404.379-.404h12.884m-9.19-.303 1.611-3.636c.284-.707 1.042-1.01 1.8-.808 0 0 .569.202 1.137.707l.474.808c.19.202.379.404.663.606l1.42.606c.38.202.57.606.475.91m-1.99.504s-1.61-.909-1.99-1.414m2.653-4.949C12.326 2.707 11.758 2 11 2c-.758 0-1.421.606-1.421 1.414 0 .808.568 1.515 1.326 1.515.758 0 1.421-.606 1.421-1.414z",
    strokeMiterlimit: 10
  }));
}

export default Kajak;