import React, { Component } from 'react';

import { connect } from "react-redux";

import { array, func } from "prop-types";

import { FormGroup, FormControl, Glyphicon  } from "react-bootstrap";
import User from "../User/User";
import classes from './NavBar.less';
import { apiUrl } from "../../constants/config";

import * as userActions from "../../modules/user/user.actions";

class NavBar extends Component {

	state = {
		selectedBlockId: null,
		searchInput: ""
	}

	static propTypes = {
		usersData: array,
		getAllUserSaga: func,
		selectUser: func,
		unselectUser: func
	}

	componentDidMount() {
		this.props.getAllUserSaga();
	}

	onInputChange = (event) => {
		console.log(event);
		this.setState({
			searchInput: event.target.value
		})
	}

	onUserClick = (index) => {


		if (index !== this.state.selectedBlockId) {
			this.props.selectUser(index);

			this.setState({
				selectedBlockId: index
			});
		}else if(index === this.state.selectedBlockId) {
			this.props.unselectUser(index);

			this.setState({
				selectedBlockId: null
			})
		}else {
			this.props.unselectUser(index);
			this.setState({
				selectedBlockId: null
			})
		}
	}

	render() {
		const { usersData } = this.props;

		const { selectedBlockId, searchInput } = this.state;

		const filteredValue = searchInput === "" ?
			usersData
			:
			usersData.filter(element => element.general.firstName.toLowerCase().indexOf(searchInput) !== -1);



		return (
				<div className={classes.navBar}>
					<div className={classes.navBarInputWrapper}>
						<p className={classes.navBarInputLabel}> Поиск </p>
						<FormGroup onChange={this.onInputChange} className={classes.navBarInput}>
							<FormControl type="text" />
							<FormControl.Feedback>
								<Glyphicon glyph="search" />
							</FormControl.Feedback>
						</FormGroup>
					</div>

					{ filteredValue.map((user) => {
						return <User key={user._id}
									 onUserClick={this.onUserClick}
									 userData={user}
									 index={user._id}
									 selectedBlockId={selectedBlockId}
								/>
					})
					}
				</div>
		);
	}
}


function mapStateToProps({ user }) {
	return {
		usersData: user.users
	};
}

export default connect(mapStateToProps, { ...userActions })(NavBar);
