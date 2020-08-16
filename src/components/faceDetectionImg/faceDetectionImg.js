import React from "react";
import "./faceDetectionImg.css";

const FaceDetectionImg = ({ imageUrl }) => {
  console.log({ imageUrl });
  return (
    <div className="center">
      <div className="">
        <img className="aiImage" alt="" src={imageUrl} />
      </div>
    </div>
  );
};

export default FaceDetectionImg;
