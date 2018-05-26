import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
	google: {
		families: ['Lato:400,700', 'sans-serif']
	}
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
