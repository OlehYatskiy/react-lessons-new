import { createReducer } from "redux-act";

import * as actions from "./user.actions";


const initialState = {
	users:[],
	usersGetStatus: "",
	selectUser: null,
	firstName: "",
	lastName: "",
	avatarUrl: "",
};

const reducer = {
	[actions.getAllUserSaga]: (state) => ({
		...state,
		usersGetStatus: "pending"
	}),
	[actions.setAllUser]: (state, usersData) => ({
		...state,
		usersGetStatus: "success",
		users: usersData
	}),
	[actions.selectUser]: (state, selectUser) => ({
		...state,
		selectUser
	}),
	[actions.unselectUser]: (state) => ({
		...state,
		selectUser: null
	}),
	[actions.addUserProperties]: (state, target) => ({
		...state,
		[target.name]: target.value
	}),
	[actions.addNewUser]: (state) => ({
		...state,
		usersSendStatus: "sending"
	}),
	[actions.addNewUserStatus]: (state) => ({
		...state,
		usersSendStatus: "success"
	}),
};


export default createReducer(reducer, initialState);
