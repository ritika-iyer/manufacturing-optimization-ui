import React, { Component } from "react";
import DbTable1 from "./components/DbTable1/DbTable1";
import DbTable2 from "./components/DbTable2/DbTable2";
import DbTable3 from "./components/DbTable3/DbTable3";
import "./App.css";
import "./components/TitleBar/TitleBar.css";

import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import OCard from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            padding: "1% 15%",
            margin: "-4% -3.5% 0 -3.5%",
            paddingBottom: "7%",
            backgroundColor: "#ffcc33",
          }}
        >
          <SettingsTwoToneIcon
            className="rotate"
            style={{ fontSize: "100", float: "left" }}
          />
          <h1 className="head">Manufacturing Optimizer Workbench</h1>
          <SettingsTwoToneIcon
            className="rotate"
            style={{ fontSize: "100", float: "right" }}
          />
        </div>

        <div style={{ width: "40%", paddingTop: "3%", paddingLeft: "5%" }}>
          <DbTable1 />
          <div style={{ paddingTop: "7%" }}>
            <DbTable2 />
          </div>
        </div>
        <div style={{ width: "40%", margin: "-58.5% 0 2% 55%" }}>
          <OCard />
          <div style={{ marginTop: "10%" }}>
            <DbTable3 />{" "}
          </div>
        </div>

        <div style={{ width: "40%", paddingLeft: "5%" }}> </div>
      </div>
    );
  }
}

export default App;
