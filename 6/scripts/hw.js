/*
1. Есть 3 диапазона: цифры, большие лат. буквы, мал лат. 
буквы (Сначала рандом определяет из какого диапазона генерировать от 0 до 2 (цифры, большие лат. или мал.,)) 
Потом в пределах диапазона генерируем уже сам пароль для индексов. 
Диапазоны кодировок задаъм многомерным массивом [[x,y], [x,y], []];

2. Генерировать случ. число от 0 до 9 (3-х значное число). Проверяем совпало ло число пользователя 
с рандомным числом на ПК.

3.Сделать программу, которая показывает какой сегодня праздник. Массив с месяцами, в нём даты, в них праздники. 
Если на этот день праздников нет, выводим, что праздников нет.

4. ВЫвести через 1 положительные числа с массива 1-м циклом, в блокноте написана часть решения
*/

//-----------------------------------------------------------
var nums 	= [1, 6, -3, 8, -7, -11, 3, -6, -1, 14, 22, 5], //ВОПРОС
	result	= '',
	j 		= 0;
//1 6 8 3 14 22 5
//  1 1    1  1

	for(var i = 0; i < nums.length; i ++) {
		if (nums[i] >= 0 && (!(j % 2) || j == 0)) {		 	
		 	j++;
        	result += nums[j] +' ';
				 
		}
	}
console.log('Положительные числа через одно: ',result);

//----------------------------------------------------------
console.log('-------------1.ГЕНЕРАЦИЯ ПАРОЛЯ------------');

var upperLetters 			= 'AZ', //опционально
	lowerLetters 			= 'az', //опционально
	numbers					= '09', //опционально 
	pswdLength				= 12, //опционально
	pswd 					= '',
	randIndexNum			= 0,
	randSymbol				= 0,
	
	firstUpperLetter		= upperLetters.charAt(0),
	lastUpperLetter			= upperLetters.charAt(1),
	
	firstLowerLetter		= lowerLetters.charAt(0),
	lastLowerLetter			= lowerLetters.charAt(1),
	
	firstNumber				= numbers.charAt(0),
	lastNumber				= numbers.charAt(1),
	
	unicodeUpperFirst		= upperLetters.charCodeAt(0),
	unicodeUpperLast		= upperLetters.charCodeAt(1),

	unicodeLowerFirst		= lowerLetters.charCodeAt(0),
	unicodeLowerLast		= lowerLetters.charCodeAt(1),

	unicodeNumbersFirst		= numbers.charCodeAt(0),
	unicodeNumbersLast		= numbers.charCodeAt(1),

	arrayUpper				= [],
	arrayLower				= [],
	arrayNumbers			= [],

	arrayAllSymbols			= [],
	newArraySymbols			= [];
	

	for (var i = unicodeUpperFirst; i <= unicodeUpperLast; i++) {
		arrayUpper.push(String.fromCharCode(i));
	}
	for (i = unicodeLowerFirst; i <= unicodeLowerLast; i++) {
		arrayLower.push(String.fromCharCode(i));
	}
	for (i = unicodeNumbersFirst; i <= unicodeNumbersLast; i++) {
		arrayNumbers.push(String.fromCharCode(i));
	}

	arrayAllSymbols.push(arrayUpper, arrayLower, arrayNumbers);

	for(var k = 0, j = 0; j < pswdLength; j++) {
		randIndexNum = Math.floor(Math.random() * ((arrayAllSymbols.length - 1) - k + 1)) + k;
			randSymbol = Math.floor(Math.random() * ((arrayAllSymbols[randIndexNum].length - 1) - k + 1)) + k;
				pswd += arrayAllSymbols[randIndexNum][randSymbol] + '';
	}
	

	console.log('Новый пароль:',pswd);

//----------------------------------------------------------
console.log('-----------2.ПРОВЕРКА НА СОВПАДЕНИЕ--------');
var m 			= 0,
	n 			= 9,
	numbLength	= 3,
	numberPC	= '',
	numberUser	= '273';


	console.log('User number:',numberUser);
	
	for (var i = 0; i < numbLength; i ++) {
		numberPC += Math.floor(Math.random() * (n - m + 1)) + m;
	}
	console.log('PC number:',numberPC);

	(numberPC == numberUser) ? console.log('Вы угадали, поздравляем') : console.log('Номера не совпали');

//----------------------------------------------------------
console.log('-----------------3.ПРАЗДНИКИ---------------');

var celebrations = {
		'7/4/2019' : '',
		'9/4/2019' : 'Пасха'
	},
	date 		= new Date(),
	todayDate	= '';


todayDate = (date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());

	if (todayDate in celebrations && celebrations[todayDate] != '') {
		console.log('Сегодня праздник:',celebrations[todayDate]);
	}
		else if (todayDate in celebrations) {
			console.log('Сегодня нет праздника');
		}
			else {
				console.log('Нет информации по сегодняшнему дню');
			}
		
	


