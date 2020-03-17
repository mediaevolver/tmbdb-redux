import { api } from '../services';

export const LOAD_MOVIE_REQUEST = 'LOAD_MOVIE_REQUEST';
export const LOAD_MOVIE_SUCCESS = 'LOAD_MOVIE_SUCCESS';
export const LOAD_MOVIE_ERROR = 'LOAD_MOVIE_ERROR';

export const LoadMovie = (movie_id) => {
	return (dispatch) => {
		dispatch(onLoadMovie.request());
		return onLoadMovie.fetch(movie_id)
			.then(({ data }) => {
				dispatch(onLoadMovie.success(data));
			})
			.catch((error) => {
				dispatch(onLoadMovie.error(error))
			});
	}
};

const onLoadMovie = {
	request: () => ({
		type: LOAD_MOVIE_REQUEST
	}),
	fetch: (movie_id) => {
		return api.request.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`);
	},
	success: (payload) => {
		return {
			type: LOAD_MOVIE_SUCCESS,
			payload
		}
	},
	error: (payload) => ({
		type: LOAD_MOVIE_ERROR,
		errors: payload
	})
};