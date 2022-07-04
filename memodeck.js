const origdeckon = true;
const memodeckon = false;

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

const _chk = new Map([
	['checkAll', true],
	['checkSpade', true],
	['checkHeart', true],
	['checkClub', true],
	['checkDiamond', true],
	['check1', true],
	['check2', true],
	['check3', true],
	['check4', true],
	['check5', true],
	['check6', true],
	['check7', true],
	['check8', true],
	['check9', true],
	['check10', true],
	['check11', true],
	['check12', true],
	['check13', true],
	['check_card_1', true],
	['check_card_2', true],
	['check_card_3', true],
	['check_card_4', true],
	['check_card_5', true],
	['check_card_6', true],
	['check_card_7', true],
	['check_card_8', true],
	['check_card_9', true],
	['check_card_10', true],
	['check_card_11', true],
	['check_card_12', true],
	['check_card_13', true],
	['check_card_14', true],
	['check_card_15', true],
	['check_card_16', true],
	['check_card_17', true],
	['check_card_18', true],
	['check_card_19', true],
	['check_card_20', true],
	['check_card_21', true],
	['check_card_22', true],
	['check_card_23', true],
	['check_card_24', true],
	['check_card_25', true],
	['check_card_26', true],
	['check_card_27', true],
	['check_card_28', true],
	['check_card_29', true],
	['check_card_30', true],
	['check_card_31', true],
	['check_card_32', true],
	['check_card_33', true],
	['check_card_34', true],
	['check_card_35', true],
	['check_card_36', true],
	['check_card_37', true],
	['check_card_38', true],
	['check_card_39', true],
	['check_card_40', true],
	['check_card_41', true],
	['check_card_42', true],
	['check_card_43', true],
	['check_card_44', true],
	['check_card_45', true],
	['check_card_46', true],
	['check_card_47', true],
	['check_card_48', true],
	['check_card_49', true],
	['check_card_50', true],
	['check_card_51', true],
	['check_card_52', true]
  ]);

/*
Статья, в которой рассмотрим какие в JavaScript имеются способы создания ассоциативных массивов, а также основные приёмы работы с ними.
Что такое ассоциативный массив?

Ассоциативный массив – это массив, в котором обращение к значению осуществляется по ключу.

При этом в качестве ключа используется не порядковый номер (индекс), а некоторая строка, которую мы устанавливаем сами.

Таким образом представить ассоциативный массив можно как набор пар «ключ-значение». При этом каждое значение связано с определённым ключом.
Ассоциативный массив в JavaScript

Для того чтобы получить значение необходимо знать ключ.
Способы создания ассоциативных массивов

В JavaScript имеются обычные массивы. В них в качества ключа используется порядковый номер (индекс) элемента, а создаются они с использованием квадратных скобок или Array(). Эти массивы не могут использоваться в качестве ассоциативных.

Создание ассоциативных массивов в JavaScript можно выполнить двумя разными способами:

    с помощью объекта Map (появился в языке, начиная с версии ECMAScript 2015);
    посредством объектов.

Коллекция Map

Map – это коллекция «ключ-значение», которую можно использовать для создания ассоциативных массивов.

Map в отличие от объекта позволяет использовать в качестве ключей значения любых типов как примитивные, так и ссылочные.

Создание пустой коллекции:

// создание пустого ассоциативного массива
const arr = new Map();

Создании коллекции с инициализацией начальных значений:

// создание ассоциативного массива и помещения в него трех пар «ключ-значение»
const arr = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);

В этом примере строки «key1», «key2» и «key3» являются ключами, а «value1», «value2» и «value3» соответственно их значениями.

Узнать количество элементов в массиве можно осуществить с помощью свойства size:

arr.size; // 3

Добавление элемента в массив (в экземпляр объекта Map) осуществляется с помощью метода set:

// добавить в массив одну пару "ключ-значение"
arr.set('key4','value4');

// добавить в массив несколько пар "ключ-значение"
arr.set('key5','value5');
arr.set('key6','value6');
// или так
arr
  .set('key5','value5')
  .set('key6','value6');

Если в массиве есть уже такой ключ, то произойдёт установка нового значения, которое будет связано с ним:

arr.set('key1','new value');

Получить значение по ключу выполняется с помощью метода get:

// получить значение, ассоциированное с ключом 'key4'
arr.get('key4'); // 'value4'

Проверить есть ли ключ в массиве можно посредством метода has:

// есть ли в массиве arr ключ key2
arr.has('key2'); // true

Удалить из ассоциативного массива (экземпляра объекта Map) элемент по имени ключа можно с помощью метода delete:

arr.delete('key1'); // true

Данный метод возвращает true, если данный ключ существовал в массиве, в противном случае он возвращает false.

if (arr.delete('key1')) {
  console.log('Запись с ключом "key1" удалена из массива!');
} else {
  console.log('Запись с ключом "key1" не найдена в массиве!');
}

Очистить массив (удалить все элементы) можно выполнить с помощью метода clear.

arr.clear(); // очистим массив arr
arr.size; // 0 (количество элементов)

Перебор ассоциативного массива (объекта Map) обычно осуществляется с помощью цикла for...of. При этом итерацию можно организовать по ключам, значениям и записям ([key, values]).

Перебор ключей можно осуществить посредством итерируемого объекта MapIterator, возвращаемым методом keys:

for (let key of arr.keys()) {
  console.log(key);
}

Для перебора значений можно воспользоваться итерируемым объектом MapIterator, возвращаемым посредством методом values:

for (let value of arr.values()) {
  console.log(value);
}

Перебор записей ассоциативного массива с использованием метода entries:

for (let pair of arr.entries()) {
  // pair - это массив [key, values]
  console.log(pair[0]); // ключ
  console.log(pair[1]); // значение
  console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}

Данный метод используется по умолчанию в for...of, поэтому его можно опустить:

for (let pair of arr) {
  console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}

Кроме этого перебрать ассоциативный массив можно с помощью метода forEach.

arr.forEach(function(value,key) {
  console.log('key = ' + key +', value = ' + value);
});


Перебор ассоциативного массива (объекта Map) обычно осуществляется с помощью цикла for...of. При этом итерацию можно организовать по ключам, значениям и записям ([key, values]).

Перебор ключей можно осуществить посредством итерируемого объекта MapIterator, возвращаемым методом keys:

for (let key of arr.keys()) {
  console.log(key);
}

Для перебора значений можно воспользоваться итерируемым объектом MapIterator, возвращаемым посредством методом values:

for (let value of arr.values()) {
  console.log(value);
}

Перебор записей ассоциативного массива с использованием метода entries:

for (let pair of arr.entries()) {
  // pair - это массив [key, values]
  console.log(pair[0]); // ключ
  console.log(pair[1]); // значение
  console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}

Данный метод используется по умолчанию в for...of, поэтому его можно опустить:

for (let pair of arr) {
  console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}

Кроме этого перебрать ассоциативный массив можно с помощью метода forEach.

arr.forEach(function(value,key) {
  console.log('key = ' + key +', value = ' + value);
});

Преобразовать ассоциативный массив (объект Map) в JSON и обратно можно так:

let arr = new Map([
  ['question', 'Текст вопроса...'],
  ['answer1', 'Ответ 1...'],
  ['answer2', 'Ответ 2...'],
]);
// в JSON
jsonStr = JSON.stringify([...arr]);
// из JSON в Map
mapArr = new Map(JSON.parse(jsonStr));
*/

_chk.forEach(function(value, key, map) {
	$d.find('#' + key).checked = value;	
});

$d.find('#checkAll').on('click',function(){
	let _bool = !_chk.get('checkAll');
	for (let pair of _chk) {
	    _chk.set(pair[0], _bool);
	    $d.find('#'+pair[0]).checked = _bool;
	}

	$cards = getCards(_chk);
	
});

$d.find('#checkSpade').on('click',function(){
	let _bool = !_chk.get('checkSpade');
	_chk.set('checkSpade',_bool);
	for (let i = 1; i < 14; i++) {
		setCheck('check_card_'+i,_bool);
	}
	setRanksRow();
	setCheckAll();

	$cards = getCards(_chk);
	
});

$d.find('#checkHeart').on('click',function(){
	let _bool = !_chk.get('checkHeart');
	_chk.set('checkHeart',_bool);
	for (let i = 14; i < 27; i++) {
		setCheck('check_card_'+i,_bool);
	}
	setRanksRow();
	setCheckAll();

	$cards = getCards(_chk);
	
});

$d.find('#checkClub').on('click',function(){
	let _bool = !_chk.get('checkClub');
	_chk.set('checkClub',_bool);
	for (let i = 27; i < 40; i++) {
		setCheck('check_card_'+i,_bool);
	}
	setRanksRow();
	setCheckAll();

	$cards = getCards(_chk);
	
});

$d.find('#checkDiamond').on('click',function(){
	let _bool = !_chk.get('checkDiamond');
	_chk.set('checkDiamond',_bool);
	for (let i = 40; i < 53; i++) {
		setCheck('check_card_'+i,_bool);
	}
	setRanksRow();
	setCheckAll();

	$cards = getCards(_chk);
	
});

for (let _b = 1; _b < 14; _b++) {
	$d.find('#check'+_b).on('click',function(){
		let _bool = !_chk.get('check'+_b);
		_chk.set('check'+_b,_bool);
		for (let i = _b; i < 53; i=i+13) {
			setCheck('check_card_'+i,_bool);
		}
		setSuitsRow();
		setCheckAll();

		$cards = getCards(_chk);
		
	});
}

// checks cards
for (let i = 1; i < 53 ; i++ ) {

	let $card = $d.find('#check_card_'+ i);

	$card.on('click',function(){
		let _bool = !_chk.get('check_card_'+ i);
		_chk.set('check_card_'+ i,_bool);
		setSuitsNRanksRows(i);
		setCheckAll();

		$cards = getCards(_chk);
		
	});

}

function setSuitsNRanksRows(value){
	let suit = getSuit(value);
	let rank = getRank(value);

	let checkSuit = suit == 1 ? 'checkSpade' : suit == 2 ? 'checkHeart' : suit == 3 ? 'checkClub' : 'checkDiamond';
	let sumSuits = sumChecks(suit,0) == 13 ? true : false;

	let sumRanks = sumChecks(0,rank) == 4 ? true : false;

	_chk.set(checkSuit,sumSuits);
	$d.find('#'+checkSuit).checked = sumSuits;
	_chk.set('check'+rank,sumRanks);
	$d.find('#check'+rank).checked = sumRanks;
}

function setCheckAll() {
	let sum = sumChecks() == 52 ? true : false;
	_chk.set('checkAll',sum);
	$d.find('#checkAll').checked = sum;
}

function setRanksRow() {
	for (let i = 1; i < 14; i = i + 1) {
		if (sumChecks(0,i) < 4) {
			_chk.set('check'+i,false);
			$d.find('#check'+i).checked = false;
		} else {
			_chk.set('check'+i,true);
			$d.find('#check'+i).checked = true;
		}
	}
}

function setSuitsRow() {
	let _spade = sumChecks(1);
	let _heart = sumChecks(2);
	let _club = sumChecks(3);
	let _diamond = sumChecks(4);
	
	if (_spade < 13) {
		_chk.set('checkSpade',false);
		$d.find('#checkSpade').checked = false;
	} else {
		_chk.set('checkSpade',true);
		$d.find('#checkSpade').checked = true;
	}

	if (_heart < 13) {
		_chk.set('checkHeart',false);
		$d.find('#checkHeart').checked = false;
	} else {
		_chk.set('checkHeart',true);
		$d.find('#checkHeart').checked = true;
	}
	
	if (_club < 13) {
		_chk.set('checkClub',false);
		$d.find('#checkClub').checked = false;
	} else {
		_chk.set('checkClub',true);
		$d.find('#checkClub').checked = true;
	}
	
	if (_diamond < 13) {
		_chk.set('checkDiamond',false);
		$d.find('#checkDiamond').checked = false;
	} else {
		_chk.set('checkDiamond',true);
		$d.find('#checkDiamond').checked = true;
	}
}

function sumChecks(suit = 0, rank = 0, value = 0) {
	let sum = 0;

	if (suit==0 && rank==0 && value == 0)  {
		for (let i = 1; i < 53; i = i + 1) {
			sum = sum + _chk.get('check_card_' + i);
		}
	} else if (suit > 0 && rank == 0 && value == 0) {
		for (let i = (suit - 1) * 13 + 1; i < suit * 13 + 1; i = i + 1) {
			sum = sum + _chk.get('check_card_' + i);
		}
	} else if (suit == 0 && rank > 0 && value == 0) {
		for (let i = rank; i < 53; i = i + 13) {
			sum = sum + _chk.get('check_card_' + i);
		}
	} else if (suit == 0 && rank == 0 && value > 0) {
		// дублирует первый вариант, думаю можно удалить
		for (let i = 1; i < 53; i = i + 1) {
			sum = sum + _chk.get('check_card_' + i);
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

function setCheck(key, value) {
	_chk.set(key,value); $d.find('#'+key).checked = value;
}

// getStart
$d.find('#getStart').on('click', function () {
	$d.find('#greetings').style['display'] = "none"; // "block"
	$d.find('#card').style['display'] = "block";
});

function getCards(_chk) {
	let _arr = [];

	for (let i = 1 ; i < 53; i++) {
		let _key = 'check_card_' + i;
		let _val = _chk.get(_key);
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

/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
 
let memodeck = (function (onoff) {
	
	function memodeck() {
		// инициализация
		let self = this;

		let _cards = {elts:[
			{id:1,rank:'Т',suit:0,code:'ПаТефон',image:''},
			{id:2,rank:'2',suit:0,code:'ПТица',image:''},
			{id:3,rank:'3',suit:0,code:'ПиКа',image:''},
			{id:4,rank:'4',suit:0,code:'ПеЧь',image:''},
			{id:5,rank:'5',suit:0,code:'ПиПетка',image:''},
			{id:6,rank:'6',suit:0,code:'ПуШка',image:''},
			{id:7,rank:'7',suit:0,code:'ПиСьмо',image:''},
			{id:8,rank:'8',suit:0,code:'ПиВо',image:''},
			{id:9,rank:'9',suit:0,code:'ПеРец',image:''},
			{id:10,rank:'10',suit:0,code:'ПуГовица',image:''},
			{id:11,rank:'В',suit:0,code:'ПаВлин',image:''},
			{id:12,rank:'Д',suit:0,code:'ПуДра',image:''},
			{id:13,rank:'К',suit:0,code:'ПаКет',image:''},
			{id:14,rank:'Т',suit:1,code:'ЧеТверть пиццы',image:''},
			{id:15,rank:'2',suit:1,code:'ЧуДо-йогурт',image:''},
			{id:16,rank:'3',suit:1,code:'ЧеХол',image:''},
			{id:17,rank:'4',suit:1,code:'ЧаЧа',image:''},
			{id:18,rank:'5',suit:1,code:'ЧеБурашка',image:''},
			{id:19,rank:'6',suit:1,code:'ЧаШка',image:''},
			{id:20,rank:'7',suit:1,code:'ЧаСы',image:''},
			{id:21,rank:'8',suit:1,code:'Черный Фен',image:''},
			{id:22,rank:'9',suit:1,code:'ЧеРешня',image:''},
			{id:23,rank:'10',suit:1,code:'ЧуГунок',image:''},
			{id:24,rank:'В',suit:1,code:'Чистая Вода',image:''},
			{id:25,rank:'Д',suit:1,code:'ЧуДовище',image:''},
			{id:26,rank:'К',suit:1,code:'ЧеК',image:''},
			{id:27,rank:'Т',suit:2,code:'аТТестат',image:''},
			{id:28,rank:'2',suit:2,code:'ТаТу',image:''},
			{id:29,rank:'3',suit:2,code:'ТКань',image:''},
			{id:30,rank:'4',suit:2,code:'ТаЧка',image:''},
			{id:31,rank:'5',suit:2,code:'ТюБик',image:''},
			{id:32,rank:'6',suit:2,code:'ТеЛефон',image:''},
			{id:33,rank:'7',suit:2,code:'ТиСки',image:''},
			{id:34,rank:'8',suit:2,code:'ТВикс',image:''},
			{id:35,rank:'9',suit:2,code:'ТаРакан',image:''},
			{id:36,rank:'10',suit:2,code:'ТяГач',image:''},
			{id:37,rank:'В',suit:2,code:'ТВ',image:''},
			{id:38,rank:'Д',suit:2,code:'эТюДник',image:''},
			{id:39,rank:'К',suit:2,code:'уТКа',image:''},
			{id:40,rank:'Т',suit:3,code:'БаТон',image:''},
			{id:41,rank:'2',suit:3,code:'БоТинки',image:''},
			{id:42,rank:'3',suit:3,code:'БоКал',image:''},
			{id:43,rank:'4',suit:3,code:'БоЧка',image:''},
			{id:44,rank:'5',suit:3,code:'БуБен',image:''},
			{id:45,rank:'6',suit:3,code:'БоЛт',image:''},
			{id:46,rank:'7',suit:3,code:'БуСы',image:''},
			{id:47,rank:'8',suit:3,code:'БиФштекс',image:''},
			{id:48,rank:'9',suit:3,code:'БуРатино',image:''},
			{id:49,rank:'10',suit:3,code:'Биг-мак',image:''},
			{id:50,rank:'В',suit:3,code:'БиВень',image:''},
			{id:51,rank:'Д',suit:3,code:'БиДон',image:''},
			{id:52,rank:'К',suit:3,code:'БуК',image:''}
		]};
		
		return self;
	}

	if (onoff) {
		let md = memodeck();
	}
	
	return memodeck;
})(memodeckon);