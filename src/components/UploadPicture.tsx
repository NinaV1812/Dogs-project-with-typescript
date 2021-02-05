import React, { useState, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "../styles/UploadAndIdenfiry.css";
import { type } from "os";

type Results = [{
    className: string,
    probability: number
}]


const UploadImage = () => {
  tf.setBackend("cpu");
  const [model, setModel] = useState<any>();
  const [imageURL, setImageURL] = useState<string>();
  const [results, setResults] = useState<Results>();


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handle uploading-");
  };

//  const { files } = event.target;
//   const { files } = {files: ....}
//'(event: ChangeEvent<HTMLInputElement>) => void'
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("event target", event.target)
    const {files}  = event.target;
    if (files !== null && files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    }
  };

  const loadModel = async () => {
    const model2 = await mobilenet.load();
    setModel(model2);
    console.log("the model is loaded");
  };

  const combineFunction = () => {
    loadModel();
    // setDisplayInput(true);
  };

  const identify = async () => {
    const imageForClassification = document.getElementById("picture")
    const identified = await model.classify(imageForClassification);
    setResults(identified);
    console.log("identify", identified);
    console.log("results", results);
    // dispatch(Breed(results));
  };

  return (
    <div id="top">
      <div className="landing-text">
        <div className="space">
          <h1>Geting Started</h1>
          <h3>Classify your dog</h3>
          <button
            className="btn btn-light btn-lg"
            type="button"
            id="inputGroupFileAddon04"
            onClick={combineFunction}
          >
            Press To start
          </button>
        </div>
        <div className="padding">
          <div className="container">
            <div className="row">
              {/* <form onSubmit={(e) => handleSubmit(e)}> */}
                <div className="input-group">
                  <input
                    className="form-control"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    type="file"
                    multiple={false}
                    onChange={handleUpload}
                    // ref={imageRef}
                  ></input>
                   <button
                        className="btn btn-success"
                        type="button"
                        id="inputGroupFileAddon04"
                        onClick={identify}
                      >
                        Classify breed
                      </button>
                </div>
              {/* </form> */}
              <div className="d-flex justify-content-center">
                <div className="img-fluid img-thumbnail">
                  <img
                  id="picture"
                    className="img-responsive"
                    src={imageURL}
                    alt="upload-preview"
                    // ref={imageRef}
                  />
                </div>
              </div>
              { results ?
              <div>
                <ul className="list">
                  {results.map(({ className, probability }) => (
                    <li key={className}>{`${className}: %${(
                      probability * 100
                    ).toFixed(2)}`}</li>
                  ))}
                </ul>
              </div>
                : null
}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UploadImage;
