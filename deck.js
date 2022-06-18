/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

'use strict';
 
var deck = (function () {
	'use strict';
	var n = 'test';
	
	
	function deck() {
		var n = 'test 2';
		deck.n = n;
		
		return self;
	}

	deck();
	alert(deck.n);

	return deck;
})();