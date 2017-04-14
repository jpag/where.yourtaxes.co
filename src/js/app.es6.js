// import 'babel-polyfill';
// import $ from 'webpack-zepto';
// import TweenMax from 'TweenMax';
// import is from 'is_js';

import addCommas from './helpers/addCommas';
import {HIDE} from './constants/classes';
import GlobalStore from './models/globalStore';
import RootComponent from './components/rootComponent';
import ResizeComponent from './components/resizeComponent';

class App {

	constructor() {

		console.log('--- APP ---'); // @preserve eslint-disable-line no-console
		console.log(' VERSION ', VERSION ); // @preserve eslint-disable-line no-console
		console.log(' PRODUCTION ', PRODUCTION); // @preserve eslint-disable-line no-console
		console.log(' TIMESTAMP ', TIMESTAMP); // @preserve eslint-disable-line no-console
		console.log('\n\n\n'); // @preserve eslint-disable-line no-console

		new ResizeComponent({});

		new RootComponent({
			callback: this.start.bind(this),
		});
	}

	start() {
		setTimeout(() => {
			var cw = document.querySelectorAll(".content-wrapper");
			for (var c = 0; c < cw.length; c++) {
				cw[c].classList.remove(HIDE);
			}
			GlobalStore.set('forceResize', GlobalStore.get('forceResize') + 1 );

			// this.testResultsPage();

		}, 150 );

		// const TrackingView = require('./views/trackingView');
		// this.trackingView = new TrackingView();
		// TweenMax.ticker.addEventListener("tick", (e) => this.raf());
	}

	testResultsPage() {
		// test the results page
		if (!PRODUCTION) {
			GlobalStore.set('calculateTaxes', {
				taxespaid: 40000,
				income: 200000,
				taxespaidEN: addCommas(40000),
				incomeEN: addCommas(40000),
				status: 'single',
			});
		}
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
