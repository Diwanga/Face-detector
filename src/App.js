
import React, { Component } from "react";

import './App.css';
import Navigation from './components/navigation/Navigation' 
import Logo from './components/logo/logo'
import Imagelinkform from './components/imagelinkform/ImageLinkForm' 
import Rank from './components/Rank/rank' 
import Particles from 'react-particles-js';


const particalpara = {
  particles: {
    
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
};




class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: "",
    };

    // this.handelchange=this.handelchange.bind(this);
  }

render(){
 return(
<div className= "App">

<Particles  className= "Particals"
params={particalpara} />

<Navigation  />
<Logo /> 
<Rank/>
<Imagelinkform/>
{/*<h1 className= "App">asdasd</h1>*/}
 </div>


  );
}

}

export default App;
