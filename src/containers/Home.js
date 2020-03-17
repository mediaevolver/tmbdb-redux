import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';

class Home extends Component {

	static path = '/:page(\\d+)?';

	componentDidMount() {
	}
	render() {
		return (
			<div className="movies">
				<title>The Movies</title>
				<MoviesList />
			</div>
		)
	}
}
export default (Home);