import React, {Component} from 'react';
import Navbar from './navbar';
import NavbarBrand from './navbar-brand';

export default class NavContainer extends Component {
	render() {
		return (
			<nav className="navbar-wrapper">
				<NavbarBrand />
				<Navbar />
			</nav>
		);
	}
}