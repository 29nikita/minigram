import React from "react";
import { useState } from "react";
import Title from "./components/title.js";
import "./components/styles.css";
import Form from "./components/uploadFile.js";
import ImageGrid from "./components/ImageGrid.js";
import Modal from "./components/Modal.js";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <Form />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
