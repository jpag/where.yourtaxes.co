/*
 * this is meant to stagger load content
 * so we can load stuff after the initial page is done loading with the home page.
 */

import $ from 'webpack-zepto';
import TweenMax from 'TweenMax';
import GlobalStore from './models/globalStore';

import ScrollComponent from './components/scrollComponent';
import ResizeComponent from './components/resizeComponent';
import SecondaryComponent from './components/secondaryComponent';


class AppSecondary {

	constructor(callback) {
		this.onFinishCallback = callback;
		this.start();
	}

	start() {
		this.resizeComponent = new ResizeComponent({});
		this.resizeComponent.update();

		this.scrollComponent = new ScrollComponent({
			el: document.getElementById('content-wrapper')
		});

		new SecondaryComponent({});

		this.onFinishCallback.call();
	}
}

module.exports = AppSecondary;
