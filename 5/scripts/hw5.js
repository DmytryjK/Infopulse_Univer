/*
// Вывести положительные значения массива через одно 1-м циклом. Нужно использовать остаток от деления
[1, 4, 8, -7, -3, 9]
1, 8 - только

//var 
	  userEntry 		= "TeST"
	, captchaText 		= "test"
	, captchaOk 		= userEntry == captchaText ? true : false
	;
	
// как выразить через ||?


/* HW */
/*
1. 'test1 test2 test3'
	- с помощью slice, substr, substring 3 раза вывести слово test1
2. Есть строка 'я люблю javascript'
	- вывести кол-во символов
	- заменить 'люблю' на 'обожаю'
	- вернуть кол-во слов в строке(вывести)
3. Строка ФИО в нижнем регистре (маленькие буквы)
	- вывести ФИО, где каждая первая буква слова в верхнем регистре


*/


//----------------------------------Home Work 3------------------------------------
var nums 	= [1, 6, -3, 8, -7, -11, 3, -6, -1, 14, 22, 5],
	result	= '';


	for(var i = 0; i < nums.length; i ++) {
		if (nums[i] > 0 && !(i % 2)) {	
			result += nums[i] +' ';
		}
	}
console.log('Положительные числа через одно: ',result);

//----------------------------------Home Work 5------------------------------------??????????????????
var 
	userEntry 		= "TeST",
	captchaText 	= "test",
	captchaOk 		= userEntry == captchaText ? true : false;

console.log(captchaOk);

//1----------------------------------------------------------------------------------
var sWords = 'test1 test2 test3';

console.log(sWords.slice(12, 17)); //test3  диапазон индексов для вывода
console.log(sWords.substr(6, 5)); //test2 с 6-го индекса 5 эллементов
console.log(sWords.substring(0, 5)); //test1 c 0-го по 5-й индекс



//2----------------------------------------------------------------------------------
var sStr 		= 'я люблю javascript',
	aStr 		= sStr.split(' '),
	newWord 	= 'обожаю';

//кол-во символов
console.log((sStr.replace(/ +/g, "")).length); // конструкция / +/g - ищет пробелы и склеивает слова

//замена слова
aStr[1] = newWord;
sStr 	= aStr.join(' ');
console.log(sStr);

//кол-во символов новой конструкции
console.log((sStr.replace(/ +/g, "")).length); 




//3-----------------------------------------------------------------------------------
var sFullName	= 'кизима дмитрий владимирович',
	aFullName	= sFullName.split(' '),
	test 		= [];

for(var i = 0; i < aFullName.length; i ++) {
	sFullName = aFullName[i];
		test += ((sFullName.charAt(0).toUpperCase())+sFullName.slice(1, sFullName.length)) + ' ';
}

console.log(test.trim());

