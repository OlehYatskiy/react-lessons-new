import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FormGroup, FormControl, Glyphicon  } from "react-bootstrap";
import { array } from 'prop-types'


import User from "../User/User";
import classes from './NavBar.less';

import * as appActions from '../../modules/app/app.actions'

class NavBar extends Component {

	static propTypes = {
		usersData: array
	}

	componentDidMount () {
		this.props.fetchAllData();
	}

	render() {
		const { usersData } = this.props;

		return (
				<div className={classes.navBar}>
					<div className={classes.navBarInputWrapper}>
						<p className={classes.navBarInputLabel}> Поиск </p>
						<FormGroup className={classes.navBarInput}>
							<FormControl type="text" />
							<FormControl.Feedback>
								<Glyphicon glyph="search" />
							</FormControl.Feedback>
						</FormGroup>
					</div>

					{ usersData.map((user) => {
						return <User userData={user}/>
					})
					}
				</div>
		);
	}
}

function mapStateToProps ({ state }) {
	return {
		usersData: state.users,
	};
}

export default withRouter(connect(mapStateToProps, { ...appActions })(NavBar));
