const origdeckon = true;

let _cards = {elts:[
	{id:1,rankstr:'Т',rank:0,suit:0,code:'ПаТефон',image:''},
	{id:2,rankstr:'2',rank:1,suit:0,code:'ПТица',image:''},
	{id:3,rankstr:'3',rank:2,suit:0,code:'ПиКа',image:''},
	{id:4,rankstr:'4',rank:3,suit:0,code:'ПеЧь',image:''},
	{id:5,rankstr:'5',rank:4,suit:0,code:'ПиПетка',image:''},
	{id:6,rankstr:'6',rank:5,suit:0,code:'ПуШка',image:''},
	{id:7,rankstr:'7',rank:6,suit:0,code:'ПиСьмо',image:''},
	{id:8,rankstr:'8',rank:7,suit:0,code:'ПиВо',image:''},
	{id:9,rankstr:'9',rank:8,suit:0,code:'ПеРец',image:''},
	{id:10,rankstr:'10',rank:9,suit:0,code:'ПуГовица',image:''},
	{id:11,rankstr:'В',rank:10,suit:0,code:'ПаВлин',image:''},
	{id:12,rankstr:'Д',rank:11,suit:0,code:'ПуДра',image:''},
	{id:13,rankstr:'К',rank:12,suit:0,code:'ПаКет',image:''},
	{id:14,rankstr:'Т',rank:0,suit:1,code:'ЧеТверть пиццы',image:''},
	{id:15,rankstr:'2',rank:1,suit:1,code:'ЧуДо-йогурт',image:''},
	{id:16,rankstr:'3',rank:2,suit:1,code:'ЧеХол',image:''},
	{id:17,rankstr:'4',rank:3,suit:1,code:'ЧаЧа',image:''},
	{id:18,rankstr:'5',rank:4,suit:1,code:'ЧеБурашка',image:''},
	{id:19,rankstr:'6',rank:5,suit:1,code:'ЧаШка',image:''},
	{id:20,rankstr:'7',rank:6,suit:1,code:'ЧаСы',image:''},
	{id:21,rankstr:'8',rank:7,suit:1,code:'Черный Фен',image:''},
	{id:22,rankstr:'9',rank:8,suit:1,code:'ЧеРешня',image:''},
	{id:23,rankstr:'10',rank:9,suit:1,code:'ЧуГунок',image:''},
	{id:24,rankstr:'В',rank:10,suit:1,code:'Чистая Вода',image:''},
	{id:25,rankstr:'Д',rank:11,suit:1,code:'ЧуДовище',image:''},
	{id:26,rankstr:'К',rank:12,suit:1,code:'ЧеК',image:''},
	{id:27,rankstr:'Т',rank:0,suit:2,code:'аТТестат',image:''},
	{id:28,rankstr:'2',rank:1,suit:2,code:'ТаТу',image:''},
	{id:29,rankstr:'3',rank:2,suit:2,code:'ТКань',image:''},
	{id:30,rankstr:'4',rank:3,suit:2,code:'ТаЧка',image:''},
	{id:31,rankstr:'5',rank:4,suit:2,code:'ТюБик',image:''},
	{id:32,rankstr:'6',rank:5,suit:2,code:'ТеЛефон',image:''},
	{id:33,rankstr:'7',rank:6,suit:2,code:'ТиСки',image:''},
	{id:34,rankstr:'8',rank:7,suit:2,code:'ТВикс',image:''},
	{id:35,rankstr:'9',rank:8,suit:2,code:'ТаРакан',image:''},
	{id:36,rankstr:'10',rank:9,suit:2,code:'ТяГач',image:''},
	{id:37,rankstr:'В',rank:10,suit:2,code:'ТВ',image:''},
	{id:38,rankstr:'Д',rank:11,suit:2,code:'эТюДник',image:''},
	{id:39,rankstr:'К',rank:12,suit:2,code:'уТКа',image:''},
	{id:40,rankstr:'Т',rank:0,suit:3,code:'БаТон',image:''},
	{id:41,rankstr:'2',rank:1,suit:3,code:'БоТинки',image:''},
	{id:42,rankstr:'3',rank:2,suit:3,code:'БоКал',image:''},
	{id:43,rankstr:'4',rank:3,suit:3,code:'БоЧка',image:''},
	{id:44,rankstr:'5',rank:4,suit:3,code:'БуБен',image:''},
	{id:45,rankstr:'6',rank:5,suit:3,code:'БоЛт',image:''},
	{id:46,rankstr:'7',rank:6,suit:3,code:'БуСы',image:''},
	{id:47,rankstr:'8',rank:7,suit:3,code:'БиФштекс',image:''},
	{id:48,rankstr:'9',rank:8,suit:3,code:'БуРатино',image:''},
	{id:49,rankstr:'10',rank:9,suit:3,code:'Биг-мак',image:''},
	{id:50,rankstr:'В',rank:10,suit:3,code:'БиВень',image:''},
	{id:51,rankstr:'Д',rank:11,suit:3,code:'БиДон',image:''},
	{id:52,rankstr:'К',rank:12,suit:3,code:'БуК',image:''}
]};

// alias for addEventListener
EventTarget.prototype.on = EventTarget.prototype.addEventListener;

// alias for HTMLElement methods
HTMLElement.prototype.find = HTMLElement.prototype.querySelector;
HTMLElement.prototype.findAll = HTMLElement.prototype.querySelectorAll;

// alias for document
const $d = document;

// alias for window
const $w = window;

// alias for getElementById
const ById = $d.getElementById;

// alias for getElementsByClassName 
const ByClass = $d.getElementsByClassName;

// alias for 
const ByTagName = $d.getElementsByTagName;

// aliases for querySelector
$d.find = $d.querySelector;
$d.findAll = $d.querySelectorAll;

let $cards = [];

// all checks
const $chk = new Map([
	['checkAll', true],
	['checkSpade', true],
	['checkHeart', true],
	['checkClub', true],
	['checkDiamond', true]
  ]);
  
for(let i = 1; i < 14; i++) $chk.set('check' + i, true);
  
for(let i = 1; i < 53; i++) $chk.set('check_card_' + i, true);

$chk.forEach(function(value, key, map) {$d.find('#' + key).checked = value });

/*
===≠===============
    form Checks
===================
*/
const $frmChk = {doc: $d, chk: $chk, cards: $cards} 

let $checkAll = $d.find('#checkAll');
$checkAll.on('click', clickAll, false);
$checkAll.$p = $frmChk;

// callback for click checkAll
function clickAll(_e) {
	let _o = _e.currentTarget.$p;
	
	let _bool = !_o.chk.get('checkAll');
	for (let pair of _o.chk) {
	    _o.chk.set(pair[0], _bool);
	    _o.doc.find('#'+pair[0]).checked = _bool;
	}

	_o.cards = getCards(_o);
} 

let $checkSpade = $d.find('#checkSpade');
$checkSpade.on('click', clickSpade, false);
$checkSpade.$p = $frmChk;

// callback for click checkSpade
function clickSpade(_e) {
	let _o = _e.currentTarget.$p;
	
	let _bool = !_o.chk.get('checkSpade');
	_o.chk.set('checkSpade',_bool);
	for (let i = 1; i < 14; i++) setCheck('check_card_'+i,_bool,_o);

	setRanksRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o);
} 

let $checkHeart = $d.find('#checkHeart');
$checkHeart.on('click', clickHeart, false);
$checkHeart.$p = $frmChk;

// callback for click checkHeart
function clickHeart(_e) {
	let _o = _e.currentTarget.$p;

    let _bool = !_o.chk.get('checkHeart');

	_o.chk.set('checkHeart',_bool);

	for (let i = 14; i < 27; i++) setCheck('check_card_'+i,_bool,_o);
	
	setRanksRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o);
} 

let $checkClub = $d.find('#checkClub');
$checkClub.on('click', clickClub, false);
$checkClub.$p = $frmChk;

//callback for click checkClub
function clickClub(_e) {
	let _o = _e.currentTarget.$p;

	let _bool = !_o.chk.get('checkClub');
	_o.chk.set('checkClub',_bool);
	for (let i = 27; i < 40; i++) setCheck('check_card_'+i,_bool,_o);
	
	setRanksRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o);
}

let $checkDiamond = $d.find('#checkDiamond');
$checkDiamond.on('click', clickDiamond, false);
$checkDiamond.$p = $frmChk;

//дзcallback for click checkDiamond 
function clickDiamond(_e) {
	let _o = _e.currentTarget.$p;

	let _bool = !_o.chk.get('checkDiamond');
	_o.chk.set('checkDiamond',_bool);
	for (let i = 40; i < 53; i++) setCheck('check_card_'+i,_bool,_o);
	
	setRanksRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o);
}

// click ranks
for (let _b = 1; _b < 14; _b++) {
    
    let $checkRank = $d.find('#check'+_b);

    $checkRank.on('click', clickRank, false);

    $checkRank.$p = $frmChk;
	$checkRank._b = _b;

}

// callback for click check##
function clickRank(_e) {
	let _o = _e.currentTarget.$p;
	let _b = _e.currentTarget._b;

    let _bool = !_o.chk.get('check'+_b);
	_o.chk.set('check'+_b,_bool);
	for (let i = _b; i < 53; i=i+13) setCheck('check_card_'+i,_bool,_o);
	
	setSuitsRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o);
}

// checks cards
for (let i = 1; i < 53 ; i++ ) {

    let $card = $d.find('#check_card_'+i);

    $card.on('click', clickCard, false);

    $card.$p = $frmChk;
    $card._i = i;

}

function clickCard(_e) {
    let _o = _e.currentTarget.$p;
	let _i = _e.currentTarget._i;
    
	let _bool = !_o.chk.get('check_card_'+ _i);
	_o.chk.set('check_card_'+ _i,_bool);
	setSuitsNRanksRows(_i,_o);
	setCheckAll(_o);

	_o.cards = getCards(_o);
} 

function setSuitsNRanksRows(value,_o={}){
	let suit = getSuit(value);
	let rank = getRank(value);

	let checkSuit = suit == 1 ? 'checkSpade' : suit == 2 ? 'checkHeart' : suit == 3 ? 'checkClub' : 'checkDiamond';
	let sumSuits = sumChecks(_o,suit) == 13 ? true : false;

	let sumRanks = sumChecks(_o,0,rank) == 4 ? true : false;

	setCheck(checkSuit,sumSuits,_o);
	setCheck('check'+rank,sumRanks,_o);
}

function setCheckAll(_o={}) {
	let sum = sumChecks(_o) == 52 ? true : false;
	setCheck('checkAll',sum,_o);
}

function setRanksRow(_o={}) {
	for (let i = 1; i < 14; i = i + 1) {
	    
	    (sumChecks(_o,0,i)<4) ? setCheck('check'+i, false, _o) : setCheck('check'+i, true, _o);
	    /*
		if (sumChecks(_o,0,i) < 4) {
			setCheck('check'+i,false,_o);
		} else {
			setCheck('check'+i,true,_o);
		}*/
		/*
let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');
		*/
	}
}

function setSuitsRow(_o={}) {
	let _spade = sumChecks(_o,1);
	let _heart = sumChecks(_o,2);
	let _club = sumChecks(_o,3);
	let _diamond = sumChecks(_o,4);
	
	(_spade < 13) ? 
	    setCheck('checkSpade', false, _o) : setCheck('checkSpade', true, _o);
	/*if (_spade < 13) {
		setCheck('checkSpade',false,_o);
	} else {
		setCheck('checkSpade',true,_o);
	}*/


	(_heart < 13) ? 
	    setCheck('checkHeart', false, _o) : setCheck('checkHeart', true, _o);
	    /*
	if (_heart < 13) {
		setCheck('checkHeart',false,_o);
	} else {
		setCheck('checkHeart',true,_o);
	}*/
	
	(_club < 13) ? 
	    setCheck('checkClub', false, _o) : setCheck('checkClub', true, _o);
	
	/*
	if (_club < 13) {
		setCheck('checkClub',false,_o);
	} else {
		setCheck('checkClub',true,_o);
	}*/
	
	
	(_diamond < 13) ? 
	    setCheck('checkDiamond', false, _o) : setCheck('checkDiamond', true, _o);
	
	/*
	if (_diamond < 13) {
		setCheck('checkDiamond',false,_o);
	} else {
		setCheck('checkDiamond',true,_o);
	}*/
}

function sumChecks(_o={},suit = 0, rank = 0, value = 0) {
	let sum = 0;

	if (suit==0 && rank==0 && value == 0)  {
		for (let i = 1; i < 53; i = i + 1) {
			sum = sum + _o.chk.get('check_card_' + i);
		}
	} else if (suit > 0 && rank == 0 && value == 0) {
		for (let i = (suit - 1) * 13 + 1; i < suit * 13 + 1; i = i + 1) {
			sum = sum + _o.chk.get('check_card_' + i);
		}
	} else if (suit == 0 && rank > 0 && value == 0) {
		for (let i = rank; i < 53; i = i + 13) {
			sum = sum + _o.chk.get('check_card_' + i);
		}
	} else if (suit == 0 && rank == 0 && value > 0) {
		// дублирует первый вариант, думаю можно удалить
		for (let i = 1; i < 53; i = i + 1) {
			sum = sum + _o.chk.get('check_card_' + i);
		}
	}

	return sum;
}

function setCheck(key, value, _o={}) {
	_o.chk.set(key,value); _o.doc.find('#'+key).checked = value;
}

function getCards(_o) {
	let _arr = [];

	for (let i = 1 ; i < 53; i++) {
		let _key = 'check_card_' + i;
		let _val = _o.chk.get(_key);
		if (_val) _arr.push(i);
	}
	console.log(_arr); // для отладки
	return _arr;
}

/*
===≠===============
    / form Checks
===================
*/

function getRank(value) {
	let rank = (value-1) % 13 + 1;
	return rank;
}

function getSuit(value) {
	let suit = (value-1) / 13 | 0;
	return suit + 1;
}

// getStart
$d.find('#getStart').on('click', function () {
	$d.find('#greetings').style['display'] = "none"; // "block"
	$d.find('#card').style['display'] = "block";
});

// original deck
let origdeck = (function (onoff) {
	var prefix = Deck.prefix;

	var transform = prefix('transform');

	var translate = Deck.translate;

	var $container = document.getElementById('container');

	var deck = Deck();

	var acesClicked = [];
	var kingsClicked = [];

	deck.cards.forEach(function (card, i) {
		card.enableDragging();
		card.enableFlipping();
	
		card.$el.addEventListener('mousedown', onTouch);
		card.$el.addEventListener('touchstart', onTouch);
	
		function onTouch () {
		var card;
	
		if (i % 13 === 0) {
			acesClicked[i] = true;
			if (acesClicked.filter(function (ace) {
			return ace;
			}).length === 4) {
			document.body.removeChild($topbar);
			deck.$el.style.display = 'none';
			setTimeout(function () {
				startWinning();
			}, 250)
			}
		} else if (i % 13 === 12) {
			if (!kingsClicked) {
			return;
			}
			kingsClicked[i] = true;
			if (kingsClicked.filter(function (king) {
			return king;
			}).length === 4) {
			for (var j = 0; j < 3; j++) {
				card = Deck.Card(52 + j);
				card.mount(deck.$el);
				card.$el.style[transform] = 'scale(0)';
				card.setSide('front');
				card.enableDragging();
				card.enableFlipping();
				deck.cards.push(card);
			}
			deck.sort(true);
			kingsClicked = false;
			}
		} else {
			acesClicked = [];
			if (kingsClicked) {
			kingsClicked = [];
			}
		}
		}
	})

	function startWinning () {
		var $winningDeck = document.createElement('div');
		$winningDeck.classList.add('deck');
	  
		$winningDeck.style[transform] = translate(Math.random() * window.innerWidth - window.innerWidth / 2 + 'px', Math.random() * window.innerHeight - window.innerHeight / 2 + 'px');
	  
		$container.appendChild($winningDeck);
	  
		var side = Math.floor(Math.random() * 2) ? 'front' : 'back';
	  
		for (var i = 0; i < 55; i++) {
		  addWinningCard($winningDeck, i, side);
		}
	  
		setTimeout(startWinning, Math.round(Math.random() * 1000));
	  }
	  
	  function addWinningCard ($deck, i, side) {
		var card = Deck.Card(54 - i);
		var delay = (55 - i) * 20;
		var animationFrames = Deck.animationFrames;
		var ease = Deck.ease;
	  
		card.enableFlipping();
	  
		if (side === 'front') {
		  card.setSide('front');
		} else {
		  card.setSide('back');
		}
	  
		card.mount($deck);
		card.$el.style.display = 'none';
	  
		var xStart = 0;
		var yStart = 0;
		var xDiff = -500;
		var yDiff = 500;
	  
		animationFrames(delay, 1000)
		  .start(function () {
			card.x = 0;
			card.y = 0;
			card.$el.style.display = '';
		  })
		  .progress(function (t) {
			var tx = t;
			var ty = ease.cubicIn(t);
			card.x = xStart + xDiff * tx;
			card.y = yStart + yDiff * ty;
			card.$el.style[transform] = translate(card.x + 'px', card.y + 'px');
		  })
		  .end(function () {
			card.unmount();
		  })
	  }
	  
	  // easter eggs end
	  /*
	  $shuffle.addEventListener('click', function () {
		deck.shuffle();
		deck.shuffle();
	  });
	  $sort.addEventListener('click', function () {
		deck.sort();
	  });
	  $bysuit.addEventListener('click', function () {
		deck.sort(true); // sort reversed
		deck.bysuit();
	  });
	  $fan.addEventListener('click', function () {
		deck.fan();
	  })
	  $flip.addEventListener('click', function () {
		deck.flip();
	  })
	  $poker.addEventListener('click', function () {
		deck.queue(function (next) {
		  deck.cards.forEach(function (card, i) {
			setTimeout(function () {
			  card.setSide('back');
			}, i * 7.5)
		  })
		  next();
		})
		deck.shuffle();
		deck.shuffle();
		deck.poker();
	  })
	  */
	  deck.mount($container);


})(origdeckon);
