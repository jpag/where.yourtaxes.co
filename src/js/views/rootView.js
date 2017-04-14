// import $ from 'webpack-zepto';
// import is from 'is_js';
import {READY, HIDE} from '../constants/classes';
import CONFIG from '../constants/config';
import GlobalStore from '../models/globalStore';
import ROOT_TEMPLATE from '../templates/root.html';
import fedTaxCal from '../helpers/fedTax';
import addCommas from '../helpers/addCommas';

// https://regex101.com/r/gHzNLK/1
const sanitizeRegEx = new RegExp(/[a-zA-Z()`~!@#$%^&*_+\-=><,.$|\/\\\]\[]+/, 'g');

class RootView {

	constructor(obj) {
		this._data = obj;
	}

	render(_el) {
		this._data.copy = CONFIG.root;
		this.el = this.createRootFromTemplate(ROOT_TEMPLATE(this._data));

		this.currentInputState = 'income';

		_el.append(this.el);

		this.defineDOMElements();

		this.previousValue = {
			income: '',
			tax: '',
		};

		this.bindEvents();

	}

	createRootFromTemplate( template ) {
		let d = document.createElement('div');
		d.innerHTML = template;
		return d.firstChild;
	}

	defineDOMElements() {
		this.rootWrapper = document.querySelector('#content-' + this._data.UUID);

		this.el_dIncome = this.rootWrapper.querySelector("p.directions-input-income");
		this.el_dTaxes = this.rootWrapper.querySelector("p.directions-input-tax-paid");

		this.el_fIncome = this.rootWrapper.querySelector(".form.input-income");
		this.el_fTaxes = this.rootWrapper.querySelector(".form.input-taxes");

		this.el_income_input = this.el.querySelector("input.income");
		this.el_taxespaid_input = this.el.querySelector("input.taxespaid")

		this.el_toggle = this.rootWrapper.querySelectorAll("a.tax-input-toggle");
		this.el_cal_btns = this.el.querySelectorAll(".calculate")
	}

	bindEvents() {
		GlobalStore.on('change:scroll', this.scrollUpdate.bind(this));
		GlobalStore.on('change:viewport', this.onResize.bind(this));

		// bind children:
		this.el_income_input.addEventListener('keyup', this.sanitizeInput.bind(this));
		this.el_taxespaid_input.addEventListener('keyup', this.sanitizeInput.bind(this));

		for( let c = 0; c < this.el_cal_btns.length; c++) {
			this.el_cal_btns[c].addEventListener('click', this.calculate.bind(this));
		}

		for( let t = 0; t < this.el_toggle.length; t++) {
			this.el_toggle[t].addEventListener('click', this.toggleInputType.bind(this))
		};
	}

	toggleInputType() {
		// console.log(this.currentInputState, this.el_fIncome, this.el_fTaxes);

		if (this.currentInputState == 'income') {
			this.el_dTaxes.classList.remove(HIDE);
			this.el_dIncome.classList.add(HIDE);

			this.el_fTaxes.classList.remove(HIDE);
			this.el_fIncome.classList.add(HIDE);

			this.currentInputState = 'tax';
		} else {

			this.el_dTaxes.classList.add(HIDE);
			this.el_dIncome.classList.remove(HIDE);

			this.el_fTaxes.classList.add(HIDE);
			this.el_fIncome.classList.remove(HIDE);

			this.currentInputState = 'income';
		}
	}


	sanitizeInput(e) {

		const isalpha = e.target.value.search(sanitizeRegEx);

		if (this.previousValue[this.currentInputState] === e.target.value) {
			// no change
			return;
		}

		if (isalpha >= 0) {
			e.target.value = e.target.value.replace(sanitizeRegEx, '');
		}

		// sanitized. now add commas to input:
		// e.target.value = String(e.target.value).replace(/(.)(?=(\d{3})+$)/g,'$1,')
		e.target.value = addCommas(e.target.value);


		if (e.target.value.length > 0) {
			e.target.parentNode.classList.add(READY);
		} else {
			e.target.parentNode.classList.remove(READY);
		}

		this.previousValue[this.currentInputState] = e.target.value;
	}

	calculate(e) {

		if (!e.target.parentNode.classList.contains(READY)) {
			return;
		}

		console.log(' calculate! using: ', this.currentInputState);

		let income = parseInt(this.el_income_input.value.replace(sanitizeRegEx, ''), 10);
		let status, taxesPaid;
		if (this.currentInputState == 'income') {

			if ( income < 999 ) {
				this.pullError('Income must be $1000 or more.');
				return;
			}

			if ( isNaN(income) ) {
				this.pullError('Income is not a Number.');
				return;
			}

			status = document.querySelector('input[name="filing-status"]:checked').value;
			taxesPaid = fedTaxCal( income, status );
		} else {

			income = 'NA';
			status = 'NA';

			taxesPaid = parseInt(this.el_taxespaid_input.value.replace(sanitizeRegEx, ''), 10);
		}

		console.log('income ', income, ' tax ', taxesPaid);

		GlobalStore.set('calculateTaxes', {
			taxespaid: taxesPaid,
			income: income,
			taxespaidEN: addCommas(taxesPaid),
			incomeEN: addCommas(income),
			status: status,
		});
	}

	pullError(msg) {
		console.log(' post erro! ', msg);
	}

	scrollUpdate() {

	}

	onResize() {

	}


	destroy() {
		console.log('destroy view...');
	}
}

module.exports = RootView;
