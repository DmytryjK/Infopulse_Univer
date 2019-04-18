// ES5 Обозначения классов в JS 
function Person (height, weight) {
	console.log('this:',this); //всегда указывает на функцию в которой находится (буд-то я говорю о себе, this = я)
	this.height = height; //мой рост
	this.weight = weight; //мой вес
	
	this.breath = function() {
		console.log('breath');
	}
	this.eat = function() { //создание метода кушать
		console.log('eat');
	}

	this.sleep = function() {
		console.log('sleep');
	}

	this.breath(); //вызываем его в классе, что б он работал всегда для всех объектов
}

var person1 = new Person(170, 65);

person1.height = 175; // Переопределение person1
console.log('person1:',person1);
person1.eat(); //вызов метода для person1

console.log('--------------------------');

var person2 = new Person(180, 85);
console.log('person2:',person2);
person2.eat();
person2.sleep();