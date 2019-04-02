/*Домашка

1. Создать массив чисел (положительные и отрицательные)
	вывести значения:
		- строго больше 5,
		- отрицательные числа с чётными индексами (на чётных позициях)
		- положительные числа через одно
		- попарная перестановка элементов местами example [1, 3, 5, 7] -> [3, 1, 7, 5]

2. Создать ассоциативный массив goods:
	- вывести название товаров + стоимость
	- вывести суммарную стоимость всех товаров

*/
/*1 8 14 5*/
var nums 	= [1, 6, -3, 8, -7, -11, 3, -6, -1, 14, 22, 5],
	result	= '',
	positiveArr	= [],
	posResult = '';


//----------------------------------------------------------
	for(var i = 0; i < nums.length; i ++) {
		if (nums[i] > 5) {
			result += nums[i] + ' ';
		}
	}

	console.log('Числа массива, больше 5:',result);

//----------------------------------------------------------
result	= '';

	for(var i = 0; i < nums.length; i += 2) {
		if (nums[i] < 0) {
			result += nums[i] + ' ';
		}
	}

	console.log('Отрицательные числа с чётными индексами:',result);

//----------------------------------------------------------
result	= '';  //????????????????????????????????????????????

	for(var i = 0; i < nums.length; i ++) {
		if (nums[i] > 0) {	
			result += nums[i] +' ';
		}
	}

	var arr = result.split(' ');
	console.log(arr); //массив положительных чисел

	for(var j = 0; j < arr.length; j += 2) {
			posResult += arr[j] + ' ';
		}

	console.log('Положительные числа, через одно:', posResult);

//----------------------------------------------------------ПЕРЕСТАНОВКА ЧИСЕЛ МАССИВА--------------
result	= '';

	for(var i = 0, j = ''; i < nums.length; i += 2) {
		nums[j] = nums[i];
		nums[i] = nums[i + 1];
		nums[i + 1] = nums[j];		
	}

	for(var i = 0; i < nums.length; i ++) {
		result += nums[i] + ' ';
	}
console.log('Массив:',result);

//---------------------------TASK 2-------------------------------

result= '';
	var sum			= 0,
		
		goods 	= {
			
			'shoe' : {
				title 			: 'nike shoes',
				price			: 150
			},

			'wallet' : {
				title 			: 'levis wallet',
				price			: 45
			},

			'backpack' : {
				title 			: 'adidas backpack',
				price			: 85
			}	
	};


	for(var id in goods) {
		console.log(goods[id].title+':', goods[id].price+'$');
	}


//-----------------------------------------------
	
	for(id in goods) {
		sum += goods[id].price;
	}

console.log('Сумма товаров:',sum + '$');




/////////////////////////////////////////////////////////////




/*
1. Сделать многомерный массив 'Гороскоп'
	- знак зодиака: диапазон дат, гороскоп на текущий месяц
	- создать переменную, где сохраняем знак зодиака
	- вывести диапазон дат по знаку и гороскоп

2. Создать многомерный массив товаров
	- вывести товары, дороже какого-то значения (n)

3. Создать многомерный массив сотрудников
	- id код: имя, день рождения, пол
	- вывести только женщин
*/

var	horoscope		= {
				
	'Овен'		: 	{	
						date			: '21.03 - 19.04',
						description		: 'Lorem ipsum dolor sit amet.'
					},

	'Телец' 	: 	{	
						date			: '20.04 - 20.05',
						description		: 'Lorem ipsum dolor sit amet.'
					},


	'Близнецы' 	: 	{	
						date			: '21.05 - 20.06',
						description		: 'Lorem ipsum dolor sit amet.'
					},

	'Рак' 		: 	{	
						date			: '21.06 - 22.07',
						description		: 'Lorem ipsum dolor sit amet.'
					},

	'Лев'		:	{	
						date			: '23.07 - 22.08',
						description		: 'Lorem ipsum dolor sit amet.'
					},

	'Дева'		:	{	
						date			: '23.08 - 22.09',
						description 	: 'Lorem ipsum dolor sit amet.'
					},

	'Весы'		:	{	
						date			: '23.09 - 22.10',
						description		: 'Lorem ipsum dolor sit amet.'
					},

	'Скорпион'		: {	
						date			: '23.10 - 21.11',
						description		: 'Lorem ipsum dolor sit amet.'
					},

	'Стрелец'		: {	
						date			: '22.11 - 21.12',
						description		: 'Lorem ipsum dolor sit amet.'
					},

	'Козерог'		: {	
						date			: '22.12 - 19.01',
						description		: 'Lorem ipsum dolor sit amet.'
					},

	'Водолей'		: {	
						date			: '20.01 - 18.02',
						description		: 'Lorem ipsum dolor sit amet.'
					},

	'Рыбы'			: {	
						date			: '19.02 - 20.03',
						description		: 'Lorem ipsum dolor sit amet.'
					}
					
	},

	sign = 'Рыбы';
				
	console.log(' '+sign+'\n',horoscope[sign].date+'\n',horoscope[sign].description);


/*-------------------------------------------*/

	var products		= {

			'samsung'	: {

				brand		: 'samsung',
				price 		: 700,
				diagonal	: 50
			},

			'panasonic'	: {

				brand		: 'panasonic',
				price		: 950,
				diagonal	: 55
			},

			'SONY'		: {

				brand 		: 'SONY',
				price		: 1200,
				diagonal	: 60
			}
	},

	n = 920;

	for (var id in products) {
		if (products[id].price > n) {
			console.log(' brand:',products[id].brand+'\n', 'price:',products[id].price+'$\n', 'diagonal:',products[id].diagonal+'"'+'\n');
		}
	}


/*---------------------------------------*/

	var peoples		= {

		'135421'	: {
			name		: 'Ira',
			birthday	: '21.03',
			gender		: 'female'
		},

		'135422'	: {
			name		: 'Valera',
			birthday	: '27.08',
			gender		: 'male'
		},

		'135423'	: {
			name		: 'John',
			birthday	: '03.11',
			gender		: 'male'
		},

		'135424'	: {
			name		: 'Luda',
			birthday	: '1.06',
			gender		: 'female'
		},

		'135425'	: {
			name		: 'Tania',
			birthday	: '12.03',
			gender		: 'female'
		}
	},

	isGender		= 'female';


	for(var id in peoples) {
		if(peoples[id].gender === isGender) {
			console.log(' Name:',peoples[id].name+'\n', 'Birthday:',peoples[id].birthday+'\n', 'Gender:',peoples[id].gender);
		}
	} 