// /* --------------------------------------------------------
//  * Movie Data to use during lab
//  */
// const movies = [
// 	{
// 		title: "Jurassic Park",
// 		year: 1993,
// 		genres: ["action", "adventure", "sci-fi"],
// 	},
// 	{
// 		title: "Back to the Future",
// 		year: 1985,
// 		genres: ["adventure", "comedy", "sci-fi"],
// 	},
// 	{
// 		title: "Aliens",
// 		year: 1986,
// 		genres: ["action", "adventure", "sci-fi"],
// 	},
// 	{
// 		title: "Indiana Jones and the Raiders of the Lost Ark",
// 		year: 1981,
// 		genres: ["action", "adventure"],
// 	},
// 	{
// 		title: "Star Wars: Episode IV - A New Hope",
// 		year: 1977,
// 		genres: ["action", "adventure", "fantasy", "sci-fi"],
// 	},
// 	{
// 		title: "Total Recall",
// 		year: 1990,
// 		genres: ["action", "sci-fi", "thriller"],
// 	},
// 	{
// 		title: "Mrs. Doubtfire",
// 		year: 1993,
// 		genres: ["comedy", "drama", "family"],
// 	},
// 	{
// 		title: "Hook",
// 		year: 1991,
// 		genres: ["adventure", "comedy", "family"],
// 	},
// 	{
// 		title: "Princess Mononoke",
// 		year: 1997,
// 		genres: ["animation", "action", "adventure"],
// 	},
// 	{
// 		title: "The Matrix",
// 		year: 1999,
// 		genres: ["action", "sci-fi"],
// 	},
// 	{
// 		title: "Star Trek II: The Wrath of Khan",
// 		year: 1982,
// 		genres: ["action", "adventure", "sci-fi"],
// 	},
// 	{
// 		title: "Toy Story",
// 		year: 1995,
// 		genres: ["animation", "adventure", "comedy"],
// 	},
// 	{
// 		title: "I am Legend",
// 		year: 2007,
// 		genres: ["action", "adventure", "drama"],
// 	},
// ];

// // // inspect movies array
// console.table(movies);

// // // 1.  forEach
// // console.log("Task 1 : forEach Method");
// // movies.forEach((element) => {
// // 	console.log(element);
// // });

// // // 2. find movie
// // console.log("Task 2 : Find Method");
// // let resultFind = movies.find((element) => {
// // 	if (element.title === "Total Recall") return element;
// // });

// // let resultFind2 = movies.find((element) => element.title === "Total Recall"); // ES6 way

// // console.log(resultFind);
// // console.log(resultFind2);

// // // 3. Filter movies for 90s
// // console.log("Task 3 : Filter Method");
// // let ninetiesMovies = movies.filter((movie) => {
// // 	if (movie.year >= 1990 && movie.year <= 1999) return movie;
// // });

// // let ninetiesMovies2 = movies.filter(
// // 	(movie) => movie.year >= 1990 && movie.year <= 1999 // ES6 ways
// // );

// // console.table(ninetiesMovies);
// // console.table(ninetiesMovies2);

// // // 5. Sort By year
// // console.log("Task 3 : Sort Method");
// // movies.sort((mov1, mov2) => {
// // 	// return  mov1.year - mov2.year; // Asc order
// // 	return mov2.year - mov1.year; // Asc order
// // });

// // movies.sort((mov1, mov2) => mov2.year - mov1.year); // ES 6 ways

// // console.table(movies);

// // // 4. Map function
// // console.log("Task 4 : Map Method");

// // let moviesWithMappedIds = [];

// // moviesWithMappedIds = movies.map((movie, index) => {
// // 	let target = { id: index + 123 };
// // 	let output = Object.assign(target, movie);
// // 	return output;
// // });

// // console.log(moviesWithMappedIds);

// // Part 1: Create Your Own Higher-order Function That Takes a Function as an Argument

// // 1. Definition
// // arrayForEach --> HO
// // accepts caalbackFn
// function arrayForEach(arrayInput, callbackFunction) {
// 	// More code will go here later (in step 3)...
// 	for (let ele of arrayInput) {
// 		//console.log(ele);
// 		callbackFunction(ele);
// 	}
// }

// // 2.
// arrayForEach(movies, (element) => {
// 	//console.log(element);
// 	// More code will go here later (in step 5)...
// 	if (element.title === "Jurassic Park") console.log(element);
// });

// let result = movies.find((element) => {
// 	//console.log(element);
// 	// More code will go here later (in step 5)...
// 	if (element.title === "Jurassic Park") return element;
// });

// console.log(result);

//
// Callback Hell
//

console.log("Call Pizza");

/// Pizza Hut operations
setTimeout(() => {
	console.log("order cheese pizza");
	setTimeout(() => {
		console.log("Create Dough");
		setTimeout(() => {
			console.log("Add Toppings");
			setTimeout(() => {
				console.log("Bake Pizza");
				setTimeout(() => {
					console.log("Deliver Pizza");

					setTimeout(() => {
						console.log("Enjoy Pizza");
					}, 1000);
				}, 1000);
			}, 500);
		}, 1000);
	}, 2000);
}, 1000);

console.log("Call Bob");

// ES

// Promise
let;
// asyn .. await
