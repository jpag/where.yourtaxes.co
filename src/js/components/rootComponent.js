import $ from 'webpack-zepto';

import GlobalStore from '../models/globalStore';
import BaseComponent from './baseComponent';

import RootView from '../views/rootView'


class RootComponent extends BaseComponent {

	constructor(obj) {
		super(obj);
		this.$el = $('#root');

		this.constructChildren();
		this.renderChildren();
	}

	constructChildren() {
		this.children.set('root',
			new RootView({
				UUID: 'root'
			})
		);
	}

	renderChildren() {
		for (let [index, child] of this.children) {
			this.$el.append(
				child.render()
			);
		}
	}

	//CALLED FROM SUPERCLASS
	bindEvents() {
		GlobalStore.on('change:scroll', this.scrollUpdate.bind(this));
	}

	scrollUpdate() { }

}


export default RootComponent;
