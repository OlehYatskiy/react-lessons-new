import React, { Component } from 'react';
import { string, bool, func, obj, any, number } from "prop-types";

import PropsComponents from "../PropsComponents/PropsComponents"


class StateComponent extends Component {
  state = {
		inputText: ""
	};

	onInputChange = (event) => {
		this.setState({
			inputText: event.target.value
		})
	};

	onClickButton = () => {
		this.setState({
			inputText: ''
		})
	}

	render () {
		const { inputText } = this.state;

		return (
			<div>
				<input type="text" value={inputText} onInput={this.onInputChange}/>
				<PropsComponents text={inputText} inputChange={this.onClickButton}/>
			</div>
		);
	}
}

export default StateComponent;
