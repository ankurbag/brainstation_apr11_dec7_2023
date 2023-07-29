function x() {
	//
}

function y(x) {
	//
}

y(x);
/**
 * Part 1 : Creating our own HO function
 */

let arr = [1, 5, 6, 7, 8, 9];

// Calculate sq of the number
// const calcSquare = (numarr) => {
// 	let result = [];
// 	for (const n of numarr) {
// 		result.push(n * n); // fn 1
// 	}
// 	return result;
// };

// // Calculate cube of the nums
// const calcCube = (numarr) => {
// 	let result = [];
// 	for (const n of numarr) {
// 		result.push(n * n * n); // fn 2
// 	}
// 	return result;
// };

// // calculate power of 10
// const calcPow10 = (numarr) => {
// 	let result = [];
// 	for (const n of numarr) {
// 		result.push(n * n * n * n * n * n * n * n * n * n); // fn 3
// 	}
// 	return result;
// };
// // Function calls
// console.log(arr);
// console.log(calcSquare(arr));
// console.log(calcCube(arr));
// console.log(calcPow10(arr));

// Use HO

const square = (num) => {
	return num * num;
};

const cube = (num) => {
	return num * num * num;
};

const pow10 = (num) => {
	return num * num * num * num * num * num * num * num * num * num;
};

// Calculate sq of the number
const calculatePower = (numarr, callback) => {
	let result = [];
	for (const n of numarr) {
		let numres = callback(n);
		console.log(callback);
		result.push(numres);
	}
	return result;
};

// Function calls
console.log(arr);
console.log(calculatePower(arr, square));
console.log(calculatePower(arr, cube));
console.log(calculatePower(arr, pow10));
