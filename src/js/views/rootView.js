import $ from 'webpack-zepto';
import is from 'is_js';

import GlobalStore from '../models/globalStore';
import ROOT_TEMPLATE from '../templates/root.html';


class RootView {

	constructor(obj) {
		this._data = obj;
	}

	render() {
		this.el = this.createRootFromTemplate(ROOT_TEMPLATE(this._data));
		this.bindEvents();

		setTimeout(() => {
			this.defineDOMElements();
		}, 300);

		return this.el;
	}

	createRootFromTemplate( template ) {
		let d = document.createElement('div');
		d.innerHTML = template;
		return d.firstChild;
	}

	defineDOMElements() {
		this.$rootWrapper = $('#content-' + this._data.UUID);
	}

	bindEvents() {
		GlobalStore.on('change:scroll', this.scrollUpdate.bind(this));
		GlobalStore.on('change:viewport', this.onResize.bind(this));

		$(this.el).on('click', () => {
			alert('hello!');
		})
	}

	scrollUpdate(obj) {
	}

	onResize(obj) {
	}
	
}

module.exports = RootView;
