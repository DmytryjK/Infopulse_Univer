/*
1. закончить игру
2. выпадающий список знаков зодиака, когда выбираем гороскоп сделать выпадающий список знака вместе с его картинкой
3. Текстовое поле, куда вводим дату в каком-то формате, формат не важен (/,...) Вывести эту дату в другое текстовое поле без разделителей, по нажатию кнопки.
*/

//game 
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
let userAnswer = document.querySelectorAll('.userAnswer');

for (let i = 0; i < userAnswer.length; i ++) { 
		let answer = () => {
				game(userAnswer[i]);
			}
	userAnswer[i].onchange = answer;		
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


//Sign of Zodiak
let signOfZodiak = (choiceIndex) => {
	let signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
		imgSign = document.querySelector('.img');

		imgSign.style.visibility = 'visible',
		imgSign.src = 'img/signs/' + signs[choiceIndex] + '.png';
		console.log(imgSign.src);
}

let list = document.querySelector('.zodiacList');

let showIndex = () => {
	signOfZodiak(list.selectedIndex);
}
for (let i = 0; i < list.length; i++) {
	list.onchange = showIndex;
}




