/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

'use strict';
 
var memodeck = (function (onoff) {
	'use strict';
	var containerId = 'cntnr';
	var ss = '';
	
	function memodeck() {

		return self;
	}

	if (onoff) {
		memodeck();
	}
	
	return memodeck;
})(true);