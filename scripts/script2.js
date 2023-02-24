//NOTATKI Z ZAJĘĆ.

// PODSTAWOWE TYPY PROSTE:

// 1. Number - liczba
// 2. String - ciąg znaków (tekst)
// 3. Bolean - wartość logiczna (true/false)
// 4. Undefined - zmienna do której nie przypisano, zadnej wartości
// 5. Null - reprezentacja celowego braku wartości. Jest to jedna z prymitywnych wartości Javascript, jednocześnie jest traktowana jako false w odniesieniu do wartości Bolean.
// 6. Symbol -  to nowy prymitywny typ wprowadzony w ES6. Symbole są całkowicie unikalnymi identyfikatorami. Podobnie jak ich prymitywne odpowiedniki (Liczba, Łańcuch, Boolean), można je utworzyć za pomocą funkcji fabrycznej Symbol(), która zwraca Symbol.13 paź

// PODSTAWOWE TYPY ZŁOŻONE:

// 1. Object - Obiekt - {name: "Anna", age: 20, gender: 'female', isAdult: true}
// 2. Tablika - Array - ["Anna", "20", "female", "isAdult"]
// 3. Funkcja - Function - function logValue(value) { console.log(`Value is ${value}`)}

//DEKLARACJA ZMIENNYCH

// var - deklaracja globalna (scope(zakres) zmiennej dostępny w całym dokumencie)
// let - lexical scope - zakres/zasięg blokowy (instrukcja warunkowa, funkcja, pętla itp)
// const - lexical scope - nadpisanie zmiennej deklarowanej poprzez const na inny typ/wartość (w przypadku typów prostych) nie jest mozliwa.

// OPERATORY LOGICZNE W JAVASCRIPT - ZWRACAJACE najczęściej wynik obliczenia bądź wartość logiczna boolean - true/false.

// Operator  | Działanie operatora
// +    dodawanie liczb oraz klejenie łańcuchów (konkatenacja)
// -    odejmowanie liczb
// *    mnożenie liczb
// /    dzielenie liczb
// ++   inkrementacja (zwiększenie liczby o dokładnie 1)
// --   dekrementacja (zmniejszenie liczby o dokładnie 1)
// %    reszta z dzielenia (tzw. modulo), na przykład: 27 % 6 jest równe 3, gdyż cztery szóstki mieszczą się w 27 (co daje 24 i reszty zostaje 3)
// =    przypisanie wartości do zmiennej
// ==   porównanie wartości
// <    mniejsze od
// <=   mniejsze lub równe od
// >    większe od
// >=   większe lub równe od
// !    zaprzeczenie (negacja)
// &&   logiczne "i" (and)
// ||   logiczne "lub" (or)
// +=   skrócony zapis, np. a += b odpowiada: a = a + b
// -=   skrócony zapis, np. a -= b odpowiada: a = a - b
// *=   skrócony zapis, np. a *= b odpowiada: a = a * b
// /=   skrócony zapis, np. a /= b odpowiada: a = a / b
// %=   skrócony zapis, np. a %= b odpowiada: a = a % b

//PRACA Z OBIEKTAMI

// 1. Dodawanie nowego pola do obiektu - "NOTACJA Z KROPKA"

//Przykład

// const person = {
//     name: "Anna",
//     gender: 'female',
//     age: 25,
//     isAdult: true
// }

// Dodajemy nowe pole o nazwie - favoriteSong
// person.favoriteSong = "Like a Stone";

// sprawdzenie (zalogowanie w consoli obiektu person)

// console.log('My object person:', person);

// 2. Nadpisanie wartości istniejącego pola w obiekce - rowniez w tym celu uzywamy notacji z kropką.

//Przykład - nadpisujemy pole person.name - chcąc zmienić imię z "Anna" na "Bartek"

// person.name = "Bartek";

// sprawdzenie czy pole zostało nadpisane (zalogowanie w consoli obiektu person)

// console.log('My object person:', person);

// 3. Usunięcie pola z obiektu person

//Przykład - Chcemy usunąc pole "gender" z obiektu person - UŻYWAMY SŁOWA KLUCZOWEGO DELETE.

// delete person.gender;

// sprawdzenie czy pole zostało usunięte (zalogowanie w consoli obiektu person)

// console.log('My object person without gender field:', person);

// metody wbudowane w Obiekt np.

/* const target = {};
const source = { a: 5, b: 8, c: 'Ala ma kota' };
Object.assign(target, source);
console.log(target);
target.printCats = function () {
	console.log(`${target.c}`);
};
console.log(target.printCats());
const newStr = target.c.slice(0, 6);
console.log(newStr);
target.c = newStr;
console.log(target.printCats());
target.printCats = function () {
	console.log(`${target.c} ${target.b} kotów.`);
	alert('Ile Ala ma kotów?');
};
target.printCats();
target.b = 50;
target.printCats();
delete target.a;
console.log(target); */

// PRACA Z TABLICAMI (ARRAY)

// 1. Odczytanie wartości z tablicy - odbywa się po uprzednim podaniu nazwy zmiennej przechowującej tablice oraz indeksu elementu, do którego chcemy dotrzeć.

// Przykład.

// const array = [1,2,3,4,5,6,7];

// Chcemy wyświetlić 4 element tablicy - TABLICA INDEKSOWANA JEST OD 0! (0 oznacza pierwszy element tablicy)
// trzeci element tablicy - 0 - 1wszy, 1- drugi, 2- trzeci, **3-czwarty**

// array[3];

// console.log('My 4-th element in array is :', array[3]);

// DODANIE ELEMENTU DO TABLICY

//TODO: :) - dzisiejsze zajęcia.

// USUNIĘCIE ELEMENTU Z TABLICY:

// TODO :) - dzisiejsze zajęcia.

// PRACA Z FUNKCJAMI - najpierw IMPLEMENTUJEMY FUNKCJE - tzn rozpisujemy jej definicję:

// a) deklarujemy słowo kluczowe function
// b) deklarujemy nazwę naszej funkcji, nazwy tej będziemy uzywać podczas wywoływania funkcji
// c) deklarujemy opcjonalne parametry, jeśli funkcja ich nie posiada zostawiamy pusty - "()"
// d) otwieramy ciało funkcji poprzez - {}
// e) deklarujemy logikę funkcji - czyli to czym ona będzie się zajmować. Logika ta powinna/ma korespondować z nazwą funkcji (aby od razu się mozna było domyślić.)

// Przykład Funkcji logującej przekazaną wartość do console.log'a.

// IMPLEMENTACJA

// function logValue(value) {
//     console.log(`My value which i passed here is: ${value}`)
// }

//WYWOŁANIE funkcji logValue

// logValue("Wartością przekazaną do tej funkcji jest ten tekst");

// ! Funckję mozemy wywoływać z kilkoma parametrami. Parametrem moze byc zasadniczo wszystko : string, number, boolean, wyrazenie oraz inna funkcja.

//const logValue = () => alert('Welcome');

//TERNARY OPERATOR

//const firstName = 'Daro';
//const isDaro = firstName === 'Daro' ? true : false;

// IMPLEMENTACJA

/* const arrayOfNumbers = [1,2,4,5,6];



const makedouble = (array) => {

let tempArray = [];


array.forEach((value) => {
tempArray.push(value * 2);
})

console.log('tempArray', tempArray);
return tempArray;
}

makedouble(arrayOfNumbers); */


//array.map()

//KOMUNIKACJA FRONT_END - BACKEND, PROMISE, ASYNCHRONICZNOSC