import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { array, bool } from "prop-types";
import "./index.css"
import {connect} from "react-redux";
import * as appActions from "../../modules/app/app.actions";


class HomePageWithId extends Component {
	static propTypes = {
		posts: array.isRequired,
		loading: bool
	}

	static defaultProps = {
		posts: []
	}


	renderItem = () => {
		const { posts } = this.props;
		const postId = this.props.match.params.id - 1;

		const {id, title, body} = posts[postId];

		return (
				<div key={ id } className={"post-wrapper"}>
					<h1>{ title }</h1>
					<h4>{ body }</h4>

					<button>
						<Link to='/homepage'>
							Back to homepage
						</Link>
					</button>
				</div>
		);
	}

	render() {
		const { loading } = this.props;

		return (
			<Fragment>
				{
					!loading &&
					this.renderItem()
				}
			</Fragment>
		);
	}
}

function mapStateToProps({ app }) {
	return {
		posts: app.posts,
		loading: app.loading
	};
}

export default connect(mapStateToProps, { ...appActions })(HomePageWithId);
