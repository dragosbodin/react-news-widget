import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moxios from 'moxios';

import App from './App';

describe(App, () => {
	beforeEach(() => {
		moxios.install(axios);
	});

	afterEach(() => {
		moxios.uninstall(axios);
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
