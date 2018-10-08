import { createReducer } from "redux-act";

import * as appActions from "./app.actions";


const initialState = {
	users:[],
	fetchAllDataStatus: "",
	failureMessage: ""
};

const reducer = {

	[appActions.fetchAllDataStart]: (state) => ({
		...state,
		fetchAllDataStatus: "pending"
	}),

	[appActions.fetchAllDataSuccess]: (state, data) => ({
		...state,
		fetchAllDataStatus: "success",
		users: data,
	}),

	[appActions.fetchAllDataFailure]: (state, failure) => ({
		...state,
		fetchAllDataStatus: "failure",
		failureMessage: failure
	}),

}


export default createReducer(reducer, initialState);
