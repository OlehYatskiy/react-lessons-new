import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';
import './Box.css';


class Box extends Component {
	static propTypes = {
		propClassName: string,
		color: string,
		width: string,
		height: string
	}

	render() {
		// tell React that we want to associate the <input> ref
		// with the `textInput` that we created in the constructor
		//console.log(this.textInputSmartInput);
		const { propClassName, color, width, height } = this.props;
		return (
			<Fragment>
				<div className={propClassName}
					 style={{
						 backgroundColor: color,
						 width: width,
						 height: height
					 }}>
					{ this.props.children }
				</div>
			</Fragment>
		);
	}
}
export default Box
