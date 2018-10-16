import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { object, number, func, any, string } from "prop-types";
import classes from './User.less';

import classNames from "classnames";

class User extends Component {

	static propTypes = {
		userData: object,
		index: string,
		onUserClick: func,
		selectedBlockId: any
	}

	onUserBlockClick = (index) => (event) => {
		event.stopPropagation();

		this.props.onUserClick(index);
	}

	render() {
		const { firstName, lastName, avatar } = this.props.userData.general;
		const { index, selectedBlockId } = this.props;

		const userWrapperClass = classNames(classes.user, {
			[classes.selected]: index === selectedBlockId
		});
//to={`/${firstName}${lastName}`}
		return (
			<Link to={index}>
				<div onClick={this.onUserBlockClick(index)}
					 key={index}
					 className={userWrapperClass}>
					<div className={classes.userImageWrapper}>
						<img src={avatar} alt="Cat"/>
					</div>
					<div className={classes.userDescription}>
						{`${firstName} ${lastName}`}
					</div>
				</div>
			</Link>
		);
	}
}

export default User;
