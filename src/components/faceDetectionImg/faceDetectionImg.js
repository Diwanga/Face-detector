import React from "react";
import "./faceDetectionImg.css";

const FaceDetectionImg = ({ imageUrl, box }) => {
  console.log(box, "boxxxxx");
  return (
    <div className="center ">
      <div className="absolute">
        <img id="inputimage" className="aiImage" alt="" src={imageUrl} />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            right: box.rightCol,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceDetectionImg;
