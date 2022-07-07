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
  
for(let i = 1; i < 14; i++) {
      $chk.set('check' + i, true);
  }
  
for(let i = 1; i < 53; i++) {
      $chk.set('check_card_' + i, true);
  }

$chk.forEach(function(value, key, map) {
	$d.find('#' + key).checked = value;	
});

// checks form
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

	_o.cards = getCards(_o.chk);
} 

let $checkSpade = $d.find('#checkSpade');
$checkSpade.on('click', clickSpade, false);
$checkSpade.$p = $frmChk;

// callback for click checkSpade
function clickSpade(_e) {
	let _o = _e.currentTarget.$p;
	
	let _bool = !_o.chk.get('checkSpade');
	_o.chk.set('checkSpade',_bool);
	for (let i = 1; i < 14; i++) {
		setCheck('check_card_'+i,_bool);
	}
	setRanksRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o.chk);
} 

let $checkHeart = $d.find('#checkHeart');
$checkHeart.on('click', clickHeart, false);
$checkHeart.$p = $frmChk;

// callback for click checkHeart
function clickHeart(_e) {
	let _o = _e.currentTarget.$p;

    let _bool = !_o.chk.get('checkHeart');

	_o.chk.set('checkHeart',_bool);

	for (let i = 14; i < 27; i++) {
		setCheck('check_card_'+i,_bool);
	}
	setRanksRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o.chk);
} 

let $checkClub = $d.find('#checkClub');
$checkClub.on('click', clickClub, false);
$checkClub.$p = $frmChk;

//callback for click checkClub
function clickClub(_e) {
	let _o = _e.currentTarget.$p;

	let _bool = !_o.chk.get('checkClub');
	_o.chk.set('checkClub',_bool);
	for (let i = 27; i < 40; i++) {
		setCheck('check_card_'+i,_bool);
	}
	setRanksRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o.chk);
}

let $checkDiamond = $d.find('#checkDiamond');
$checkDiamond.on('click', clickDiamond, false);
$checkDiamond.$p = $frmChk;

//callback for click checkDiamond 
function clickDiamond(_e) {
	let _o = _e.currentTarget.$p;

	let _bool = !_o.chk.get('checkDiamond');
	_o.chk.set('checkDiamond',_bool);
	for (let i = 40; i < 53; i++) {
		setCheck('check_card_'+i,_bool);
	}
	setRanksRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o.chk);
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
	for (let i = _b; i < 53; i=i+13) {
		setCheck('check_card_'+i,_bool);
	}
	setSuitsRow(_o);
	setCheckAll(_o);

	_o.cards = getCards(_o.chk);
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

	_o.cards = getCards(_o.chk);
} 

function setSuitsNRanksRows(value,_o={}){
	let suit = getSuit(value);
	let rank = getRank(value);

	let checkSuit = suit == 1 ? 'checkSpade' : suit == 2 ? 'checkHeart' : suit == 3 ? 'checkClub' : 'checkDiamond';
	let sumSuits = sumChecks(suit,0,0,_o) == 13 ? true : false;

	let sumRanks = sumChecks(0,rank,0,_o) == 4 ? true : false;

	$chk.set(checkSuit,sumSuits);
	$d.find('#'+checkSuit).checked = sumSuits;
	$chk.set('check'+rank,sumRanks);
	$d.find('#check'+rank).checked = sumRanks;
}

function setCheckAll(_o={}) {
	let sum = sumChecks(0,0,0,_o) == 52 ? true : false;
	$chk.set('checkAll',sum);
	$d.find('#checkAll').checked = sum;
}

function setRanksRow(_o={}) {
	for (let i = 1; i < 14; i = i + 1) {
		if (sumChecks(0,i,0,_o) < 4) {
			$chk.set('check'+i,false);
			$d.find('#check'+i).checked = false;
		} else {
			$chk.set('check'+i,true);
			$d.find('#check'+i).checked = true;
		}
	}
}

function setSuitsRow(_o={}) {
	let _spade = sumChecks(1,0,0,_o);
	let _heart = sumChecks(2,0,0,_o);
	let _club = sumChecks(3,0,0,_o);
	let _diamond = sumChecks(4);
	
	if (_spade < 13) {
		$chk.set('checkSpade',false);
		$d.find('#checkSpade').checked = false;
	} else {
		$chk.set('checkSpade',true);
		$d.find('#checkSpade').checked = true;
	}

	if (_heart < 13) {
		$chk.set('checkHeart',false);
		$d.find('#checkHeart').checked = false;
	} else {
		$chk.set('checkHeart',true);
		$d.find('#checkHeart').checked = true;
	}
	
	if (_club < 13) {
		$chk.set('checkClub',false);
		$d.find('#checkClub').checked = false;
	} else {
		$chk.set('checkClub',true);
		$d.find('#checkClub').checked = true;
	}
	
	if (_diamond < 13) {
		$chk.set('checkDiamond',false);
		$d.find('#checkDiamond').checked = false;
	} else {
		$chk.set('checkDiamond',true);
		$d.find('#checkDiamond').checked = true;
	}
}

function sumChecks(suit = 0, rank = 0, value = 0, _o={}) {
	let sum = 0;

	if (suit==0 && rank==0 && value == 0)  {
		for (let i = 1; i < 53; i = i + 1) {
			sum = sum + $chk.get('check_card_' + i);
		}
	} else if (suit > 0 && rank == 0 && value == 0) {
		for (let i = (suit - 1) * 13 + 1; i < suit * 13 + 1; i = i + 1) {
			sum = sum + $chk.get('check_card_' + i);
		}
	} else if (suit == 0 && rank > 0 && value == 0) {
		for (let i = rank; i < 53; i = i + 13) {
			sum = sum + $chk.get('check_card_' + i);
		}
	} else if (suit == 0 && rank == 0 && value > 0) {
		// дублирует первый вариант, думаю можно удалить
		for (let i = 1; i < 53; i = i + 1) {
			sum = sum + $chk.get('check_card_' + i);
		}
	}

	return sum;
}

function getRank(value) {
	let rank = (value-1) % 13 + 1;
	return rank;
}

function getSuit(value) {
	let suit = (value-1) / 13 | 0;
	return suit + 1;
}

function setCheck(key, value, _o={}) {
	$chk.set(key,value); $d.find('#'+key).checked = value;
}

// getStart
$d.find('#getStart').on('click', function () {
	$d.find('#greetings').style['display'] = "none"; // "block"
	$d.find('#card').style['display'] = "block";
});

function getCards(_chk) {
	// ?????? _chk
	let _arr = [];

	for (let i = 1 ; i < 53; i++) {
		let _key = 'check_card_' + i;
		let _val = $chk.get(_key);
		if (_val) _arr.push(i);
	}
	console.log(_arr); // для отладки
	return _arr;
}

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
