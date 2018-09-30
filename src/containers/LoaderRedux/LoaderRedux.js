import React, { Component, Fragment } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { bool, func } from "prop-types";


import Loader from "../Loader";
import * as appActions from "../../modules/app/app.actions";


class LoaderRedux extends Component {

	static propTypes = {
		loading: bool,
		hideLoader: func,
		showLoader: func,
		changeLoader: func,
	}

	onShowLoaderBntClick = () => {
		this.props.appActions.showLoader();
	}

	onHideLoaderBntClick = () => {
		this.props.appActions.hideLoader();
	}

	onChangeLoaderBtnClick = () => {
		const { loading } = this.props;
		this.props.appActions.changeLoader(!loading);
	}

	render() {
		const { loading, name } = this.props;
		console.log(this.props);
		console.log(loading);

		return(
			<Fragment>

				<p> my name is {name}</p>

				<button onClick={this.onShowLoaderBntClick}>Show</button>
				<button onClick={this.onHideLoaderBntClick}>Hide</button>
				<button onClick={this.onChangeLoaderBtnClick}>Change Loader State</button>
			</Fragment>
		)
	}
}

function mapStateToProps({ app }) {
	return {
		loading: app.loading,
		name: app.name
	};
}

function mapDispatchToProps(dispatch) {
	return {
		appActions: bindActionCreators(appActions, dispatch),
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(LoaderRedux);
// export default connect(mapStateToProps, { ...appActions })(LoaderRedux);
