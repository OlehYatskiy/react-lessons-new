import thunk from "redux-thunk";
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import app from "./app/app.reducer";

const rootReducer = combineReducers({ app: app });

const store = createStore(rootReducer,
	undefined,
	compose(
		applyMiddleware( thunk.withExtraArgument()),
		window.devToolsExtension ? window.devToolsExtension() : (f) => f
	));

export default store;
