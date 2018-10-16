import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import UserDetails from "./components/UserDetails/UserDetails";

import classes from './App.less';

import { LoaderContainer, loader } from "./components/Loader/Loader";

import { apiUrl } from "./constants/config";

class App extends Component {

    render() {
        return (
            <div className={classes.app}>
				          <LoaderContainer />
                    <NavBar />
                    <div className={classes.appContainer}>
                        <Route exact path={"/:id"} component={UserDetails} />
					             {/*<UserDetails />*/}
                    </div>
            </div>
    );
  }
}

export default App;
