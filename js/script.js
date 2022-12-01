"use strict"

// Завдання №1
// Варіант 1
/*
let someNum = null;
console.log(someNum ?? "ddddd")
*/

// Завдання №3
// Варіант 1
for (let i = 1; i < 6; ++i) {
	console.log(i);
}
console.log('--------------------');
for (let i = 1; i < 101; ++i) {
	console.log(i);
	if (i === 5) break;
}
console.log('--------------------');
let numOne = 1;
while (numOne < 6) {
	console.log(numOne);
	++numOne;
}
console.log('--------------------');
// Варіант 3
let num = 0;
while (num < 3) {
	console.log(`Число: ${num}`);
	++num;
}
console.log('--------------------');
// Варіант 4
for1:
for (let numTwo = 0; numTwo < 2; ++numTwo) {
	for (let size = 0; size < 3; ++size) {
		console.log(size);
		if (size === 1) {
			break for1;
		}
	}
}

// Завдання 4

console.log('--------------------');
// Варіант 2 
let value = "135.58px";
console.log(parseFloat(value));
console.log('--------------------');
// Варіант 3
let value1 = 58 + "Фрілансер";
if (isNaN(value1)) {
	console.log("результат NaN");
}
console.log('--------------------');
// Варіант 4
console.log(Math.max(10, 58, 39, -150, 0));
console.log('--------------------');
// Варіант 5
console.log(Math.floor(58.858));
console.log('--------------------');

// Завдання 5 
// Варіант 2 
let text = "Фрілансер";
console.log(text[5]);
console.log('--------------------');
// Варіант 4 
console.log(text.toUpperCase());
console.log('--------------------');
// Варіант 5 
console.log(text.slice(3, 6));
console.log('--------------------');

/*
! Upper, lower CASE
let something = `Goods and services`;
let upperSomething = something.toUpperCase();
console.log(upperSomething);
*/

/*
! Пошук рядка
let something = `Goods and services)`;
console.log(something.endsWith('ces)'));
*/

/*
// Переводить Number в String та є можливість переводити в системи числень 2, 8, 10, 16 toString(16)
let something = 10;
console.log(something.toString(16));
*/

/*
! slice - обрізає рядок
let something = `lesson`;
let somethingNew = something.slice(3, 6);
console.log(somethingNew);
*/


/*
! replace - заміна
let something = `lesson`;
something = something.replace("l", "");
console.log(something);
*/

/*
! Math.floor, Math.ceil, Math.round, Math.abs, Math.random(),

let someNumber;
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
*/

/*
! Math.max(a, b, c...) / Math.min(a, b, c...)
console.log(Math.max(1, 2, -3));
console.log(Math.min(1, 2, -3));
*/

/*
let something = "-35.2px";
console.log(typeof something);
console.log(parseFloat(something));
console.log(parseInt(something));
console.log(typeof parseFloat(something));

let someNumber = 2.85;
console.log(Math.round(someNumber * 100) / 100);

let num1 = 12.1;
let num2 = "20.4px";
let num3 = -12.4;
console.log(Math.ceil(num1));
console.log(parseInt(num2));
console.log(Math.abs(num3));
*/

/*
let something = "4";
let somethingSecond = "4";
let result = +something + +somethingSecond;
console.log(result);
console.log(typeof result);
*/

/*
let something = 1;
--something;
console.log(something);
*/

/*
let something = +"2" + 3 * 10 / 5;
console.log(something);
console.log(typeof something);
*/

/*
----------- Казус з рядками трохи не правильно ставить значення, переводить рядок в число -----------
!= - не дорівнює
== - не строге дорівнювання
--------------------------------------------------------------------------
=== - строге дорівнювання
!== - не дорівнює --- != ---
let something = 9 === 9;
console.log(something);
*/

/*
let something = !null;
console.log(Boolean(something));
*/

/*
Працює так що повертає перше true і програма на цьому закінчується
let something = 2 || "2dsdss";
console.log(something);
*/


/*
Працює так що повертає false і програма на цьому закінчується
let something = null && " ";
console.log(something);
*/

/*
let something = 5;
let somethingNew = 1;
if (something > somethingNew) {
	console.log('Yes');
	// Якщо умова вірно то програма працює
	// і закінчується в цьому блоці дальше не йде)
} else {
	console.log('No');
	// Якщо умова не виконана то працює цей блок
}
*/

/*
let something = 8;
let somethingNew = 5;
if (something === somethingNew) {
	console.log('first-block work');
	// Якщо умова виконана то програма працює
	// і закінчується в цьому блоці дальше не йде)
} else if (something < somethingNew) {
	console.log('second-block work');
	// Якщо умова не виконана вище то працює цей блок
} else {
	// Якщо дві або одна умова не виконується вище то працює цей блок
	console.log('third-block work');
}

// Цікавий приклад виконання умови
let something = 41;
if (something >= 40) {
	console.log('something більше 40');
} else if (something > 30) {
	console.log('something більше 30');
} else if (something > 20) {
	console.log('something більше 20');
} else if (something > 10) {
	console.log('something більше 10');
}
*/

/*
let something = "Hello!";
console.log(something.length);
for (let i = 0; i < something.length; ++i) {
console.log(something[i]);
}
// console.log(something[0]);
// console.log(something[1]);
// console.log(something[2]);
// console.log(something[3]);
// console.log(something[4]);
// console.log(something[5]);
*/

/*
let something = 4 > 5 ? "yes" : "no";
console.log(something);
*/
/*
let something = 0;
while (something < 5) {
	console.log("hi");
	++something;
}

for (let i = 0; i <= 4; ++i) {
	console.log('Hello');
}

for (let i = 1; i < 3; ++i) {
	for (let d = 1; d < 3; d++) {
		console.log(d);
	}
}

*/
// for (let i = 1; i < 4; ++i) {
// 	for (let d = 1; d < 4; ++d) {
// 		console.log(d);
// 		if (d === 1) continue;
// 	}
// 	if (i === 2) break;
// }
// let someNumOne = 0;
// do {
// 	console.log(someNumOne);
// 	++someNumOne;
// } while (someNumOne < 3);

/*
// Проблема в округленні 
let someNumber = 1.005 + Number.EPSILON;
console.log(Math.round(someNumber * 100) / 100);

let someNumber = 10 + " Прив";
console.log(isNaN(someNumber));
console.log(Number(someNumber));
console.log(someNumber);
*/

