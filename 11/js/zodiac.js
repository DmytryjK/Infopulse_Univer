//Sign of Zodiak
let signOfZodiak = (choiceIndex) => {
	let signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
		imgSign = document.querySelector('.img');

		imgSign.style.visibility = 'visible',
		imgSign.src = 'img/signs/' + signs[choiceIndex] + '.png';
		console.log(imgSign.src);
}

let list = document.querySelector('.zodiacList');

let showIndex = () => {
	signOfZodiak(list.selectedIndex);
}
for (let i = 0; i < list.length; i++) {
	list.onchange = showIndex;
}