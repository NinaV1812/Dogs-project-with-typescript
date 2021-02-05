import React from "react";
import * as tf from "@tensorflow/tfjs";
import "../styles/UploadAndIdenfiry.css";


interface Picture {
    ref: HTMLInputElement | null
}


const Classifier = (prop: Picture) => {
    tf.setBackend("cpu");
    // const [model, setModel] = useState<unknown>();
    // const imageRef = useRef<HTMLInputElement>();
    


    console.log("prop", prop.ref)


  


//   const identify = async () => {
//     const results = await model.classify(imageRef.current);
//     setResults(results);
//     console.log("identify");
//     console.log("results", results);
//     dispatch(Breed(results));
//   };

    return(
        <div className="space">
        <h1>Geting Started</h1>
        <h3>Classify your dog</h3>
        <button
          className="btn btn-light btn-lg"
          type="button"
          id="inputGroupFileAddon04"
        //   onClick={combineFunction}
        >
          Press To start
        </button>
        </div>
    )


}

export default Classifier