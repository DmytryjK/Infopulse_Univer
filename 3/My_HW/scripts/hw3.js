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
	posResult;


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

	var arr = (result.split(' ', 7));
	console.log(arr);

	for(var j = 0; j < arr[j].length; j += 2) {
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