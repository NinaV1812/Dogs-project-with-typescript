import React from "react";
import "./App.css";
import UploadImage from "./components/UploadPicture";
import DogsLayout from "./components/DogsLayout"

function App() {
  return (
    <div className="App">
      <div>
        <UploadImage />
      </div>
      <div>
        <DogsLayout />
      </div>
    </div>
  );
}

export default App;
