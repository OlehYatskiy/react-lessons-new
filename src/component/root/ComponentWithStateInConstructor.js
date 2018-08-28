import React, { Component } from "react";


class ComponentWithStateInConstructor extends Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	render () {
		return (
			<div>{
				this.state.date.getDay()
			}</div>
		)
	}
}

export default ComponentWithStateInConstructor
