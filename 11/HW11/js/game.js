
let game = (userAnswer) => {
	let	answers			= ['rock', 'paper', 'scissors'],
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
	message 			= 'userAnswer: ' + userAnswer.value + '\n' + 'computerAnswer: ' + computerAnswer + '\n' + 'result: ' + messages[table[userAnswer.value] [computerAnswer]],
	gameResult			= document.querySelector('.gameResult'),
	userAnswerImg		= document.querySelector('.userAnswerImg'),
	computerAnswerImg	= document.querySelector('.computerAnswerImg'),
	aboutResult			= document.querySelector('.aboutResult');

	gameResult.style.visibility = 'visible';
	aboutResult.innerText = message;
	userAnswerImg.src = 'img/' + userAnswer.value + '.jpg';
	computerAnswerImg.src = 'img/' + computerAnswer + '.jpg';
	console.log('PC',computerAnswer, computerAnswerImg);
	console.log(userAnswer.value);
}
/*
let userAnswer = document.querySelectorAll('.userAnswer');
console.log(userAnswer);

function UserAnswer(Answer) {
	var userAnswer = Answer;
	console.log(userAnswer);
	game(userAnswer);
}

for (let i = 0; i < userAnswer.length; i ++) { 
	userAnswer[i].onchange = UserAnswer;
}
*/

let userAnswer = document.querySelectorAll('.userAnswer');
for (let i = 0; i < userAnswer.length; i ++) { 
		let answer = () => {
				game(userAnswer[i]);
			}
	userAnswer[i].onchange = answer;		
}
