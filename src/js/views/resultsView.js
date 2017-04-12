import GlobalStore from '../models/globalStore';
import RESULTS_TEMPLATE from '../templates/results.html';

import disData from '../constants/data';
import addCommas from '../helpers/addCommas';
const round = function(v) {
	let val = Math.round( v * 100) / 100;
	// TODO add an extra 0 after the decimal?
	return val;
}

class ResultsView {

	constructor(obj) {
		this._data = obj;
		this._data.dis = disData;
	}

	render(_el) {
		const incomeTaxesCollected = this._data.dis.datapoints.iitce.value;
		const userPaid = this._data.calculateTaxes.taxespaid;
		for(let d = 0; d < this._data.dis.spending.length; d++) {
			this._data.dis.spending[d].userpaid = addCommas( round( (userPaid / incomeTaxesCollected) * this._data.dis.spending[d].cpy ));
		}

		this.el = this.createRootFromTemplate(RESULTS_TEMPLATE(this._data));

		_el.append(this.el);

		this.defineDOMElements();
		this.bindEvents();

	}

	createRootFromTemplate( template ) {
		let d = document.createElement('div');
		d.innerHTML = template;
		return d.firstChild;
	}

	defineDOMElements() {
		this.rootWrapper = document.querySelector('#content-' + this._data.UUID);

	}

	bindEvents() {
		GlobalStore.on('change:scroll', this.scrollUpdate.bind(this));
		GlobalStore.on('change:viewport', this.onResize.bind(this));

		// bind children:
		this.el.querySelector('a.cta').addEventListener('click', this.goBack.bind(this));
	}

	scrollUpdate() {

	}

	onResize() {

	}

	goBack() {
		GlobalStore.set('currentState', 'root');
	}
}

module.exports = ResultsView;
