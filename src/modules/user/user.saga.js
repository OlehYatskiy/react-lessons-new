/* eslint-disable no-unused-vars,import/no-duplicates */
import * as userAction from "./user.actions";
import { takeEvery, put, select } from "redux-saga/effects";

// import customToastify from "../../customFunction/customToastify";
import { postRequest } from "../../api";

function *getAllUser() {
	try {
		const result = yield postRequest("/getAllUsers", {
		});

		yield put(userAction.setAllUser(result));
	} catch (error) {
		if (!error) {
			console.log(error);
		} else {
		}
	}
}

function *addNewUser(action) {//???
	const payload = action.payload;
	try {
		yield postRequest('/getUsersDataBase', payload );
		yield userAction.addNewUserStatus();

	} catch (error) {
		if (!error) {
			console.log(error);
		} else {
		}
	}
}



export function* watchUser() {
	yield takeEvery(userAction.getAllUserSaga, getAllUser);
	yield takeEvery(userAction.addNewUser, addNewUser);
}
