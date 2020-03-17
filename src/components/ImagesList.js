import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LoadMovieImages } from '../actions/images';

class MoviesList extends Component {

	componentDidMount() {
		const { match, LoadMovieImages } = this.props;
		LoadMovieImages(match.params.movie_id);
	}

	imageLoaded = (e) => {
		e.target.classList.add('img-loaded');
	};


	render() {
		const { images } = this.props;

		let backdrops = images.backdrops.map(image => ({
			src: `'https://image.tmdb.org/t/p/w300/'+${image.file_path}`,
			w: image.width,
			h: image.height
		}));

		return (
			backdrops.length > 0 && (
				<div className="images">
					<div items={backdrops} options={{}} />
				</div>
			)
		)
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
	{
		LoadMovieImages
	},
	dispatch
);

const mapStateToProps = (state) => {
	return {
		images: state.images.all,
		isFetched: state.images.isFetched
	};
};

export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesList)));