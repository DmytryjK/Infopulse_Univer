var random 	= Math.random(),
	m      	= -100,
	n	   	= 100,
	random1 = Math.floor(Math.random() * (n - m + 1)) + m; //floor - округляет число в меньшую сторону

console.log(random);
console.log(random1);


console.log('**************');

var userAnswer		= 'rock',
	answers			= ['rock', 'paper', 'scissors'],
	m 				= 0,
	n				= answers.length - 1, //length = 3 а индексы с 0 по 2
	randIndex		= Math.floor(Math.random() * (n - m + 1)) + m,
	computerAnswer 	= answers[randIndex],
	table			= {
			
			'rock' : {
				'rock' : 0,
				'paper' : -1,
				'scissors' : 1,
			},

			'paper' : {
				'rock' : 1,
				'paper' : 0,
				'scissors' : -1,
			},

			'scissors' : {
				'rock' : -1,
				'paper' : 1,
				'scissors' : 0,
			}
	},
	messages		= {
		'-1' : 'you lose',
		'0'  : 'dead heat',	
		'1'  : 'you won'
	};

console.log('user', userAnswer);
console.log('PC', computerAnswer);
console.log('result', messages[table[userAnswer] [computerAnswer]]);

//---------------------------------------------------
var	pswdLength		= 8,
	pswd 			= '',
	firstSymbolNum	= 48,
	lastSymbolNum	= 126,
	randUtfNum		= 0;

	for (i = 0; i < pswdLength; i ++) {
		randUtfNum = Math.floor(Math.random() * (lastSymbolNum - firstSymbolNum + 1)) + firstSymbolNum; //m - first n -last
		pswd += String.fromCharCode(randUtfNum);
	}

	console.log(pswd);