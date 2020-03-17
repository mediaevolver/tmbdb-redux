import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import routes from './routes';

// const API_MOVIES =`https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
// const API_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
// const IMG_PATH = `https://image.tmdb.org/t/p/w300`

import './assets/styles/main.css';


class App extends Component {

	render() {
		return (
			<div className="wrapper">
				<h1>Movies DB</h1>
				<div className="container">
					{routes}
				</div>
			</div>
		)
	}
}


export default (withRouter(connect(null)(App)));