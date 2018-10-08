
import { createAction } from "redux-act";
import { apiUrl } from '../../constants/config'

export const fetchAllDataStart =  createAction("fetch all data start");
export const fetchAllDataSuccess =  createAction("fetch all data success");
export const fetchAllDataFailure =  createAction("fetch all data failure");

export const fetchAllData = () => async(dispatch, getState) => {
	dispatch(fetchAllDataStart());
	try {

		let result = await fetch(`${apiUrl}/getAllUsers`, {
			method: 'post'
		});
		if(result.status === 404) {
			dispatch(fetchAllDataFailure("Not found page"));
		}else {
			result = await result.json();
			dispatch(fetchAllDataSuccess(result));
		}
	}
	catch (e) {
		dispatch(fetchAllDataFailure(e));
	}
};
