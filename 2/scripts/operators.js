var num1 	= 5,
	num2 	= 7,
	result 	= 0
	;

console.log('num1 =', num1, 'num2 =', num2, 'result =', result);
result = num1 + num2;
console.log(num1, '+', num2, '=', result);
result = num1 * num2;
console.log(num1, '*', num2, '=', result);

result += 2;
console.log('result +=2', result);

result ++;
console.log('result ++', result);

++ result;
console.log('++result', result);

num1 = 0;
num2 = 0;
console.log('num1 =', num1, 'num2 =', num2);

result = num1 ++; // сначала срабатывает присвоение, затем инкремент (res=num1) +1
console.log('num1 =', num1, 'num2 =', num2, 'result =', result);

result = ++ num2;	// сначала срабатывает инкремент, затем присвоение res=(num2+1)
console.log('num1 =', num1, 'num2 =', num2, 'result =', result); 

console.log('num1 == num2', num1 == num2); // сравнение 2-х переменных, true(равны) or false
console.log('num1 != num2', num1 != num2); // сравнение 2-х переменных, true(не равны) or false (равны)

num2 = '1';
console.log('num1 == num2', num1 == num2);
console.log('num1 === num2', num1 === num2); // сравнение типов(строка, число и т.д) и значений, знак тождества. True - равны по 2-м типам;

var message  = 'hello',
	userName = 'User1';
message += ', ' + userName + '!';
console.log(message); 