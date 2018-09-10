import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Box from "./Box/Box";

class App extends Component {
  constructor (props) {
    super(props)

    this.textInputSmartInputCreating = React.createRef();

  // this.text = "";
	}

	render() {

		return (
			<div>

				<Box propClassName={'container'} color={"black"} >
					<Box color={"red"} width={"100px"} height={"100px"} />
					<Box color={"blue"} width={"50px"} height={"50px"} >
						<Box color={'yellow'} width={'25px'} height={'25px'} />
					</Box>
				</Box>

			</div>
		);
	}
}
export default App
