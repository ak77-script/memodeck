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
			{id:1,rank:'2',suit:0,code:'ПТица',image:''},
			{id:2,rank:'3',suit:0,code:'ПиКа',image:''},
			{id:3,rank:'4',suit:0,code:'ПеЧь',image:''},
			{id:4,rank:'5',suit:0,code:'ПиПетка',image:''},
			{id:5,rank:'6',suit:0,code:'ПуШка',image:''},
			{id:6,rank:'7',suit:0,code:'ПиСьмо',image:''},
			{id:7,rank:'8',suit:0,code:'ПиВо',image:''},
			{id:8,rank:'9',suit:0,code:'ПеРец',image:''},
			{id:9,rank:'10',suit:0,code:'ПуГовица',image:''},
			{id:10,rank:'В',suit:0,code:'ПаВлин',image:''},
			{id:11,rank:'Д',suit:0,code:'ПуДра',image:''},
			{id:12,rank:'К',suit:0,code:'ПаКет',image:''},
			{id:13,rank:'Т',suit:0,code:'ПаТефон',image:''},
			{id:14,rank:'2',suit:1,code:'ЧуДо-йогурт',image:''},
			{id:15,rank:'3',suit:1,code:'ЧеХол',image:''},
			{id:16,rank:'4',suit:1,code:'ЧаЧа',image:''},
			{id:17,rank:'5',suit:1,code:'ЧеБурашка',image:''},
			{id:18,rank:'6',suit:1,code:'ЧаШка',image:''},
			{id:19,rank:'7',suit:1,code:'ЧаСы',image:''},
			{id:20,rank:'8',suit:1,code:'Черный Фен',image:''},
			{id:21,rank:'9',suit:1,code:'ЧеРешня',image:''},
			{id:22,rank:'10',suit:1,code:'ЧуГунок',image:''},
			{id:23,rank:'В',suit:1,code:'Чистая Вода',image:''},
			{id:24,rank:'Д',suit:1,code:'ЧуДовище',image:''},
			{id:25,rank:'К',suit:1,code:'ЧеК',image:''},
			{id:26,rank:'Т',suit:1,code:'ЧеТверть пиццы',image:''},
			{id:27,rank:'2',suit:2,code:'ТаТу',image:''},
			{id:28,rank:'3',suit:2,code:'ТКань',image:''},
			{id:29,rank:'4',suit:2,code:'ТаЧка',image:''},
			{id:30,rank:'5',suit:2,code:'ТюБик',image:''},
			{id:31,rank:'6',suit:2,code:'ТеЛефон',image:''},
			{id:32,rank:'7',suit:2,code:'ТиСки',image:''},
			{id:33,rank:'8',suit:2,code:'ТВикс',image:''},
			{id:34,rank:'9',suit:2,code:'ТаРакан',image:''},
			{id:35,rank:'10',suit:2,code:'ТяГач',image:''},
			{id:36,rank:'В',suit:2,code:'ТВ',image:''},
			{id:37,rank:'Д',suit:2,code:'эТюДник',image:''},
			{id:38,rank:'К',suit:2,code:'уТКа',image:''},
			{id:39,rank:'Т',suit:2,code:'аТТестат',image:''},
			{id:40,rank:'2',suit:3,code:'БоТинки',image:''},
			{id:41,rank:'3',suit:3,code:'БоКал',image:''},
			{id:42,rank:'4',suit:3,code:'БоЧка',image:''},
			{id:43,rank:'5',suit:3,code:'БуБен',image:''},
			{id:44,rank:'6',suit:3,code:'БоЛт',image:''},
			{id:45,rank:'7',suit:3,code:'БуСы',image:''},
			{id:46,rank:'8',suit:3,code:'БиФштекс',image:''},
			{id:47,rank:'9',suit:3,code:'БуРатино',image:''},
			{id:48,rank:'10',suit:3,code:'Биг-мак',image:''},
			{id:49,rank:'В',suit:3,code:'БиВень',image:''},
			{id:50,rank:'Д',suit:3,code:'БиДон',image:''},
			{id:51,rank:'К',suit:3,code:'БуК',image:''},
			{id:52,rank:'Т',suit:3,code:'БаТон',image:''}
		]};
		
		// getStart
		_main.select('#getStart').on('click', function () {
			_main.select('#greetings').style("visibility", "hidden"); //visible
		});

		return self;
	}

	if (onoff) {
		let md = memodeck();
		//md.main.hide();
	}
	
	return memodeck;
})(true);