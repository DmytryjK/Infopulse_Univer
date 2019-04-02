var orderSum 		= 5000,
	deliveryPrice	= 40,
	discount		= 0,
	isVipClient		= true,
	isPromoCode		= true;

	if (orderSum >= 500) {
		console.log('Доставка бесплатно!')
		deliveryPrice = 0;
	}
	else {
		console.log('Доставка', deliveryPrice, 'грн.');
	}

console.log('Сумма заказа', orderSum, 'грн.');

	if (orderSum >= 700 && orderSum < 2000) {
		discount = 3; //3% процент не пишем
	}
	else if (orderSum >= 2000 && orderSum < 5000) {
		discount = 5;
	}
	else if (orderSum >= 5000) {
		discount = 7;
			if (isVipClient) { //Вип клиент от 5000
				console.log ('Вам подарок от фирмы');
			}
	}

	if (isPromoCode) { //promocode отдельная скидка для всех
		discount += 5;
		console.log ('По промокоду дополнительная скидка 5%');
		isPromoCode = false;
	}

console.log('Скидка:', discount + '%');
orderSum -= orderSum * discount / 100;
console.log('Сумма со скидкой:', orderSum);

orderSum += deliveryPrice;
console.log ('Сумма заказа с доставкой', orderSum, 'грн.');