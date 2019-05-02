
let copy = () => {
	let userText = document.querySelector('.userText'),
		CopyPaste = document.querySelector('.CopyPaste');
		CopyPaste.value = userText.value.split('-').join('');
}

let btn	= document.querySelector('.submit');
	btn.onclick = copy;
