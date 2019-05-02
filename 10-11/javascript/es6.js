let lang = 'JS'; //равила задания переменных в ES6
console.log('lang', lang);
	if(lang == 'JS') {
		let standart = 'ES6';
		console.log('standart', standart);
	}

const G = 9.8; //задаём константу, она никогда не переопределяется
console.log('G:', G);

//---------------------------------

class Person { //Создание классов в ES6
	constructor (height, weight) {  //Все свойства описываются в конструкторе
		this.height = height; //мой рост
		this.weight = weight; //мой вес

		this.breath(); //методы, которые должны сработать без вызова сразу - пишем в конструктор и добавляем this
	}
	breath() { //методы описываем в ES6 без функций и THIS 
		console.log('breath');
	}
	eat() { //создание метода кушать
		console.log('eat');
	}
	sleep() {
		console.log('sleep');
	}
}

let person1 = new Person(170, 65);

person1.height = 175; // Переопределение person1
console.log('person1:',person1);
person1.eat(); //вызов метода для person1

console.log('--------------------------');

let person2 = new Person(180, 85);
console.log('person2:',person2);
person2.eat();
person2.sleep();


//-----------------------------------

function createMenu(menuData, ulClass, liClass, aClass){
	let menuList = `<ul class="${ulClass}">`; //заменили код под ES6 без разрывов строк и +
		for(let fileName in menuData){
			menuList += `\n\t<li class="${liClass}"><a href="#${fileName}" class="${aClass}">"${menuData[fileName]}"</a></li>`; //заменили код под ES6 без разрывов строк и +
		}
	menuList += "\n</ul>";
	
	return menuList;
}

let menu = {
	"home" 		: "Home"
	,"about" 	: "About Us"
	,"services" : "Services"
	,"contacts"	: "Contact Us"
};

console.log(createMenu(menu, "menu", "menu__item", "menu__link"));

//------------------------------------

let colors  = ['red', 'blue', 'orange', 'green'];
	for (let color of colors) {
		console.log(color);
	}

//-------------------------------------
let myThis = this;
console.log('this', myThis);
//                ||
	function testThis() {
		console.log('this in testThis:', this);
	}

testThis();


//------------------------------------
let test1 = new testThis(); //Создаём новый объект; когда задаём новую переменную, то у нас this уже как чистый объект

let testArrowThis = () => { //Новое создание функций, с помощью СТРЕЛОК let testArrowThis = function () {}
	console.log('this in testThis:', this);
};

testArrowThis ();

//---------Оператор Spred-------------

let langs 		= ['PHP', 'Python', 'C++'],
	langsList 	= [...langs, 'Java']; // ... - позволяет добавить в другой массив уже существующий
console.log(langsList);


//-------Оператор Rest-----------------

showMenuList = (title, ...items) => { //собирает значения и записывает их в массив
	console.log(title, items);
}

showMenuList('my menu', 'about', 'contacts', 'home');

//-------------CALCULATOR---------------
console.log('#######################');
	class Calculator {
		constructor(num1, num2, operator) {
			this.num1 = num1;
			this.num2 = num2;
			this.operator = operator;
			this.result = 0;
		}

		getResult() {

			if (this.operator == '+') {
				this.result = this.num1 + this.num2;
			}
			else if(this.operator == '-') {
				this.result = this.num1 - this.num2;
			}
			else if (this.operator == '*') {
				this.result = this.num1 * this.num2;
			}
			else if (this.operator == '/') {
				this.result = this.num1 / this.num2;
			}

			console.log('result:', this.result);
		}
	}

let calc1 = new Calculator(5,6,'*'); //создаём объект новый
calc1.getResult(); //вызываем метод