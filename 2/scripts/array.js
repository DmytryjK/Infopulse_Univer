var colors = ['red', 'green', 'blue'];
console.log('Простой массив', colors);
colors [1] = 'pink'; // change variables of elements in array
console.log('Простой массив', colors);
colors [3] = 'orange';
console.log('Простой массив', colors);
colors [7] = 'yellow';
console.log('Простой массив', colors);


var students = {
	'Иванов'  : 5,
	'Петров'  : 3,
	'Сидоров' : 4
	},
	subjects = {
		'java'  : 2500,
		'qa'	: 3000,
		'angular'	: 4000
	}
;

console.log('Ассоциативный массив или объект', students);
students ['Сидоров'] = 5; // изменение значения элемента
console.log('Ассоциативный массив или объект', students);
students ['Карпов'] = 4; // добавление нового элемента в конец списка
console.log('Ассоциативный массив или объект', students);

console.log('Ассоциативный массив или объект', subjects);

subjects.java = 2800;
console.log('Ассоциативный массив или объект', subjects);


