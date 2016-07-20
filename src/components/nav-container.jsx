import React, {Component} from 'react';
import Navbar from './navbar';
import NavbarBrand from './navbar-brand';

export default class NavContainer extends Component {
	render() {
		return (
			<div className="row">
				<nav className="navbar-wrapper">
					<NavbarBrand />
					<Navbar />
				</nav>
			</div>
		);
	}
}