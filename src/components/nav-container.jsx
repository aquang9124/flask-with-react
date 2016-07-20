import React, {Component} from 'react';
import Navbar from './navbar';
import NavbarBrand from './navbar-brand';

export default class NavContainer extends Component {
	render() {
		return (
			<header className="navbar-wrapper">
				<NavbarBrand />
				<Navbar />
			</header>
		);
	}
}