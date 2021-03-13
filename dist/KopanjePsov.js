function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function KopanjePsov(props) {
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
    d: "M17.047 17.753c-.734-.275-1.285-.734-1.652-1.376-1.192 1.927-4.037 1.927-5.23 0-1.192 1.927-4.036 1.927-5.229 0a3.04 3.04 0 0 1-2.569 1.468m0-3.578c1.101 0 2.11-.55 2.57-1.468 1.192 1.926 4.036 1.926 5.229 0 1.192 1.926 4.037 1.926 5.23 0 .275.55.825 1.009 1.376 1.192m-12.845-.275c.183-.459-.092-.459-.092-1.193-.092-.825.734-1.743 1.468-2.018.734-.275 1.743-.184 2.385-.092.643 0 2.478.184 3.12.184.55 0 .917-.276 1.376-.826.459-.55.55-1.285.642-1.652.092-.367.367-.734.367-.734s-.367-.55-.458-1.009c-.184-.826.55-1.376.55-1.376.367.184.734.917.734.917.275.276.184.826.642 1.01.459.183.826.917 1.101 1.1.367.276 2.019.092 2.202.551.184.459-.367.734-1.009 1.193-.642.459-1.468-.092-1.927.275-.459.367-.55 2.66-.55 3.12m-2.386-3.303s.367.825 1.01 1.1c.55.276 1.467.368 1.467.368m-9.633-.826s-1.468-.826-2.019-1.468C2.184 8.21 2 7.294 2 6.927",
    strokeMiterlimit: 10
  }));
}

export default KopanjePsov;