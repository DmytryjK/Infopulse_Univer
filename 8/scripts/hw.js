/*1. Написать функцию Коктейль
Есть элементы коктейля: основа, добавки, фрукты, алкоголь, лёд, зелень (опционально есть, можно не дописывать)
	Функция должна выводить весь состав в формате html, если каких-то компонентов нет то и теги не выводим лишние.
2. Попробовать сделать меню и подменю с помощью функции (каскадное меню с вложенностями)
3. Сделать калькулятор (кредитный, расчёт стоимости окон) на выбор. Выводим конечную стоимость в зависимости от введённых данных.
*/


//1

var userIngredients = [
		alcohols = ['rom', 'wisky'],
		fruits = [],
		liquids = ['cola'],
		vegetables = ['mint']
	];


function coctails (title, userIngredients, LiClass) {
	var menuList = '<h1>' + title + '</h1>' + '\t\n'+'<ul>';
			for (var i = 0; i < userIngredients.length; i ++) {
				for (var k = 0; k < userIngredients[i].length; k ++) {
					if (userIngredients[i][k]) {
						menuList += '\n'+'\t'+ '<li' + ' class' + '=' + '\"' + LiClass + '\"' + '>' + userIngredients[i][k] + '</li>';
					}
				}
			}
		menuList += '\t\n'+'</ul>';
		return menuList;
		
}

console.log(coctails('Your coctail',userIngredients, 'li_ingredients'));


//2

function createMenu (ulClass, liNumbers, liClass, aClass, aText, subMenuClass, subMenuLiNumbers = 0, subMenuLiClass, subMenu_aClass, subMenu_aText) {
	var menuList = '\n'+ '<nav>' + '\n\t' + '<ul' + ' class' + '=' + '\"' + ulClass + '\"' + '>';
			if (liNumbers && subMenuLiNumbers) {	
				for (var i = 0; i < liNumbers; i ++) {
					menuList += '\n\t\t'+ '<li' + ' class=' + '\"' + liClass + '\"' + '>' + '\n\t\t\t' + '<a' + ' class=' + '\"' + aClass + '\"' + ' href=' + '\"' + '#' + '\"' + '>' + aText + '</a>' + '\n\t\t\t' + '<ul' + ' class=' + '\"' + subMenuClass + '\"' + '>';

					for (var k = 0; k < subMenuLiNumbers; k ++) {
						menuList += '\n\t\t\t\t' +'<li' + ' class=' + '\"' + subMenuLiClass + '\"' + '>' + '<a' + ' class=' + '\"' + subMenu_aClass + '\"' + ' href=' + '\"' + '#' + '\"' + '>' + subMenu_aText + '</a>' + '</li>';
					}
					menuList += '\n\t\t\t' +'</ul>' + '\n\t\t' + '</li>';
				}	
			
			}	
			else if (liNumbers) {
				for (var i = 0; i < liNumbers; i ++) {
					menuList += '\n\t\t'+ '<li' + ' class=' + '\"' + liClass + '\"' + '>' + '<a' + ' class=' + '\"' + aClass + '\"' + ' href=' + '\"' + '#' + '\"' + '>' + aText + '</a>' + '</li>';
				}
			}

			else {
				 console.log('Введите количество списков');
				 menuList = '';
				 return menuList;
				}
		menuList += '\n\t' + '</ul>' + '\n' + '</nav>';

		return menuList;
}

console.log(createMenu('ul_menu', 5,'ul_menu__li', 'ul_menu__li_a', 'smth_text', 'sub__menu', 2,'sub__menu__li', 'sub__menu__li__a', 'smth_submenu_text'));

//Credit calcs

var periodOfMonth 	= 6,
	creditCash		= 30000,
	percentPerYear 	= 10,
	toPay			= 0,
	summaryToPay	= 0;


function windowsCalc() {
	clearSumPayForMonth = creditCash / periodOfMonth;
	for (var i = 0; i < periodOfMonth; i ++) {
		summaryToPay += clearSumPayForMonth + creditCash * (percentPerYear / 12 / 100);
		toPay = Math.ceil((clearSumPayForMonth + creditCash * (percentPerYear / 12 / 100))*10)/10;
		creditCash -= clearSumPayForMonth;
		console.log('Ежемесячный платёж:',toPay);//,'Остаток по кредиту:',creditCash);
	}

	return summaryToPay;
}

console.log('Сумарно к оплате:',windowsCalc());




