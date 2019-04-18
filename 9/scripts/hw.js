//1 преобразовать в класс
/*var message		= 'Иванов Максим',
	translit	= '',
	symbols		= {
		'и' : 'i',
		'в' : 'v',
		'а' : 'a',
		'н' : 'n',
		'о' : 'o',
		'м' : 'm',
		'к' : 'k',
	};

	message = message.toLowerCase();

	for(var i = 0; i < message.length; i ++) {
		translit += symbols[message[i]] ? symbols[message[i]] : message[i]; //условная конструкция, узнаём есть ли в массиве соответствие русской буквы с латиницей/ true : false
	}

	console.log(message, translit);
*/
//2 создать класс Car (описать свойства) и написать методы для машины (действия) console.log достаточно


// Преобразовать в класс
function TranslitName(message) {
	this.message = message.toLowerCase();
	this.result = '';
	
	this.translate = function () {
		var symbols		= {
		'и' : 'i',
		'в' : 'v',
		'а' : 'a',
		'н' : 'n',
		'о' : 'o',
		'м' : 'm',
		'к' : 'k',
		};

		for(var i = 0; i < this.message.length; i ++) {
			this.result += symbols[this.message[i]] ? symbols[this.message[i]] : this.message[i]; //условная конструкция, узнаём есть ли в массиве соответствие русской буквы с латиницей/ true : false
			}
		console.log(this.result);
	}
}

var name1 = new TranslitName('Иванов Максим');
name1.translate();



// create class for car

function Car (type, color, fuel) {
	this.type = function() {
		console.log('Тип машины:', type);
	}
	this.color = function() {
		console.log('Цвет:', color);
	}
	this.fuel = function() {
		console.log('Тип топлива:', fuel);
	}
}

var car1 = new Car('pickup', 'black', 'diesel');
car1.fuel();