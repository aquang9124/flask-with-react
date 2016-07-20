import React, {Component} from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar-white">
				<ul className="centered-nav">
					<li className="main-nav-item"><a href="javascript: void(0)">Home</a></li>
					<li className="main-nav-item"><a href="javascript: void(0)">About</a></li>
					<li className="main-nav-item"><a href="javascript: void(0)">Search</a></li>
					<li className="main-nav-item"><a href="javascript: void(0)">Contact</a></li>
				</ul>
			</nav>
		);
	}
}