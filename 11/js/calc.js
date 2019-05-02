function calculator () {
	let num1 		= document.querySelector('.num1'),
		num2 		= document.querySelector('.num2'),
		operator 	= document.querySelector('.operators'),
		result		= document.querySelector('.result'),
		result1		= document.querySelector('.result1');

	num2.style.boxShadow = 'none';
	if(operator.value == '+') {
		result.value = (+ num1.value) + (+ num2.value); //приводим в числовой формат
	}
	else if(operator.value == '-') {
		result.value = (+ num1.value) - (+ num2.value);
	}
	else if(operator.value == '*') {
		result.value = (+ num1.value) * (+ num2.value);
	}
	else if(operator.value == '/') {
		if(+ num2.value) {
			result.value = (+ num1.value) / (+ num2.value);
		}
		else {
			result.value = '';
			num2.style.boxShadow = '0 0 3px #ff0000'; //подсветка в случаи 0 в ячейке
		}
	}
	else if(operator.value == '^') { //возведение в степень 
		result.value = Math.pow((+ num1.value), (+ num2.value));
	}
	else if(operator.value == '%') { //остаток от деления
		result.value = (+ num1.value) % (+ num2.value);
	}
	result1.innerHTML = result.value; //выводим значение ещё и в созданый div
}

let btn 	= document.querySelector('.calc_btn');
btn.onclick = calculator;