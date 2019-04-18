/*
function game(answer) {
	var userAnswer	= answer,
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
	},
	message 		= 'userAnswer: ' + userAnswer + '\n' + 'computerAnswer' + computerAnswer + '\n' + 'result: ' + messages[table[userAnswer] [computerAnswer]];
	return(message);
}

console.log(game('rock'));
*/
//--------------------------------------


function Game(userAnswer) { //создание класса (всегда начинаем с большой буквы)
	this.userAnswer = userAnswer;
	this.computerAnswer = '';

	this.setComputerAnswer = function() { //метод для определения ответа ПК
		var answers			= ['rock', 'paper', 'scissors'],
			m 				= 0,
			n				= answers.length - 1, //length = 3 а индексы с 0 по 2
			randIndex		= Math.floor(Math.random() * (n - m + 1)) + m;
			
		this.computerAnswer = answers[randIndex];	
	}

	this.play = function() { //формируем уже все ответы и результаты
		this.setComputerAnswer();
			//console.log(this.computerAnswer);
		var table			= {
			
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
			},
			message 		= 'userAnswer: ' + this.userAnswer + '\n' + 'computerAnswer: ' + this.computerAnswer + '\n' + 'result: ' + messages[table[this.userAnswer] [this.computerAnswer]];

			console.log(message);
	}
}

var game1 = new Game ('rock');
game1.play();