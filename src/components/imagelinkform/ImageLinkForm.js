import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange1, onButtonSubmit1 }) => {
  return (
    <div>
      <p className="f4 ">
        {"This Magic Brain will detect faces in your pictures. Git it a try."}
      </p>

      <div className="center">
        <div className="form center pa4 br4 shadow-5">
          <input
            className="f4 pa2 w-70 "
            type="tex"
            onChange={onInputChange1}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit1}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
