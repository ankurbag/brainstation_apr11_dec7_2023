// FPL
function rectangleArea(w, h) {
	return w * h;
}

function printArea(dimensions, unit) {
	console.log("Area :" + dimensions + "sq" + unit);
}

printArea(rectangleArea(10, 5), "cm");

// 1. Function as Parameters value

console.log(rectangleArea(5, 10));
// Way 1
function sum(num1, num2) {
	return num1 + num2;
}

// Way 2
let num3 = 5;
let sum2 = function (num1, num2) {
	return num1 + num2;
};
printArea(sum2(10, 100), "mtrs");

// 2 Functions as Arguments
function printHello() {
	console.log("Hello");
}

let printHello2 = function () {
	console.log("Hello");
};

// Named
setTimeout(printHello, 3000); // function as Argument

// Anonymous
setTimeout(function () {}, 5000);

let v = 5;
v = null;
v = 6;

setTimeout(function () {
	console;
}, 5000);

// Arrow functions
// Dealration withouat any parameters
// Way 1
function greetClass() {
	console.log("Hello Way 1");
}

// Way 2
let greetClass2 = function () {
	console.log("Hello Way 2");
};

// Way 3
// Imperative / Declarative
let greetClass3 = () => console.log("Hello Way 3");
let greetClass4 = () => {
	console.log("Hello Way 3");
	console.log("Line2");
};

// call
greetClass();

greetClass2();

greetClass3();

greetClass4();

// With parameters
// 2 params
function printMyName(firstName, lastName) {
	console.log("Name : " + firstName + " " + lastName);
}

let printMyName2 = function (firstName, lastName) {
	console.log("Name : " + firstName + " " + lastName);
};

let printMyName3 = (firstName, lastName) =>
	console.log("Name : " + firstName + " " + lastName);

printMyName("Ankur", "Bag");
printMyName2("Ankur", "Bag");
printMyName3("Ankur", "Bag");

// 1 param
function printfName(firstName) {
	console.log("Fname : " + firstName);
}

let printfName2 = function (firstName) {
	console.log("Fname : " + firstName);
};

let printfName3 = (firstName) => console.log("Fname : " + firstName);
printfName3("Bob");

//Anonymous functin

setTimeout(function () {
	console.log("Hello from Anon");
}, 5000);

setTimeout(() => {
	console.log("hello from Anon Arrow Fun!");
}, 5000);
