console.log("Hello Dan!");

// Demo `if/else`, `switch`, and ternaries

// Syntax
// Use case : T or False
if (1 > 2) {
	// statements : will execute if true
	console.log("YES");
} else {
	// statements : will execute if false
	console.log("NO");
}

// Asking Alexa
// Whether it will rain today ?
let chancesOfRain = 40;
if (chancesOfRain > 50) {
	// More
	console.log("Alexa : More rain is expected");
} else if (chancesOfRain < 50) {
	// Less
	console.log("Alexa : Less rain is expected");
} else if (chancesOfRain > 25) {
	console.log("Alexa : Very Less But watchout rain is expected");
} else if (chancesOfRain < 25) {
	console.log("Alexa : Verr Little rain is expected");
} else {
	console.log("Alexa : No rain is expected");
}

// Switch case
let chancesOfRain2 = 30;

switch (chancesOfRain2) {
	//case values : // statements
	// break
	case chancesOfRain2 > 50:
		console.log("Alexa : More rain is expected");
		break;
	case chancesOfRain2 < 25:
		console.log("Alexa : Verr Little rain is expected");
		break;
	default:
		console.log("Alexa : Default");
		break;
}

// 4. Demo `for` loops and `while` loops

// for
/*
     for( inital starting point ; condition  to stop; increment / decremnt)

*/
// Greet students;
// console.log("Welcome Jessica");
// console.log("Welcome Chris");
// console.log("Welcome Lester");

let students = ["Jessica", "Chris", "Lester"]; // 3
//Basic syntax :
for (
	let i = 0;
	i <= students.length - 1 && condition2 && condition3 && condition4;
	i++
) {
	// i=0  i<= 2
	// i=1 i<= 2
	// i=2 i<=2
	console.log("Welcome " + students[i]);
}

//while
// inital starting point
// while (condition){
// statements
// increment / decremnt
// }
let j = 0;
while (j <= students.length - 1 && condition2 && condition3 && condition4) {
	console.log("Welcome " + students[j]);
	j++;
}
