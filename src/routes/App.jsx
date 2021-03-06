import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Home from './home/Home.jsx';
import About from './about/About.jsx';

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<header>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</header>

				<main>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
				</main>
			</div>
		)
	}
}
