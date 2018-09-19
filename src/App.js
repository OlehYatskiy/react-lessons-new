import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Box from "./Box/Box";

class App extends Component {
  constructor (props) {
    super(props)
	}

	render() {

		return (
			<div>

        <Box color={"red"} width={"150px"} height={"150px"}>
					<Box color={"blue"} width={"15px"} height={"15px"} />
					<Box color={"black"} width={"50px"} height={"50px"} />
				</Box>

			</div>
		);
	}
}
export default App
