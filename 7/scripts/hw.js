/*
1. дописать условие, если др в день нет, в последнюю функцию
2. рассчитать кол-во рулонов обоев на определённое помещение. Заданы размеры помещения, окон и т.д. Узнать размеры рулонов. 
*/

//---------------------1------------------
function getBirthdayData() {
	var birthdayData = {
		'4' : {
			'10' : {
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
		},
		today			= new Date(),
		month			= today.getMonth() +1,
		day				= today.getDate(),
		year			= today.getFullYear(),
		age				= 0,
		todayBirthday 	= birthdayData[month][day],
		friendsList		= '';
	
		if (todayBirthday === undefined) {
				friendsList += 'Сегодня дней рождений нет'
			}
		else {

			for(var name in todayBirthday) {
				age = year - todayBirthday[name] + ' лет'; //возраст человека

				if (todayBirthday[name] == '') {
					friendsList += name + ': Не введён год рождения' + '\n';
				}
				else if(name == '') {
					friendsList += 'Отсутствует имя человека в базе данных, возраст:' + ' ' + age + '\n';
				} 
				else {		
					friendsList += name + ' ' + age +'\n';
				}
				
			}

		}
		return friendsList;
	//return birthdayData[month][day];
}
console.log(getBirthdayData());


//---------------------2------------------
function getRolls(lengthOfRoll = 10, widthOfRoll = 0.53) {
	var aRoomData = {
		'Room' : {
			'length' 	: 5,
			'width' 	: 3,
			'height' 	: 2.4
		},

		'Door' : {
			'width'  	: 0.5,
			'height' 	: 1.8
		},

		'Window' : {
			'width' 	: 1.75,
			'height' 	: 1.5
		}
	},	
		numbersOfWindow = 1,
		roomSquare 		= 0, 
		windowSquare 	= 0,
		doorSquare		= 0,
		effectiveSquare = 0,
		numOfRolls		= 0; //полезная площадь, с вычетом окон и дверей
		
		roomSquare = aRoomData.Room.length * aRoomData.Room.width;
		doorSquare = aRoomData.Door.width * aRoomData.Door.height;
		windowSquare = numbersOfWindow * (aRoomData.Window.width * aRoomData.Window.height);
		effectiveSquare = roomSquare - doorSquare - windowSquare;
		numOfRolls = Math.ceil(effectiveSquare / (lengthOfRoll / aRoomData.Room.height * widthOfRoll));
		return numOfRolls;
}


console.log('Количество рулонов:',getRolls());


/*
		for(var object in aRoomData) {
			for(var dimensions in aRoomData[object]){
				if(typeof dimensions != Number || dimensions == '') {
					console.log('Проверьте правильность введённых данных:', object + ' - ' + dimensions);
					return numOfRolls;
				}
				else {
					roomSquare = aRoomData.Room.length * aRoomData.Room.width;
					doorSquare = aRoomData.Door.width * aRoomData.Door.height;
					windowSquare = numbersOfWindow * (aRoomData.Window.width * aRoomData.Window.height);
					effectiveSquare = roomSquare - doorSquare - windowSquare;
					numOfRolls = Math.ceil(effectiveSquare / (lengthOfRoll / aRoomData.Room.height * widthOfRoll));
				}
			}
		}

*/