import GlobalStore from '../models/globalStore';
import RESULTS_TEMPLATE from '../templates/results.html';

import disData from '../constants/data';
import addCommas from '../helpers/addCommas';
import roundToDollarValues from '../helpers/roundToDollarValues';

class ResultsView {

	constructor(obj) {
		this._data = obj;
		this._data.dis = disData;
	}

	render(_el) {
		const incomeTaxesCollected = this._data.dis.datapoints.iitce.value;
		const totalFederalRevenue = this._data.dis.datapoints.ttr.value;
		const userPaid = this._data.calculateTaxes.taxespaid;
		// we have to factor in that federal taxes are only a portion of the total federal revenue
		const percentIncomeTaxIsOfTotalRevenue = incomeTaxesCollected / totalFederalRevenue;
		// user's taxes are only a portion of the total federal taxes collected:
		const percentOfUsersTaxToTotalIncomeTax = userPaid / incomeTaxesCollected;

		for(let d = 0; d < this._data.dis.spending.length; d++) {
			// user paid formula = ( userTaxes / Total Income Tax Collected ) / Total Federal Revenue * cost of item.
			this._data.dis.spending[d].userpaid = addCommas( roundToDollarValues( (percentOfUsersTaxToTotalIncomeTax * percentIncomeTaxIsOfTotalRevenue) * this._data.dis.spending[d].cpy ));
		}

		this.el = this.createRootFromTemplate(RESULTS_TEMPLATE(this._data));

		_el.append(this.el);

		this.defineDOMElements();
		this.bindEvents();

		if (window.ga) {
			window.ga('send', 'pageview', '/results');
		}
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
