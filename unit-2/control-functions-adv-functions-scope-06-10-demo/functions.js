// Functions

// Declaration / Definition
function greetStudents() {
	console.log("Hello students");
}

// Invoke / Execute
greetStudents();

// Positive / negative  number
// 5 : positive
// -24 : negative
function isPositiveORnegative(num) {
	if (num > 0) {
		console.log("This num is positive");
	} else if (num < 0) {
		console.log("This num is negative");
	} else if (num == null || num == undefined) {
		console.log("This num is not valid!");
	}
}
isPositiveORnegative(5);
isPositiveORnegative(-25);
isPositiveORnegative(null);

// If a number is Prime number
// Pass a number , return true or false
// 5 --> yes
// 10 --> No , 2,5

function isPrime(num) {
	// If the num 10
	// 10 / 2  = true, stop my execution, this is not prime

	// if the num is 7
	// 7 / 2 = false
	// 7 / 3 = false
	// 7 / 4 = false
	// 7 / 5 = false
	// 7 / 6 = FALSE
	// Prime
	for (let i = 2; i <= num - 1; i++) {
		// check if the num is dicide by iteself
		if (num % i === 0) {
			// Divisible
			return false;
		}
	}
	return true;
}

let ans = isPrime(11);
console.log(ans);
