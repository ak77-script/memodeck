/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
 
let memodeck = (function (onoff) {
	// ссылка на d3.js
	// вся работа с DOM осуществляется через библиотеку Data Driven Documents 
	const _dom = d3;

	let containerId = 'main';
	let getstartbtnId = 'getStart';
	
	function memodeck() {
		// инициализация
		let self = this;
		self.d = _dom;

		const _body = self.d.select('body');
		const _header = _body.select('header');
		const _nav = _body.select('nav');
		const _main = _body.select('main');
		const _footer = _body.select('footer');
		
		self.body = _body;
		self.header = _header;
		self.nav = _nav;
		self.main = _main;
		self.footer = _footer;
		
		let showGreetings = function(onoff = true) {
			if (onoff) {
				_main.select('#greetings').style("visibility", "hidden");
			} else {
				_main.select('#greetings').style("visibility", "visible");
			}
		}

		showGreetings(false);
		self.showGreetings = showGreetings();
		
		return self;
	}

	if (onoff) {
		let md = memodeck();
		//md.main.hide();
	}
	
	return memodeck;
})(true);