import React, {Component} from 'react';

export default class AboutContainer extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<hr className="flaired-hr" />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-4">
						<h3>Hello world 2</h3>
					</div>
					<div className="col-xs-12 col-md-8">
						<h3>Hello World</h3>
					</div>
				</div>
			</div>
		);
	}
}