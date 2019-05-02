//переписать домашки с функциями на классы (Не на ЧЕТВЕРГ)

//Задание с рекурсией, делаем вложенный массив, есть пункты меню, которые чему-то соотвутствуют. Элементы массива = простые массивы. Попробовать циклом сделать сначала, потом рекурсией.

//---------------------1 getBirthday

class GetBirthdayDate {
	constructor() {
		this.birthdayData 		= {
		'4' : {
			'25' : {
				'Kate' 		: 1981,
				'Mihail' 	: 1999,
				'Vasiliy'	: '',
				''			: 1985
				},

			'12' : {
				'Kate' 		: 1981,
				'Mihail' 	: 1999,
				'Vasiliy'	: '',
				''			: 1985
				}
			}
		};
		this.age				= 0;
		this.friendsList		= '';
	}

	getDate() {
	let today					= new Date(),
		month					= today.getMonth() +1,
		day						= today.getDate(),
		year					= today.getFullYear(),
		todayBirthday 			= this.birthdayData[month][day];

		if (todayBirthday === undefined) {
				this.friendsList += 'Сегодня дней рождений нет';
			}
		else {

			for(let name in todayBirthday) {
				this.age = year - todayBirthday[name] + ' лет'; //возраст человека

				if (todayBirthday[name] == '') {
					this.friendsList += name + ': Не введён год рождения' + '\n';
				}
				else if(name == '') {
					this.friendsList += 'Отсутствует имя человека в базе данных, возраст:' + ' ' + this.age + '\n';
				} 
				else {		
					this.friendsList += name + ' ' + this.age +'\n';
				}
				
			}

		}
		console.log(this.friendsList);
	}
}

let birthday = new GetBirthdayDate();
birthday.getDate();


//-----------------------2 getRolls
let aRoomData 	= {
			'Room' : {
				'length' 	: 5,
				'width' 	: 6,
				'height' 	: 2.5
			},

			'Door' : {
				'width'  	: 0.9,
				'height' 	: 2
			},

			'Window' : {
				'width' 	: 2,
				'height' 	: 2
			}
		};

class Rolls {
	constructor(numbersOfWindow = 1, lengthOfRoll = 10, widthOfRoll = 0.53) { 
		this.aRoomData  		= aRoomData;
		this.roomP 				= 0; //перим. комнаты
		this.windowP 			= 0;
		this.doorP				= 0;
		this.effectiveP 		= 0;
		this.numOfRolls			= 0;
		this.WallperP			= 0;
		this.numbersOfWindow 	= numbersOfWindow;
		this.lengthOfRoll 		= lengthOfRoll;
		this.widthOfRoll 		= widthOfRoll;
	}

	getRolls() {
		if(this.numbersOfWindow && this.lengthOfRoll && this.widthOfRoll) {
			this.roomP = 2 * (this.aRoomData.Room.length + this.aRoomData.Room.width);
			this.doorP = this.aRoomData.Door.width * this.aRoomData.Door.height;
			this.windowP = this.numbersOfWindow * (this.aRoomData.Window.width * this.aRoomData.Window.height);
			this.WallperP = Math.round(this.lengthOfRoll * this.widthOfRoll / this.aRoomData.Room.height);
			this.effectiveP = this.roomP - this.doorP - this.windowP;
			this.numOfRolls = Math.ceil(this.effectiveP / this.WallperP);		
			console.log('количество рулонов:', this.numOfRolls);
		}
		else {
			console.log('Проверьте правильность введённых данных');
		}
	}
}

let Rolls1 = new Rolls(2);
Rolls1.getRolls();


//------------------------3 Cocatails

let userIngredients = [
		alcohols = ['rom', 'wisky'],
		fruits = [],
		liquids = ['cola'],
		vegetables = ['mint']
	];

class Coctails {
	constructor(title, userIngredients, LiClass) {
		this.title = title;
		this.userIngredients = userIngredients;
		this.LiClass = LiClass;
	}
	getCoctails() {
		let menuList = '<h1>' + this.title + '</h1>' + '\t\n'+'<ul>';
			for (let i = 0; i < this.userIngredients.length; i ++) {
				for (let k = 0; k < this.userIngredients[i].length; k ++) {
					if (this.userIngredients[i][k]) {
						menuList += '\n'+'\t'+ '<li' + ' class' + '=' + '\"' + this.LiClass + '\"' + '>' + this.userIngredients[i][k] + '</li>';
					}
				}
			}
		menuList += '\t\n'+'</ul>';
		console.log(menuList);
	}
	
}

let coctail1 = new Coctails('Your coctail', userIngredients, 'li_ingredients');
coctail1.getCoctails();




//----------------------- РЕКУРСИЯ В ПРОЦЕССЕ...

let createMenu = (menuData, ulClass, liClass, aClass) => {
	let menuList = `<ul class="${ulClass}">`;
		for(let fileName of menuData) {
			menuList += `\n\t<li class="${liClass}"><a href="#${fileName}" class="${aClass}">${fileName}</a></li>`;
		}  
	menuList += '\n</ul>';
	return menuList;
}

let menu = ['Home', 'About Us', 'Services', 'Contact Us'];

console.log(createMenu(menu, 'menu', 'menu__item', 'menu__link'));


