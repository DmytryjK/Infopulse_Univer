var message		= 'Иванов Максим',
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