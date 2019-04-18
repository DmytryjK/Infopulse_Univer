/*
function calculator(num1, num2, operator) {
	var result = 0;
	
		if (operator == '+') {
			result = num1 + num2;
		}
		else if(operator == '-') {
			result = num1 - num2;
		}
		else if (operator == '*') {
			result = num1 * num2;
		}
		else if (operator == '/') {
			result = num1 / num2;
		}
	return result;
}

console.log(calculator(5, 2, '*'));

*/

function Calculator(num1, num2, operator) {
	this.num1 		= num1;
	this.num2 		= num2;
	this.operator 	= operator;
	this.result		= '';

	this.getResult	= function() {//method
		if (this.operator == '+') {
			this.result = (+ this.num1) + (+ this.num2); //+ в скобках для перевода строки в число '3' = 3
		}
		else if(this.operator == '-') {
			this.result = this.num1 - this.num2;
		}
		else if (this.operator == '*') {
			this.result = this.num1 * this.num2;
		}
		else if (this.operator == '/') {
			if(+ this.num2) { //проверка есть ли 2-й элемент строкой //0 всегда даёт false и условие выполняться не будет  '0' -> 0 -> false
				this.result = this.num1 / this.num2;
			}
			else {
				console.log('Делить на 0 нельзя');
			}
		}
		console.log(this.result)
	}
	this.getResult();

}

var calc1 = new Calculator(3, 2, '/'); //аргументы, которые подаём на вход

calc1.getResult();