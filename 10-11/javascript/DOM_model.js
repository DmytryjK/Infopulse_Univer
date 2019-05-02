function showMessage1() {
	console.log('my message 1');
}

let btn1 = document.getElementById('btn1');
console.log(btn1, btn1.id, btn1.innerText); //выводим инфу о кнопке

btn1.onclick = showMessage1; //назначаем на событие click нашу функцию

//-----------------------
let buttons 	= document.getElementsByClassName('btn2'),
	buttonsList = document.getElementsByTagName('button'), //обращение ко всем кнопкам по тегу
	div			= document.querySelector(".text"); //обращаемся сразу как нам удобно

console.log(buttons, buttons.class);
console.log(div);

function showMessage2() {
	console.log('my message 2');
}
	for (let i = 0; i < buttons.length; i ++) { //каждая кнопка с одним классом будет выводить сообщение в консоль
		buttons[i].onclick = showMessage2;
	}
