import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './containers/Home';
import Movie from './containers/Movie';

export default (
	<Switch>
		<Route exact path={Home.path} component={Home} />
		<Route exact path={Movie.path} component={Movie} />
	</Switch>
);