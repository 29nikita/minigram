import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar.js";

function Form() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const fileChangeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a image file");
    }
  };

  return (
    <form>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="file"
          onChange={fileChangeHandler}
          style={{ display: "none" }}
        />
        <span className="add">+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="inputFile">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default Form;
