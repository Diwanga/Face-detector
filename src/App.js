
import React, { Component } from "react";

import './App.css';
import Navigation from './components/navigation/Navigation' 
import Logo from './components/logo/logo'
import Imagelinkform from './components/imagelinkform/ImageLinkForm' 
import Rank from './components/Rank/rank' 
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
