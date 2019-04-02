/*
H/W 
1. Учебный центр
	Условия:
		Сумма оплаты за месяц;
		Кол-во месяцев обучения;
		Признак окончания курса true/false;
		Признак оплаты за весь курс;

		Скидки: 5% если закончили пред. курсы тут 
				5% при оплате за весь курс сразу
	
	Вывести сумму к оплате со скидками

--------------------------------------------------

2. Новая почта
	Условия:
		Код посылки совпал?;
		Наличие паспорта?;
		ФИО совпал?;
		Смс код совпал?;

//Вложенные условия!!!

	Вывести сообщение в зависимости от обстоятельств

*/

/*--------------------- FIRST TASK ----------------------------*/
console.log('--------------------- FIRST TASK ----------------------------')
var // don't changeble variables
	discount		= 0,	// сумма Скидки, default
	sumPayed		= 0,	// Сумма к оплате, если есть скидка за обучение на прошлом уровне
	// changeble variables
	sumPerMonth		= 3000, // сумма оплаты за месяц
	numbersOfMonth	= 3,	// кол-во месяцев для обучения


	isCourseEnd		= true,	// заканчивал ли ученик, ранее, курсы в этой компании?
	sumToPay		= 8550;	// сумма, котору планирует оплатить клиент, уже с учётом скидки за обучение по 1-му условию



	if (isCourseEnd) {
		discount = 5;
		sumPayed = sumPerMonth * numbersOfMonth - sumPerMonth * numbersOfMonth * discount / 100; // Сумма оплаты за курсы с учётом скидки за окончание предыдущих
		isCourseEnd = false;
		console.log('Сумма оплаты за текущие курсы, с учётом скидки:',discount + '%'+', составляет:', sumPayed+'.', 'Если оплатите все сразу - получите ещё -5%.');
	}

	else {
		sumPayed = sumPerMonth * numbersOfMonth;
		console.log('Оплатите всю сумму сразу:',sumPayed, 'и получите скидку - 5%');
	}


	if (sumPayed <= sumToPay) { //проверка на полную оплату курса, учитывая скидку по 1-му условию, если есть
		discount += 5;
		console.log ('Ваша скидка составила:', discount+'%.', 'Спасибо, что выбрали нашу компанию!');
		sumToPay = 0; // предотвращаем повторное использование скидки
	}
		
	else {
			console.log ('С частичной оплатой курсов', sumToPay, ', общая скидка составит:', discount + '%');
		}


sumPayed = sumPerMonth * numbersOfMonth - sumPerMonth * numbersOfMonth * discount / 100;

console.log('Сумма к оплате:', sumPayed);



/*--------------------- SECOND TASK ----------------------------*/

console.log('--------------------- SECOND TASK ----------------------------')

var isNumberOfPackege		= true, // Номер посылки совпал?
	isPassportProvide		= true, // Паспорт предоставлен?
	isFullNameOK			= true, // ФИО совпал?
	isSecretCodeOk			= true; // Секретный код подошёл?

console.log('Пожалуйста назовите номер посылки');	

	
if (isNumberOfPackege) {
  console.log('Предоставьте паспорт');
  
  if (isPassportProvide) {
  	console.log('Проверка данных в паспорте');
   
    	if (isFullNameOK) {
    		console.log('Назовите 4 цифры с телефона');
    
     	 if (isSecretCodeOk) {
        console.log('Можете забрать посылку');

      } else {
        console.log('Секретный код не подошёл');
      }
    } else {
      console.log('ФИО в пасспорте не совпал');
    }
  } else {
    console.log('Вы не предоставили пасспорт');
  }
} else {
  console.log('Номер посылки не совпал');
}
