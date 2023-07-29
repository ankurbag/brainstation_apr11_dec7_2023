/**
 * Part 2 : In built HO functions
 */

const animals = ["dog", "cat", "hamster"];

for (let i = 0; i < animals.length; i++) {
	console.log(animals[i]);
}

// 1. forEach
console.log("For each :");
function print(element) {
	console.log(element);
}

animals.forEach(print);

let obj = animals.forEach((element) => {
	element = element + " wow";
	console.log(element);
});
console.log(obj);
// returns undefined

// 2. map ~ foreach
let result = animals.map((element) => {
	element = element + " wow";
	console.log(element);
	return element;
});

console.log(result);
// map returns a new array

// 3. Filter

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// get all the even numbers
let res = [];
for (let i = 0; i < nums.length; i++) {
	if (nums[i] % 2 == 0) res.push(nums[i]);
}

console.log(`Filteread array is ${res}`);

let resultFromFilter = nums.filter((el) => {
	if (el % 2 == 0) return el;
});

let resultFromFilter2 = nums.filter((el) => el % 2 == 0);

console.log(`Filteread array is ${resultFromFilter}`);

console.log(`Filteread array is ${resultFromFilter2}`);
// return a array

// 4. Sort
let numsarr = [-1, 8, 10, 2, 5];

console.log("******Sorted array*****");
let resultSortArr = numsarr.sort();
console.log(resultSortArr); // ES4

// Higher Order function
// [11,2,22,1].sort((a, b) => a - b)
numsarr.sort((num1, num2) => {
	return num1 - num2; // negative or positve // Unicode substraction
});

console.log("Ascending " + numsarr);

numsarr.sort((num1, num2) => {
	return num2 - num1; // negative or positve // Unicode substraction
});

console.log("Descending " + numsarr);
// Alphabet sorting
let strArr = ["def", "abc", "acd", "cab"];
console.log(strArr.sort());

// Sort Array of objects
const products = [
	{ name: "bag", price: 50, year: 2000 },
	{ name: "sandals", price: 100, year: 2020 },
	{ name: "t-shirts", price: 20, year: 2005 },
	{ name: "bag", price: 90, year: 2005 },
];

console.table(products);
// Sorted by Price
products.sort((obj1, obj2) => {
	return obj1.price - obj2.price;
});

console.table(products);

products.sort((obj1, obj2) => {
	return obj2.price - obj1.price;
});

console.table(products);

//Sort by year
products.sort((obj1, obj2) => {
	return obj2.year - obj1.year;
});

console.table(products);

// Find :
let resultFind = products.find((element) => {
	if (element.name === "bag") return element;
});

console.table(resultFind);

let resultFilter = products.filter((element) => {
	if (element.name === "bag") return element;
});
console.table(resultFilter);
