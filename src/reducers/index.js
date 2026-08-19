import { combineReducers } from 'redux';

import images from './images';
import movie from './movie';
import movies from './movies';

export default combineReducers({
	movie,
	images,
	movies
});
