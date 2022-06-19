/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
// https://ru.vuejs.org/v2/guide/index.html

 
var memodeck = (function (onoff) {

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