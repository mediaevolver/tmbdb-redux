import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LoadMovie } from '../actions/movie';
import StarRatings from 'react-star-ratings';
import { Container, Row, Col } from "react-bootstrap";


class Movie extends Component {

	static path = '/movie/:movie_id(\\d+)/:cast?';

	componentDidMount() {
		const { match, LoadMovie } = this.props;
		LoadMovie(match.params.movie_id);
	}

	componentWillReceiveProps(nextProps) {
		const { match, LoadMovie } = this.props;
		if (match.params.movie_id !== nextProps.match.params.movie_id) {
			LoadMovie(nextProps.match.params.movie_id);
		}
	}

	imageLoaded = (e) => {
		e.target.classList.add('img-loaded');
	};

	render() {
		const { movie, isFetched } = this.props;

		if (!isFetched)
			return (
				<div className="loading-box"></div>
			);

		return (
			<div>
				<title>{movie.title}</title>
				<div className="movie-single">
					<div className="movie-single-inner">
						<Container>
							<Row>
								<Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 7, order: 2 }} lg={{ span: 4, order: 1 }}>
									<div className="movie-image-container">
										<img className="movie-image" alt="movie poster large" src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} onLoad={this.imageLoaded} />
									</div>
								</Col>
								<Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 5, order: 1 }} lg={{ span: 8, order: 2 }}>
									<div className="movie-details">
										<StarRatings
											numberOfStars={Math.round(movie.vote_average)}
											starDimension="17px"
											starSpacing="0px"
										/>
										<span>{Math.round(movie.vote_average)} / 10</span>
										<div className="movie-title">
											{movie.title}
										</div>
										{movie.overview ? (
											<div className="movie-description">
												{movie.overview}
											</div>
										) : ''}
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
	{ LoadMovie },
	dispatch
);

const mapStateToProps = (state) => {
	return {
		movie: state.movie.data,
		isFetched: state.movie.isFetched
	};
};

export default (connect(mapStateToProps, mapDispatchToProps)(Movie));