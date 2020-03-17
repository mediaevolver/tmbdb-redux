import { api } from '../services';

export const LOAD_MOVIES_REQUEST = 'LOAD_MOVIES_REQUEST';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_ERROR = 'LOAD_MOVIES_ERROR';

export const LoadMovies = () => {
	return (dispatch) => {
		dispatch(onLoadMovies.request());
		return onLoadMovies.fetch()
			.then(({ data }) => {
				dispatch(onLoadMovies.success(data));
			})
			.catch((error) => {
				dispatch(onLoadMovies.error(error))
			});
	}
};

const onLoadMovies = {
	request: () => ({
		type: LOAD_MOVIES_REQUEST
	}),
	fetch: () => {
		return api.request.get(`https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&vote_average.gte=1&page=1`);
	},
	success: (payload) => {
		return {
			type: LOAD_MOVIES_SUCCESS,
			payload
		}
	},
	error: (payload) => ({
		type: LOAD_MOVIES_ERROR,
		errors: payload
	})
};
