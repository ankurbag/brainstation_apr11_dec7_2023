let name = "Jane"; // Global
// Window.document.getElementById();

function display(text) {
	// Local / Block scope
	let myvar = "Ankur";
	console.log("Hello" + text);
}
// console.log(myVar);
// Block scope
{
	let var2 = "class is going on";
}
// console.log(var2);
display(name);

// let vs const vs var
var arr = [1, 2, 5, 6, 7, 8, 8];

for (var elem of arr) {
	console.log(elem);
}

console.log("elem out of block:", elem); // Anti pattern

// let
for (let myelem of arr) {
	console.log(myelem);
}

//console.log("element out of block", myelem);

//
const myvar = "Ankur";
myvar = "New value";

// const
for (const myelem of arr) {
	// primitive datatype
	// Object type
	console.log(myelem);
}
