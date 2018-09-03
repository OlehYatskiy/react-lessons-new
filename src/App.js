import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import ClassContainer from './components/classContainer';

class App extends Component {

	state = {
		divClass: 'default',
	}

	componentDidMount() {
		//this.refs.reFofInputText.value = this.refs.reFofInputText.className;
		// const classNamecontainer = ReactDOM.findDOMNode(this.classNamecontainer);
		// classNamecontainer.className = 'default';
	}

	classNameOutput = () => {
		console.log('className:', this.reFofInputText.className);
		//this.refs.reFofInputText.value = this.refs.reFofInputText.className;
	}

	PaintItRed = () => {
		this.setState({
			divClass: 'Red'
		})
		this.classNameOutput();
	}

	PaintItBlack = () => {
		this.reFofInputText.className = 'Black';
		setTimeout(
			this.setState({
				divClass: this.reFofInputText.className
			}), 2000
		);
		this.classNameOutput();
	}



	render() {
		let { divClass } = this.state;

		return (
			<div>
				<input
					className={divClass}
					ref={(node) => { this.reFofInputText = node; }}
					type='text'

					/>
				<button
					onClick={this.PaintItRed} >

					Paint it red
				</button>
	      <button
					onClick={this.PaintItBlack} >

					Paint it black
				</button>
				<button
					onClick={this.classNameOutput}>

					GiveClassName
				</button>
				<ClassContainer className={divClass}
					ref={(node) => { this.reFofClassContainer = node; }}
					/>

			</div>
		);
	}
}
export default App
