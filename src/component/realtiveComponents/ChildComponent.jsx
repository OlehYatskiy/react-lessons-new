import React, { Component, Fragment } from 'react';
import { string, bool, func, obj, any, number } from 'prop-types';

class ChildComponent extends Component {
	static propTypes = {
    textRender: bool,
		changeTextRenderState: func,
	};

	render () {
    const { textRender, changeTextRenderState } = this.props;

		console.log('changeTextRenderState: ' + textRender);

		return (
      <Fragment>
        {textRender && <div>Hello</div>}
			  <button onClick={changeTextRenderState}>Toggle text</button>
      </Fragment>
		);
	}
}

export default ChildComponent;
