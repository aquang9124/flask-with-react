import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavContainer from './components/nav-container';

class AppContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: []
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<NavContainer />
			</div>
		);
	}
}

ReactDOM.render(<AppContainer />, document.querySelector('.content'));