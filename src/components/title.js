import React from "react";
import "./styles.css";

function Title() {
  return (
    <div>
      <p className="app-name">MiniGram </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="title">Your Pictures</h1>
        <p className="para">A collection of your favorite memories</p>
      </div>
    </div>
  );
}

export default Title;
