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
//const $ = document.querySelector.bind(document)
//const $$ = document.querySelectorAll.bind(document)

//$('div').style.color = 'blue'
//$$('div').forEach(div => div.style.background = 'orange')

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

Объект как ассоциативный массив

В качестве ассоциативного массива можно использовать обычный объект.

Создание пустого ассоциативного массива через объект:

// посредством литерала объекта
const arr1 = {};
// с использованием стандартной функции-конструктора Object
const arr2 = new Object();
// через Object.create
const arr3 = new Object.create(null);

Заполнение ассоциативный массив значениями на этапе его создания:

const myArray = {
  'key1': 'value1',
  'key2': 'value2',
  ...
}

Добавление нового элемента (пары «ключ-значение»):

// добавим строку «текстовое значение» с ключом «key1»
arr['key1'] = 'текстовое значение';
// добавить число 22 с ключом «key2»
arr['key2'] = 22;

Добавление нового элемента будет выполняться только в том случае, если данного ключа в нём нет. Если данный ключ уже существует, то указанное значение просто изменит существующее.

В качестве значения можно использовать не только примитивные типы данных, но и ссылочные.

В JavaScript для обращения к ключу можно использовать не только квадратные скобки, но и выполнять это через точку. Но это доступно только для ключей, имена которых отвечают правилам именования переменных.

arr.key1 = 'текстовое значение';
arr.key2 = 22;

Получение значения ключа:

console.log( myArray['key1'] );
console.log( myArray['key2'] );
console.log( myArray.key1 );
console.log( myArray.key2 );

Получить количество ключей (длину) можно так:

const myArray = {'key1': 'value1', 'key12: 'value2', 'key3': 'value3'};
// Используем keys, чтобы получить массив ключей. А затем с помощью length их длину
Object.keys(myArray).length; // 3

Удаление ключа выполняется с помощью оператора delete:

delete myArray['key1'];

Выполнить проверку (наличия) ключа можно так:

const myArray = {'key1': 'value1', 'key2': 'value2'};
// 1 способ - c использованием hasOwnProperty
if (myArray.hasOwnProperty('key1')) {
  console.log( 'Ключ key1 существует!' );
} else {
  console.log( 'Ключ key1 не существует!' );
}

// 2 способ - с использованием in
if ('key1' in myArray) {
  console.log( 'Ключ key1 есть в массиве!' );
} else {
  console.log( 'Ключ key1 нет в массиве!' );
}

Перебор ключей с помощью цикла for...in:

// myArray - объект как ассоциативный массив
for(key in myArray) {
  console.log( `${key} = ${myArray[key]}` );
}

Преобразовать объект, используем в качестве ассоциативного массива, в JSON и обратно можно так:

// ассоциативный массив
const arr = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

// arr в JSON
const str = JSON.stringify(arr);
// str в объект (ассоциативный массив)
const newArr = JSON.parse(str);
*/
let _chkAll = true;
let _chkSpade = true;
let _chkHeart = true;
let _chkClub = true;
let _chkDiamond = true;

let _chk1 = true;
let _chk2 = true;
let _chk3 = true;
let _chk4 = true;
let _chk5 = true;
let _chk6 = true;
let _chk7 = true;
let _chk8 = true;
let _chk9 = true;
let _chk10 = true;
let _chk11 = true;
let _chk12 = true;
let _chk13 = true;

$d.find('#checkAll').checked = _chk.get('checkAll');
$d.find('#checkSpade').checked = _chk.get('checkSpade');
$d.find('#checkHeart').checked = _chk.get('checkHeart');
$d.find('#checkClub').checked = _chk.get('checkClub');
$d.find('#checkDiamond').checked = _chk.get('checkDiamond');
$d.find('#check1').checked = _chk.get('check1');
$d.find('#check2').checked = _chk.get('check2');
$d.find('#check3').checked = _chk.get('check3');
$d.find('#check4').checked = _chk.get('check4');
$d.find('#check5').checked = _chk.get('check5');
$d.find('#check6').checked = _chk.get('check6');
$d.find('#check7').checked = _chk.get('check7');
$d.find('#check8').checked = _chk.get('check9');
$d.find('#check9').checked = _chk.get('check9');
$d.find('#check10').checked = _chk.get('check10');
$d.find('#check11').checked = _chk.get('check11');
$d.find('#check12').checked = _chk.get('check12');
$d.find('#check13').checked = _chk.get('check13');
// https://getbootstrap.com/docs/5.0/components/buttons/

let $checkAll = $d.find('#checkAll');
$checkAll.on('click',function(){
	_chk.set('checkAll',!_chk.get('checkAll'));
	_chk.set('checkSpade',_chk.get('checkAll'));
	_chk.set('checkHeart',_chk.get('checkAll'));
	_chk.set('checkClub',_chk.get('checkAll'));
	_chk.set('checkDiamond',_chk.get('checkAll'));
	_chk.set('check1',_chk.get('checkAll'));
	_chk.set('check2',_chk.get('checkAll'));
	_chk.set('check3',_chk.get('checkAll'));
	_chk.set('check4',_chk.get('checkAll'));
	_chk.set('check5',_chk.get('checkAll'));
	_chk.set('check6',_chk.get('checkAll'));
	_chk.set('check7',_chk.get('checkAll'));
	_chk.set('check8',_chk.get('checkAll'));
	_chk.set('check9',_chk.get('checkAll'));
	_chk.set('check10',_chk.get('checkAll'));
	_chk.set('check11',_chk.get('checkAll'));
	_chk.set('check12',_chk.get('checkAll'));
	_chk.set('check13',_chk.get('checkAll'));


	$d.find('#checkSpade').checked = _chk.get('checkSpade');
	$d.find('#checkHeart').checked = _chk.get('checkHeart');
	$d.find('#checkClub').checked = _chk.get('checkClub');
	$d.find('#checkDiamond').checked = _chk.get('checkDiamond');
	
	$d.find('#check1').checked = _chk.get('check1');
	$d.find('#check2').checked = _chk.get('check2');
	$d.find('#check3').checked = _chk.get('check3');
	$d.find('#check4').checked = _chk.get('check4');
	$d.find('#check5').checked = _chk.get('check5');
	$d.find('#check6').checked = _chk.get('check6');
	$d.find('#check7').checked = _chk.get('check7');
	$d.find('#check8').checked = _chk.get('check9');
	$d.find('#check9').checked = _chk.get('check9');
	$d.find('#check10').checked = _chk.get('check10');
	$d.find('#check11').checked = _chk.get('check11');
	$d.find('#check12').checked = _chk.get('check12');
	$d.find('#check13').checked = _chk.get('check13');

	console.log('checkAll: ' + _chk.get('checkAll'));
});

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

/*
 * javascript модуль
 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
 
let memodeck = (function (onoff) {
	// ссылка на d3.js
	// вся работа с DOM осуществляется через библиотеку Data Driven Documents 
	const _dom = d3;

	let containerId = 'main';
	let getstartbtnId = 'getStart';
	
	function memodeck() {
		// инициализация
		let self = this;
		self.d = _dom;

		const _body = self.d.select('body');
		const _header = _body.select('header');
		const _nav = _body.select('nav');
		const _main = _body.select('main');
		const _footer = _body.select('footer');
		
		self.body = _body;
		self.header = _header;
		self.nav = _nav;
		self.main = _main;
		self.footer = _footer;

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
		
		// getStart
		_main.select('#getStart').on('click', function () {
			//_main.select('#greetings').style("visibility", "hidden"); //visible
			_main.select('#greetings').style("display", "none");
		});

		return self;
	}

	if (onoff) {
		let md = memodeck();
		//md.main.hide();
	}
	
	return memodeck;
})(memodeckon);