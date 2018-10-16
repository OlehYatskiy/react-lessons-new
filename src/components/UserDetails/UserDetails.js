import React, { Component } from 'react';

import { connect } from "react-redux";

import { string, array, func, any } from "prop-types";

import { FormGroup, FormControl, InputGroup  } from "react-bootstrap";
import classes from './UserDetails.less';

import { postRequest } from "../../api";

import * as userActions from "../../modules/user/user.actions";

class UserDetails extends Component {

	state = {
		selectedBlockId: null,
	}

	static propTypes = {
		firstName: string,
		lastName: string,
		avatarUrl: string,
		usersData: array,
		selectUserIndex: any,
		getAllUserSaga: func,
		addUserProperties: func,
	}

	onInputChange = (event) => {
		this.props.addUserProperties(event.target);
	}

	onConfirmBtnClick = () => {
		const { firstName, lastName, avatarUrl } = this.props;
	  this.props.addNewUser({ firstName: firstName,
			 											lastName: lastName,
														avatarUrl: avatarUrl });
		this.props.getAllUserSaga();
	}

	render() {

		const { usersData, selectUserIndex } = this.props;
		//const selectUserIndex = '5bc39512670e7a356411d959';
		console.log(selectUserIndex);
		const selectedUserDataIndex = usersData.findIndex((user) => {
			return user._id === selectUserIndex;
		});

		return (
			<div className={classes.userDetails}>
				{
					selectUserIndex !==null ?
					<div>
						<div>
							<div className={classes.userImageWrapper}>
								<img src={usersData[selectedUserDataIndex].general.avatar} alt="Cat"/>
							</div>
							<div className={classes.userDescription}>
								{`${usersData[selectedUserDataIndex].general.firstName}
								 ${usersData[selectedUserDataIndex].general.lastName}`}
							</div>
						</div>
					</div>
					:
					<React.Fragment>
						<InputGroup>
							<InputGroup.Addon>firstName</InputGroup.Addon>
							<FormControl onChange={this.onInputChange} name={"firstName"} type="text" />
						</InputGroup>

						<InputGroup>
							<InputGroup.Addon>lastName</InputGroup.Addon>
							<FormControl onChange={this.onInputChange}  name={"lastName"} type="text" />
						</InputGroup>

						<InputGroup>
							<InputGroup.Addon>avatarUrl</InputGroup.Addon>
							<FormControl onChange={this.onInputChange} name={"avatarUrl"} type="text" />
						</InputGroup>

						<button onClick={this.onConfirmBtnClick}> Confirm </button>
					</React.Fragment>
				}
			</div>
		);
	}
}


function mapStateToProps({ user }) {
	return {
		usersData: user.users,
		selectUserIndex: user.selectUser,
		firstName: user.firstName,
		lastName: user.lastName,
		avatarUrl: user.avatarUrl,
	};
}

export default connect(mapStateToProps, { ...userActions })(UserDetails);
