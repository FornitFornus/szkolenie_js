function startEvent() {
	alert('Witajcie, lecimy dalej?! ;)');
	window.prompt('Jesteś Pewien?', 'Pewnie!');
}

//object
let person = {
	name: 'Anna',
	age: 24,
	gender: 'female',
	dateOfBirth: 1999,
	isAdult: true,
};

//templatestring
console.log(`My name is ${person.name} i have ${person.age}`);

person.favouriteSong = 'Time of seazon';
console.log(`My favourite song is ${person.favouriteSong}`);

delete person.gender;
console.log(person);

person.isAdult = false;
person.gender = 'male';
person.name = 'Tomasz';
console.log(person);

document.getElementById('person').innerHTML = `${person.name} ${person.age}`;

//ARRAY

let array = ['Tadeusz', 'Dariusz'];

// FUNKCJA

function logValue(logMessage) {
	console.log(logMessage);
}

logValue('to jest pierwsza wiadomość');
logValue('to jest druga wiadomość');
logValue(100);
