import React, { Component, Fragment } from 'react';

import { Route, Switch, withRouter } from "react-router-dom";

import About from "./containers/About";
import HomePage from "./containers/Home";
import HomePageWithId from "./containers/HomePageWithId";

import Loader from './containers/Loader';


class App extends Component {
	state = {
		posts: [],
		isLoading: true
	}

	async componentDidMount() {
		// console.log(this.props.location);
		// console.log(
		//     fetch('https://jsonplaceholder.typicode.com/todos/')
		//         .then(response => response.json())
		//         .then(json => this.setState({
		//             isLoading: false,
		//             JsonMes: json
		//         }))
		// );
		let result = await fetch('https://jsonplaceholder.typicode.com/posts/');
		result = await result.json();

		this.setState({
			posts: result,
			isLoading: false,
		});
		console.log('Запрос отправлен ?');
	}

  render() {
		const { posts, isLoading } = this.state;
    return (
			<Fragment>
			{
				isLoading ?
					<Loader />
					:
					<Switch>
						{/*<Route exact path={"/"} component={HomePage} />*/}
						<Route exact path={"/homepage"} render={
							()=><HomePage posts={posts} />
						} />
						<Route path={"/homepage/:id"} render={
							(props)=><HomePageWithId {...props}  post={posts[props.match.params.id -1]} backgroundcolor={'#444'} />
						} />
						<Route path={"/about"} component={About} />
					</Switch>

			}
			</Fragment>
    );
  }
}

export default withRouter(App);
