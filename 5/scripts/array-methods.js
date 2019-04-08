var colors			= ['red', 'green', 'blue'],
	colorsLength	= colors.length,
	delColor		= ''; //переменная для сохранения удаленного элемента

//------------------------------------------- Удаление элементов
delColor = colors.splice(1, 1, 'orange', 'white'); //1 -> номер элемента, который удаляем 1-> кол-во элементов, которые удаляем
console.log('Элемент который удалили:', delColor);
console.log(colors);

console.log('reverse:', colors.reverse());//переставляет все элементы
console.log('sort:', colors.sort()); //сортировка (строки - по алфавиту)
console.log('join:', colors.join(', ')); //объединяет эллементы массива в строку по разделителю




