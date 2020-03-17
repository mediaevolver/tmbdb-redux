import * as Actions from '../actions/movies';

const initialState = {
	all: [],
	isFetched: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case Actions.LOAD_MOVIES_REQUEST:
			return {
				...state,
				all: [],
				isFetched: false
			};
		case Actions.LOAD_MOVIES_SUCCESS:
			return {
				...state,
				all: action.payload,
				isFetched: true
			};
		default:
			return state;
	}
};