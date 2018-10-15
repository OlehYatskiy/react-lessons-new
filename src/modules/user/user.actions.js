import { createAction } from "redux-act";


// initialize

export const getAllUserSaga = createAction("get all user");
export const setAllUser = createAction("set all user");
export const selectUser = createAction("select user");
export const unselectUser = createAction("unselect user");
export const addUserProperties = createAction('add user properties');
export const addNewUser = createAction('add new user');
export const addNewUserStatus = createAction('add new user status');
