import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

class MovieItem extends Component {

	imageLoaded = (e) => {
		e.target.classList.add('img-loaded');
	};

	render() {
		const { movie } = this.props;
		return (
			<div className="movie">
				<Link to={`/movie/${movie.id}`}>
					{movie.poster_path && (
						<img className="movie-image" alt="movie poster" src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} onLoad={this.imageLoaded} />
					)}
				</Link>
				<StarRatings
					numberOfStars={Math.round(movie.vote_average)}
					starDimension="15px"
					starSpacing="0px"
				/>
				<Link to={`/movie/${movie.id}`} className="movie-title">
					{movie.title}
				</Link>
			</div>
		)
	}
}

export default (MovieItem);