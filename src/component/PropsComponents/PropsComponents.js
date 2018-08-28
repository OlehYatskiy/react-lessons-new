import React, { Component } from "react";
import { string, bool, func, obj, any, number } from "prop-types";


class PropsComponents extends Component {
	static propTypes = {
		text: string,
		inputChange: func
	};

	// static defaultProps = {
	// 	text: "",
	// 	isChecked: false,
	// 	theme: "light"
	// }

	render () {
		const { text, inputChange } = this.props;

		return (
			<button onClick={inputChange}>{ text }</button>
		)
	}
}

export default PropsComponents
