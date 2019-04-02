var num = 1;

	while(num <= 5) { //пока n меньше 5, увеличиваем на 1
		console.log(num);
		num ++;
	}

/* Многомерные массивы*/

var nums 		= [[1, 3, 5], [2, 4, 6], [7, 8, 9]], // элементы многомерного массива выступают другие простые массивы
	nums1		= [[1, 2], [3, 4], [5, 6], [7, 8]],
	contacts 	= [
		{
			'name'	: 'Иванов',
			'phone'	: '234-90-89'
		},
		{
			'name'	: 'Петров',
			'phone'	: '231-90-43'
		},
		{
			'name'	: 'Карпов',
			'phone'	: '456-97-54'
		}
	],
	
	goods		= {
				'qwe1' : {
					title : 'телефон',
					brand : 'huawei',
					price :  7000
				},

				'asd2' : {
					title : 'ноутбук',
					brand : 'apple',
					price :  28000
				},

				'zxc3' : {
					title : 'принтер',
					brand : 'HP',
					price :  2000
				}
	},
	numsList	= '';

console.log(nums[0] [2], nums[1] [1], nums[2] [0]); //0 - индекс массива, 2 - индекс числа 5 в 0-м массиве
console.log(contacts[1] ['name'], contacts[1].phone); //выводим данные есть 2 варианта
console.log(goods['qwe1'].title, goods['qwe1'].brand, goods['qwe1'].price); //работаем с лючами ассоциативного массива

	for(var i = 0; i < nums.length; i ++) { //основной массив, двигаемся по 0, 1 и 2-му индексам
		console.log(nums[i]);		
		for(var j = 0; j < nums[i].length; j ++){ //вложенный массив, двигаемся по индексам, внутри массивов nums[i].length - длина каждого из массивов
			numsList += (nums[i] [j]) + ' '; //i - указывает на номер массива
		}
	}
	
console.log(numsList);

//----------------------------------------------------
numsList = '';
	for(i = 0; i < nums1.length; i ++) {
		for (j = 0; j < nums1[i].length; j++) {
			numsList += (nums1[i] [j]) + ' ';
		}
	}

console.log(numsList);
//----------------------------------------------------

	for(i = 0; i < contacts.length; i ++) {
		console.log(contacts[i].name, contacts[i].phone);
	}

	for(var id in goods) { //id - артикул товара, может быть любая переменная, ключ массива(индекс)
		console.log(goods[id].title, goods[id].brand, goods[id].price, 'грн.');
		//console.log(id.title, id.brand, id.price, 'грн.');
	}

