import $ from 'webpack-zepto';
import GlobalStore from '../models/globalStore';

const trackingEvents = {
	trackingEvent: {
		event: "click:uiButton"
	}
}

class TrackingView {
	constructor() {
		this.bindEvents();
	}

	bindEvents() {
		$('.YOUR-UI-ELEMENT').on('click', () => {
			this.pushData(trackingEvents.trackingEvent);
		});
	}

	pushData(obj) {
		console.log('\nAnalytics/Tag Manager pushing data', obj);
		if (typeof window.dataLayer !== 'undefined') {
			dataLayer.push(obj);
		} else {
			console.log('=========\nrunning in prod mode:'+PRODUCTION+' and no Analytics posted\n==========\n');
		}
	}
}

module.exports = TrackingView;
