import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from '../components/About';
import Brochure from '../components/Brochure';
import Capstone from '../components/Capstone';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import MovieApp from '../components/MovieApp';
import PageNotFound from '../components/PageNotFound';
import Portfolio from '../components/Portfolio';

const AppRouter = () => (

	<Router>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/brochure'}><Brochure /></Route>
				<Route path={'/capstone'}><Capstone /></Route>
				<Route path={'/movieapp'}><MovieApp /></Route>
				<Route path={'/portfolio'}><Portfolio /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
			<Footer />
		</div>
	</Router>

);

export default AppRouter;
