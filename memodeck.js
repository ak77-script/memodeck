const origdeckon = true;
const memodeckon = true;

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
			return
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