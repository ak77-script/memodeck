/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

 
let memodeck = (function (onoff) {
	// ссылка на d3.js
	// вся работа с DOM осуществляется через библиотеку Data Driven Documents 
	const _dom = d3;

	let containerId = 'cntnr';
	let getstartbtnId = 'getStart';
	
	function memodeck() {
		// инициализация
		let self = this;
		self.d = _dom;
		let _main = self.d.select('main');
		
		return self;
	}

	if (onoff) {
		let md = memodeck();
	}
	
	return memodeck;
})(true);