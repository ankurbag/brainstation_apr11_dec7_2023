/**
 * Returns the average of numbers
 * @param {*} num1
 * @param {*} num2
 * @param {*} num3
 * @returns
 */
function avg(num1, num2, num3) {
	// Calculate the avg
	let avg = (num1 + num2 + num3) / 3;

	// return
	return avg;
}

let ans = avg(1, 4, 7);
console.log(ans);

console.log(avg(1, 2, 3));

/**
 * Returns the equality
 * @param {*} str1
 * @param {*} str2
 * @returns
 */
// Write a function called isEqual
function isEqual(str1, str2) {
	// if (str1 === str2)
	//    return true;
	// else
	//    return false;

	// Modern JS way
	// Ternary operatory
	// Syntax :
	// (conditon) ? truthy : falsy;
	//let result = str1 === str2 ? console.log("True") : console.log("false");
	//return result;

	return str1 === str2;
}

console.log(isEqual(1, "1"));
console.log(isEqual("1", "1"));
console.log(isEqual("Bob", "bob"));

let eqVal = isEqual(1, "1");
console.log(eqVal);

// Write a function called output
function output(input) {
	console.log(input);
}

output("Hello I am having a great time");
output("");
output(undefined);
