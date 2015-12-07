// Generates a random pokemon name when page loads.

// Must reload page to generate new name.

var firstNameArray = [
	"Pin",
	"Horse",
	"Jigg",
	"Man",
	"Bear",
	"Meta",
	"Drago",
	"Char",
	"War",
	"Pika",
	"Gas",
	"Mag",
	"Snub",
	"Toto",
	"Woo",
	"Giga",
	"Rot",
	"Rat",
	"Hoo",
	"Pug",
	"Para",
	"Psy"
]

var lastNameArray = [
	"chu",
	"dle",
	"saur",
	"leon",
	"ble",
	"puff",
	"duck",
	"bro",
	"ly",
	"doom",
	"cle",
	"doof",
	"cate",
	"ion",
	"ish",
	"tini",
	"gus",
	"chan",
	"raid",
	"tle",
	"tic",
	"dos",
	"gon",
	"fy",
	"ette",
	"chi",
	"fly",
	"stic",
	"don",
	"bat"
]



var firstName = firstNameArray[Math.floor(Math.random()*firstNameArray.length)];
var lastName = lastNameArray[Math.floor(Math.random()*lastNameArray.length)];

document.getElementById('pokename').innerHTML = firstName + lastName;