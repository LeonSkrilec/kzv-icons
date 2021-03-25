import React from "react";
import "./App.css";
import IconsTesting from "./IconsTesting";
import IconsMapping from "./IconsMapping";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div
          style={{
            height: "100%",
            borderRight: "1px solid #efefef",
            paddingRight: 40,
          }}
        >
          <IconsTesting></IconsTesting>
        </div>
        <div style={{ marginLeft: 80 }}>
          <IconsMapping></IconsMapping>
        </div>
      </div>
    </div>
  );
}

export default App;
