import $ from 'webpack-zepto';
import is from 'is_js';

import BaseComponent from './baseComponent';
import GlobalStore from '../models/globalStore';

import VirtualScroll from 'virtual-scroll';
import cumulativeOffset from '../helpers/cumulativeOffset'
import { SCROLL_LOCK } from '../constants/event-types';
import { CONFIG } from '../constants/config';



class ScrollComponent extends BaseComponent {

	constructor(obj) {
		super(obj);
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		GlobalStore.set('scroll', {
			targetY: scrollTop,
			currentY: scrollTop
		}, true);
	}

	preconfigure() {
		this.ease = 0.07;
		this.pauseUpdate = false;
		this.smoothEnabled =
			is.not.touchDevice() &&
			is.not.edge() &&
			is.not.ie() &&
			is.not.windows() &&
			is.not.windowsTablet() &&
			is.not.windowsPhone();
	}

	bindEvents() {
		if ( this.smoothEnabled ) {
			this.virtualScroll = new VirtualScroll();
			this.virtualCallback = this.virtualScrollHandler.bind(this);
			this.virtualScroll.on(this.virtualCallback);
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'auto');
		}

		this.bindStoreEvents();
		this.bindWindowEvents();
  }

	rafUpdate() {
		if ( this.smoothEnabled ) {
			let targetY = GlobalStore.get('scroll').targetY,
					currentY = GlobalStore.get('scroll').currentY;

			if ( Math.round(currentY) == targetY || this.pauseUpdate) return;

			currentY += (targetY - currentY) * this.ease;
			GlobalStore.set('scroll', {
				targetY: targetY,
				currentY: currentY
			});
		} else {
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			GlobalStore.set('scroll', {
				targetY: scrollTop,
				currentY: scrollTop
			});
		}
	}

	scrollUpdate(scrollObj) {

		if ( !this.pauseUpdate && this.smoothEnabled ) {
			document.body.scrollTop = scrollObj.currentY;
			document.documentElement.scrollTop = scrollObj.currentY;
		}
	}

	bindStoreEvents() {
		GlobalStore.get('rafCallStack').push( () => this.rafUpdate() );
		GlobalStore.on('change:scroll', this.scrollUpdate.bind(this));
	}

	bindWindowEvents() {
		$(window).on('keyup', (e) => {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 9) {
				let scrollTop = cumulativeOffset(document.activeElement).top - GlobalStore.get('viewport').height;
				if ( $(document.activeElement).data('preventscroll') !== undefined ) return;
				GlobalStore.set('scroll', {
					targetY: scrollTop,
					currentY: scrollTop
				});
      }
    });
	}

	virtualScrollHandler(e) {
		let maxDelta = 90;
		if ( e.deltaY < 0 && e.deltaY < -maxDelta ) e.deltaY = -maxDelta;
		else if ( e.deltaY > maxDelta ) e.deltaY = maxDelta;

		let targetY = GlobalStore.get('scroll').targetY,
				scrollHeight = GlobalStore.get('viewport').scrollHeight;

		targetY -= ( Math.round(e.deltaY * 0.3) );
		if ( targetY < 0 ) targetY = 0;
		else if ( targetY > scrollHeight ) targetY = scrollHeight;


		GlobalStore.set('scroll', {
			targetY: targetY,
			currentY: GlobalStore.get('scroll').currentY
		}, true);
	}
}

export default ScrollComponent;
