import React, { Component, Fragment } from 'react';
import { string, bool, func, obj, any, number } from 'prop-types';

import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
state = {
  textRender: false,
}

onClickButton = () => {
  this.setState({
    textRender: !this.state.textRender
  });
}

	render () {
    const { textRender } = this.state;

		return (
      <ChildComponent textRender={textRender} changeTextRenderState={this.onClickButton} />
		);
	}
}

export default ParentComponent;
