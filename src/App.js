import React, { Component } from "react";

import "./App.css";
import Navigation from "./components/navigation/Navigation";
import FaceDetectionImg from "./components/faceDetectionImg/faceDetectionImg";
import Logo from "./components/logo/logo";
import Imagelinkform from "./components/imagelinkform/ImageLinkForm";
import Rank from "./components/Rank/rank";
import Particles from "react-particles-js";
// const Clarifai = require('clarifai');
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "3afddcf3393f47369001da391152ba86",
});

const particalpara = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 600,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
    // this.handelchange=this.handelchange.bind(this);
  }
  calculateFaceLocation = (data) => {
    const clarifaiData =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiData);
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);

    return {
      leftCol: clarifaiData.left_col * width,
      topRow: clarifaiData.top_row * height,
      rightCol: width - clarifaiData.right_col * width,
      bottomRow: height - clarifaiData.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box, "diwangaaaaaaaaaaaaaaaaaaaaaa");
    this.setState({ box: box });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Particles className="Particals" params={particalpara} />

        <Navigation />
        <Logo />
        <Rank />
        <Imagelinkform
          onInputChange1={this.onInputChange}
          onButtonSubmit1={this.onButtonSubmit}
        />
        <FaceDetectionImg box={this.state.box} imageUrl={this.state.imageUrl} />
        {/*<h1 className= "App">asdasd</h1>*/}
      </div>
    );
  }
}

export default App;
