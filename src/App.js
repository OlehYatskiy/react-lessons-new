import React, { Component } from 'react';

import NavBar from "./components/NavBar/NavBar";

import classes from './App.less';

import { apiUrl } from "./constants/config";

class App extends Component {

    render() {
        return (
            <div className={classes.app}>
                <NavBar />
                <div className={classes.appContainer}>
                    UserPage
                </div>
            </div>
    );
  }
}

export default App;
