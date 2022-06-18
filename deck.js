/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

'use strict';
 
var memodeck = (function (onoff) {
	'use strict';
	var apiCode = 'MeMoDeCk';
	var ss = '';
	
	function memodeck() {
		var n = 'test 2';
	    memodeck.ss = n;
		
		return self;
	}

	memodeck();
	alert(memodeck.ss);

	return memodeck;
})(true);