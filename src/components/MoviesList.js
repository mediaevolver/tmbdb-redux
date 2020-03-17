import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LoadMovies } from '../actions/movies';

import MovieItem from '../components/MovieItem';
import { Container, Row, Col } from "react-bootstrap";


class MoviesList extends Component {

	componentDidMount() {
		const { match, LoadMovies } = this.props;
		LoadMovies(match.params.page);
	}

	render() {
		const { movies } = this.props;

		return (
			<div>
				<h3>Last Added Movies</h3>
				<Container>
					<Row>
						{movies.results && movies.results.map((movie, index) => (
							<Col key={index} xs={12} sm={6} md={3} lg={2}>
								<MovieItem key={movie.id} movie={movie} />
							</Col>
						))}
					</Row>
				</Container>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
	{ LoadMovies },
	dispatch
);

const mapStateToProps = (state) => {
	return {
		movies: state.movies.all,
		isFetched: state.movies.isFetched,
	};
};

export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesList)));