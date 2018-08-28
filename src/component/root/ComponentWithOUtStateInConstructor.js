import React, { Component } from "react";


class ComponentWithOUtStateInConstructor extends Component {
	state = {
		name: "Vlad"
	}

	render () {
		return (
			<div>{
				this.state.name
			}</div>
		)
	}
}

export default ComponentWithOUtStateInConstructor
