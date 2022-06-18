/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

'use strict';
 
var memodeck = (function () {
	'use strict';
	var apiCode = 'MeMoDeCk';
	
	
	function memodeck() {
		var n = 'test 2';
		memodeck.n = n;
		
		return self;
	}

	memodeck();
	alert(memodeck.n);

	return memodeck;
})();