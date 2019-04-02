var colors			= ['red', 'green', 'blue'],
	colorsLength	= colors.length,
	delColor		= ''; //переменная для сохранения удаленного элемента
console.log(colors);

console.log('Длина массива:', colorsLength);

console.log('Добавление элементов ***');
colorsLength = colors.unshift('yellow'); //добавление элемента в начало массива
console.log('Длина массива:', colorsLength);


colorsLength = colors.push('black'); //добавление элемента в конец массива
console.log('Длина массива:', colorsLength);

console.log(colors);

//-------------------------------------------

console.log('Удаление элементов ***');
delColor = colors.shift(); //удаляем первый элемент массива
console.log('Элемент, который удалили:', delColor);
console.log(colors);

delColor = colors.pop(); //удаляем последний элемент массива
console.log('Элемент, который удалили:', delColor);
console.log(colors);

//------------------------------------------- Добавление элементов
colors.splice(2, 0, 'pink') //2 -> на вторую позицию добавляем элемент Пинк; 0 -> зарезервирован для удаления
console.log(colors);

//------------------------------------------- Удаление элементов
delColor = colors.splice(3, 1); //3 -> номер элемента, который удаляем 1-> кол-во элементов, которые удаляем
console.log('Элемент который удалили:', delColor);
console.log(colors);
