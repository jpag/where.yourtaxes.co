// import 'babel-polyfill';
import $ from 'webpack-zepto';
// import TweenMax from 'TweenMax';
// import is from 'is_js';

import GlobalStore from './models/globalStore';
import RootComponent from './components/rootComponent';

class App {

	constructor() {

		console.log('--- APP ---'); // @preserve eslint-disable-line no-console
		console.log(' VERSION ', VERSION ); // @preserve eslint-disable-line no-console
		console.log(' PRODUCTION ', PRODUCTION); // @preserve eslint-disable-line no-console
		console.log(' TIMESTAMP ', TIMESTAMP); // @preserve eslint-disable-line no-console
		console.log('\n\n\n'); // @preserve eslint-disable-line no-console


		new RootComponent({});

	}

	start() {
		// const TrackingView = require('./views/trackingView');
		// this.trackingView = new TrackingView();

		// TweenMax.ticker.addEventListener("tick", (e) => this.raf());
	}

	raf() {
		// update run through the RAF call stack:

		// for( var c = 0; c < GlobalStore.get('rafCallStack').length; c++) {
		// 	GlobalStore.get('rafCallStack')[c]();
		// }
	}
}


// initialize the APP do not make a global reference to it.
new App();
