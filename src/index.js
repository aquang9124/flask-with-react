import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavContainer from './components/nav-container';
import Header from './components/header';

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
				<Header />
			</div>
		);
	}
}

ReactDOM.render(<AppContainer />, document.querySelector('.content'));