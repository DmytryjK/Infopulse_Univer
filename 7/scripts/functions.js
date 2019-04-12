//описание функции
/*function sayHello(//аргументы) {//сигнатура функции
		//тело функции
}
*/

function sayHello(name = 'user') { //если аргументу присвоить значение, то оно выводится по умолчанию.
	var message = 'Hello, '+ name + '!'; //локальная переменная
	//возврат результата
	return message;
}

var message = 'Hi!'; //глобальная переменная, не зависит от внутр. переменных функций и наоборот
console.log(message);

//вызов функции
console.log(sayHello('Boris'));
console.log(sayHello('Ann'));
console.log(sayHello());

//
function calcSum(num1, num2) {
	return num1 + num2;
}

console.log('Sum:', calcSum(4,7));
// или
var num1 = 4,
	num2 = 7;

console.log('Sum:', calcSum(num1,num2));

// Площадь прямоугольника
function square(a, b) {
	return (a * b)+'m^2';
}
console.log('Square:', square(5,6));

//-----------------------------------------
function getCals(sFoodName, weight = 100) {
	var foodData = {
		'Виски'					: 222,
		'Кола'					: 40,
		'Икра осетровая'		: 235,
		'Масло 82,5%'			: 747,
		'Батон нарезной'		: 261
	},
	cals = 0;
		if (foodData[sFoodName]) {
			cals = foodData[sFoodName] * weight / 100;
		}//проверка на правильность ввода продукта или его наличие в таблице
		else {//Если нет введённого продукта в таблице
			showFoodItemMessage (sFoodName);
		}
	return cals;
	//return sFoodName + ' ' + foodData[sFoodName];//возвращаем ещё и название еды
}

console.log(getCals("Икра осетровая", 150)+' ккал.');

//-------Если нет введённого продукта в таблице
function showFoodItemMessage (sFoodName) {
	console.log('Обратите внимание:', sFoodName, 'отсутствует в нашей таблице и не будет учитываться в подсчёте');
}

//-----------------------------------------
function getDinnerCals(oDinner) { //подсчёт ккал введённого списка продуктов, исходя из тех, что есть в базе
		var cals = 0;
			for(var FoodName in oDinner) {
				cals += getCals(FoodName, oDinner[FoodName]);
			}
		return cals;
}

var myDinner = {
	'Виски'					: 150,
	'Кола'					: 80,
	'Икра осетровая'		: 100,
	'Масло 82,5%'			: 30,
	'Батон нарезной'		: 50
	}

console.log(getDinnerCals(myDinner)+'kkal.');





//
function getBirthdayData() {
	var birthdayData = {
		'4' : {
			'9' : {
				'Kate' 		: 1981,
				'Mihail' 	: 1999
				}
			}
		},
		today			= new Date(),
		month			= today.getMonth() +1,
		day				= today.getDate(),
		year			= today.getFullYear(),
		age				= 0,
		todayBirthday 	= birthdayData[month][day],
		friendsList		= '';
	
		for(var name in todayBirthday) {
			age = year - todayBirthday[name]; //возраст человека
			friendsList += name + ' ' + age +'\n';
		}
		return friendsList;
	//return birthdayData[month][day];
}
console.log(getBirthdayData());

