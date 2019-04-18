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


//-----------------------------------


function calculator(num1, num2, operator) {
	var result = 0;
	
		if (operator == '+') {
			result = num1 + num2;
		}
		else if(operator == '-') {
			result = num1 - num2;
		}
		else if (operator == '*') {
			result = num1 * num2;
		}
		else if (operator == '/') {
			result = num1 / num2;
		}
	return result;
}

console.log(calculator(5, 2, '*'));

//------------------------------------------------


/*
Формула для расчета идеальной массы тела по методу Devine (чаще всего используется для расчета):

Мужчины: ИМТ=50+2.3*(0.394*рост-60)

Женщины: ИМТ=45.5+2.3*(0.394*рост-60)

ИМТ - идеальная масса тела, кг

Формула для расчета идеальной массы тела по методу Robinson:

Мужчины: ИМТ=52+1.9*(0.394*рост-60)

Женщины: ИМТ=49+1.7*(0.394*рост-60)

ИМТ - идеальная масса тела, кг
*/



function getIdealWeight(type, sex, heigth, weight) {
	var table 	= {
		'Devine' : {
			'male'   : [50, 2.3],
			'female' : [45.5, 2.3]
		},

		'Robinson' : {
			'male'   : [52, 1.9],
			'female' : [49, 1.7]
		}
	},
		iw 		= Math.round(table[type][sex][0] + table[type][sex][1] * (0.394 * heigth - 60));

		if(weight > iw) {
			console.log('Нужно похудеть на:', weight - iw, 'кг');
		}
		else if(weight < iw) {
			console.log('Нужно поправиться на:', iw - weight, 'кг');
		}
		else {
			console.log('Вес в норме');
		}

		return iw;
}		

console.log('Ваш идеальный вес:',getIdealWeight('Devine', 'male', '175', '75'),'кг');


//-------------------------

function createMenu(menuData, ulClass, liClass, aClass) {
	var menuList = '<ul class=\"' + ulClass + '\">';
			for(var fileName in menuData) {
				menuList += '\n\t<li class = \"' + liClass + '\"><a href=\"#' + fileName + '\" class=\"' + aClass + '\">' +
				menuData[fileName] + '</a></li>'; // обязательно экранируем кавычки
			}  //  \t - табуляция, \n - переход на новую строчку
		menuList += '\n</ul>';
		return menuList;
}

var menu = {
		'home' 		: 'Home',
		'about' 	: 'About Us',
		'services' 	: 'Services',
		'contactus'	: 'Contact Us'
	};

console.log(createMenu(menu, 'menu', 'menu__item', 'menu__link'));
 
 /*
'Hello \' ' + userName + '\''
"Hello, " + username + "!"

*/




//--------------------------
function createArticle(articleData) {
	var article = '<article class=\"' + articleData.className + '\">'+'\n<h2>' + articleData.title + '</h2>' + '\n<p>' + articleData.text + '</p>' + '<\nspan>' + articleData.author + '</span>' + '<\n/article>';
	return article;
}
var myArticle = { //то что подаём на вход пишем за пределами функции
	'title' : 'Article Heading',
	'text'	: 'Article Text',
	'author' : 'Article Author',
	'className'	: 'article'
};
console.log(createArticle(myArticle));