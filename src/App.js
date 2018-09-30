import React, { Component, Fragment } from 'react';

import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import About from "./containers/About";
import HomePage from "./containers/Home";
import HomePageWithId from "./containers/HomePageWithId";
import LoaderRedux from "./containers/LoaderRedux/LoaderRedux";
import UserPage from "./containers/UserPage";

import Loader from './containers/Loader';
import * as appActions from "./modules/app/app.actions";


class App extends Component {
	state = {
		posts: [],
		isLoading: true
	}

	componentDidMount() {
		this.props.fetchAllData();
	}

	renderLoader = () => {
		const { loading } = this.props;

		if(loading) {
			return <Loader />
		}
	}

  render() {
		const { posts, isLoading } = this.state;

		return (
				<Fragment>
					{this.renderLoader()}
						<Switch>
							<Route exact path={"/"} component={LoaderRedux} />
							<Route exact path={"/homepage"} component={HomePage} />
							<Route exact path={"/homepage/:id"} component={HomePageWithId} />
							<Route exact path={"/user"} component={UserPage} />
							<Route path={"/about"} component={About} />
						</Switch>
				</Fragment>
		);
  }
}


function mapStateToProps({ app }) {
	return {
		loading: app.loading,
	};
}

export default withRouter(connect(mapStateToProps, { ...appActions })(App));
