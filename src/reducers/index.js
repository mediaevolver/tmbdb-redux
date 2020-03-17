import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import images from './images';
import movie from './movie';
import movies from './movies';

export default combineReducers({
	routing: routerReducer,
	movie,
	images,
	movies
});