import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom'

import store from "./modules/store";

ReactDOM.render(<Provider store={store}>
		<BrowserRouter>
				<Route path={"/"} component={App} />
				{/*<App />*/}
		</BrowserRouter>
	</Provider>,
document.getElementById('root'));
