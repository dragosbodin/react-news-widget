import React, { Component } from 'react';

import NewsWidget from './News/NewsWidget';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="row">
						<div className="col-sm-7 col-md-6">
							<NewsWidget/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
