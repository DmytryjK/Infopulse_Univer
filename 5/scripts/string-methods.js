var letter 		 	= "AZ",
	firstLetter 	= letter.charAt(0), // letter[0]
	firstLetterNum 	= letter.charCodeAt(0),
	lastLetterNum  	= letter.charCodeAt(1),
	letters			= "",
	sDate			= "2019-04-02",
	aDate			= sDate.split("-"),
	months			= {
			 "04" : "апр",
			 "05" : "май"
		};
	
console.log(letter);	
console.log("firstLetter:", firstLetter, firstLetterNum);

	for(var i = firstLetterNum; i <= lastLetterNum; i ++){
		letters += String.fromCharCode(i) + " ";
	}
console.log(letters);

console.log(sDate, aDate);
console.log(aDate.reverse().join("/"));
console.log(aDate[0], months[aDate[1]], aDate[2]);

aDate[1] = months[aDate[1]];
console.log(aDate.join(" "));

console.log(sDate.substr(0,4)); // c 0-го символа взять четыре по количеству
console.log(sDate.slice(5,7)); 	// c 5-го по 7-й символ (не включительно)
console.log(sDate.slice(5)); 	// c 5-го символа до конца строки


/* 
months[aDate[1]]
aDate[1] - 04
months["04"]
 */

