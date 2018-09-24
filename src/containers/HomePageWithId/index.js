import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { array, string } from "prop-types";

import Loader from '../Loader';

import "./index.css"

class HomePageWithId extends Component {
	static propTypes = {
		post: array.isRequired,
		backgroundcolor: string.isRequired
	}
	// state = {
	// 	jsonMass: [],
	// 	isLoading: true
	//
	// }

	// async componentDidMount() {
	// 	const id = this.props.match.params.id;
	// 	const resultToMap = new Array();
	//
	// 	let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	// 	result = await result.json();
	//
	// 	this.setState({
	// 		siLoading: false
	// 	});
	//
	// 	resultToMap.push(result);
	//
	// 	this.setState({
	// 		jsonMass: resultToMap,
	// 		isLoading: false
	// 	});
	//
	// 	console.log('Запрос отправлен ?');
	// }

	state = {
		redirectToHome: false
	}

	redirectToHome = () => {
		this.setState({redirectToHome: true})
	}

	render() {
		const { post, backgroundcolor } = this.props;
		const { id, title, body } = post;

		console.log('backgroundcolor prop:', backgroundcolor);
		console.log('redirectToHome state:', this.state.redirectToHome);
		console.log('redirectToHome !state:', !this.state.redirectToHome);

		return(
			<Fragment>

				{/*{*/}
					{/*isLoading ?*/}
						{/*<Loader />*/}
						{/*:*/}
						{/*this.state.jsonMass.map((item) => {*/}
							{/*return(*/}
								{/*<div key={item.id} className={"post-wrapper"} >*/}
									{/*<h1 >{ item.title }</h1>*/}
									{/*<h4>{ item.body }</h4>*/}

									{/*<button>*/}
										{/*<Link to='/homepage'>*/}
											{/*Back to homepage*/}
										{/*</Link>*/}
									{/*</button>*/}
								{/*</div>*/}
							{/*)*/}
						{/*})*/}
				{/*}*/}

				{
					this.state.redirectToHome ?
					 	<Redirect to='/homepage' />
						:
						<div key={id} className={"post-wrapper"} >
							<h1 >{ title }</h1>
							<h4>{ body }</h4>
								<Link to='/homepage'>
									<button>
										Back to homepage
									</button>
								</Link>
								<button onClick={this.redirectToHome} >Redirect</button>
						</div>
				}
			</Fragment>
		);
	}
}
export default HomePageWithId
