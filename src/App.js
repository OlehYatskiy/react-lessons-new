import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentWithStateInConstructor from "./component/root/ComponentWithStateInConstructor";
import ComponentWithOUtStateInConstructor from "./component/root/ComponentWithOUtStateInConstructor";
import PropsComponents from "./component/PropsComponents/PropsComponents";
import StateComponent from "./component/stateComponent/StateComponent";

class App extends Component {
  render() {

    return (
      <div className="App">
		  <ComponentWithStateInConstructor />
		  <ComponentWithOUtStateInConstructor />
		  <StateComponent />
      </div>
    );
  }
}

export default App;
