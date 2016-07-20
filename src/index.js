import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavContainer from './components/nav-container';
import HeaderImage from './components/header-image';

class AppContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: []
		};
	}

	render() {
		return (
			<div className="wrapper">
				<NavContainer />
				<HeaderImage />
			</div>
		);
	}
}

ReactDOM.render(<AppContainer />, document.querySelector('.content'));