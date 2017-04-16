// import $ from 'webpack-zepto';

import GlobalStore from '../models/globalStore';
import BaseComponent from './baseComponent';

import RootView from '../views/rootView';
import ResultsView from '../views/resultsView';

class RootComponent extends BaseComponent {

	constructor(obj) {
		super(obj);
		this.el = document.querySelector('#root');
		console.log(this.el.parentNode, this.el);
		this.elParentWrapper = this.el.parentNode;

		this.currentState = 'root';
		GlobalStore.set('currentState', this.currentState);
		// GlobalStore.set('forceResize', 1);

		this.constructRoot();
		this.renderChildren();

		if (obj.callback) {
			obj.callback();
		}
	}

	constructRoot() {
		this.children.set('root',
			new RootView({
				UUID: 'root'
			})
		);
	}

	constructResults() {
		this.children.set('results',
			new ResultsView({
				UUID: 'results',
				calculateTaxes : GlobalStore.get('calculateTaxes'),
			})
		);
	}

	renderChildren() {
		for (let [index, child] of this.children) {
			console.log(index, child);
			child.render(this.el);
		}
		GlobalStore.set('forceResize', GlobalStore.get('forceResize') + 1 );
		window.scrollTo(0,0);
	}

	//CALLED FROM SUPERCLASS
	bindEvents() {
		GlobalStore.on('change:scroll', this.scrollUpdate.bind(this));
		GlobalStore.on('change:viewport', this.viewportUpdate.bind(this));
		GlobalStore.on('change:calculateTaxes', this.onCalculate.bind(this));
		GlobalStore.on('change:currentState', this.onStateChange.bind(this));

		document.querySelector('header a.logo').addEventListener('click', this.headerLogoClicked.bind(this));
	}

	headerLogoClicked(e) {
		e.preventDefault();
		if (this.currentState !== 'root') {
			this.currentState = 'root';
			this.cleanChildren();
			this.constructRoot();
			this.renderChildren();
		}
	}

	onStateChange(e) {
		// go back to root view.
		if (this.currentState != e ) {
			console.log(' do not match, update the state!');
			console.log(e, 'vs' , this.currentState);
			if (e == 'root') {
				this.currentState = 'root';
				this.cleanChildren();
				this.constructRoot();
				this.renderChildren();
			}
		}
	}

	onCalculate() {
		// console.log(' on cal change', e);
		this.currentState = 'results';
		GlobalStore.set('currentState', this.currentState);

		this.renderResults();
	}

	cleanChildren() {
		this.destroy()
		this.children = new Map();
		while (this.el.firstChild) {
			this.el.removeChild(this.el.firstChild);
		}
	}

	renderResults() {
		this.cleanChildren();
		this.constructResults();
		this.renderChildren();
	}

	scrollUpdate() { }

	viewportUpdate(e) {
		// console.log(' new viewport ', e);

		const newParentHeight = e.height * .6;
		const padding = 25;
		const elHeight = ((this.el.innerHeight) ? this.el.offsetHeight : this.el.clientHeight) + padding;
		this.elParentWrapper.style.height = ((newParentHeight >= elHeight) ? newParentHeight : elHeight) + 'px';
	}
}


export default RootComponent;
