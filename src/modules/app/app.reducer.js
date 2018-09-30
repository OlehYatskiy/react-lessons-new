
import { showLoader,
				hideLoader,
				changeLoader,
				fetchAllDataStart,
				fetchAllDataSuccess,
				fetchAllDataFailure,
				fetchUserStart,
				fetchUserSuccess,
				fetchUserFailure } from '../constants';


const reducer = (
	state = {
		loading: true,
		name: 'Oleh',
		posts:[],
		fetchAllDataStatus: "",
		failureMessage: "",
		fetchUserDataStatus: "",
		user:[]
	},
	 action) => {
	const payload = action.payload;

	switch (action.type) {
		case showLoader: {
			return { ...state, loading: payload}
		}

		case hideLoader: {
			return { ...state, loading: payload}
		}

		case changeLoader: {
			return { ...state, loading: payload}
		}

		case fetchAllDataStart: {
			return { ...state,
				 fetchAllDataStatus: payload
			 }
		}

		case fetchAllDataSuccess: {
			return { ...state,
				 fetchAllDataStatus: payload.dataStatus,
				 posts: payload.data
			 }
		}

		case fetchAllDataFailure: {
			return { ...state,
				fetchAllDataStatus: payload.dataStatus,
				failureMessage: payload.failureMessage
			 }
		}

		case fetchUserStart: {
			return { ...state,
				fetchUserDataStatus: payload
			}
		}

		case fetchUserSuccess: {
			return { ...state,
				fetchUserDataStatus: payload.dataStatus,
				user: payload.data
			}
		}

		case fetchUserFailure: {
			return { ...state,
				fetchUserDataStatus: payload.dataStatus,
				failureMessage: payload.failureMessage
			}
		}

	}
	return state;
}

export default reducer;
