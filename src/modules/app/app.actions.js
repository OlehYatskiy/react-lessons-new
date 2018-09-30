
export const showLoader = () => {
	return {
		type: 'showLoader',
		payload: true
	};
}

export const hideLoader = () => {
	return {
		type: 'hideLoader',
		payload: false,
	};
}

export const changeLoader = (value) => {
	return {
		type: 'changeLoader',
		payload: value
	};
}

export const fetchAllDataStart = () => {
	return {
		type: 'fetchAllDataStart',
		payload: 'pending'
	};
}

export const fetchAllDataSuccess = (data) => {
	return {
		type: 'fetchAllDataSuccess',
		payload: {
			dataStatus: 'success',
			data: data
		}
	};
}

export const fetchAllDataFailure = (failure) => {
	return {
		type: 'fetchAllDataSuccess',
		payload: {
			dataStatus: 'failure',
			failureMessage: failure
		}
	};
}

export const fetchUserStart = () => {
	return {
		type: 'fetchUserStart',
		payload: 'pending'
	};
}

export const fetchUserSuccess = (data) => {
	return {
		type: 'fetchAllDataSuccess',
		payload: {
			dataStatus: 'success',
			data: data
		}
	};
}

export const fetchUserFailure = (failure) => {
	return {
		type: 'fetchUser',
		payload: {
			dataStatus: 'failure',
			failureMessage: failure
		}
	};
}


export const fetchAllData = () => async(dispatch, getState) => {
	dispatch(showLoader());
	dispatch(fetchAllDataStart());
	try {

		let result = await fetch('https://jsonplaceholder.typicode.com/posts');
		if(result.status === 404) {
			dispatch(fetchAllDataFailure("Not found page"));
		}else {
			result = await result.json();
			dispatch(fetchAllDataSuccess(result));
			dispatch(hideLoader());
		}
	}
	catch (e) {
		dispatch(fetchAllDataFailure(e));
		dispatch(hideLoader());
	}
};

export const fetchUser = (id) => async(dispatch, getState) => {
	dispatch(showLoader());
	dispatch(fetchUserStart());
	try {

		let result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		if(result.status === 404) {
			dispatch(fetchUserFailure("Not found page"));
		}else {
			result = await result.json();
			dispatch(fetchUserSuccess(result));
			dispatch(hideLoader());
		}
	}
	catch (e) {
		dispatch(fetchUserFailure(e));
		dispatch(hideLoader());
	}
};
