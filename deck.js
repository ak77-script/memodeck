/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
// https://ru.vuejs.org/v2/guide/index.html

'use strict';
 
var memodeck = (function (onoff) {
	'use strict';
	var containerId = 'cntnr';
	var getstartbtnId = 'getStart';
	
	function memodeck() {

		return self;
	}

	if (onoff) {
		memodeck();
	}
	
	return memodeck;
})(true);