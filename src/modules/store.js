import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import state from "./app/app.reducer";

const rootReducer = combineReducers({ state });

const store = createStore(rootReducer, undefined, compose(applyMiddleware( thunk.withExtraArgument()),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

export default store;
