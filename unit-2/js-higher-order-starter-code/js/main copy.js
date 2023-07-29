/* --------------------------------------------------------
 * Movie Data to use during lab
 */
const movies = [
	{
		title: "Jurassic Park",
		year: 1993,
		genres: ["action", "adventure", "sci-fi"],
	},
	{
		title: "Back to the Future",
		year: 1985,
		genres: ["adventure", "comedy", "sci-fi"],
	},
	{
		title: "Aliens",
		year: 1986,
		genres: ["action", "adventure", "sci-fi"],
	},
	{
		title: "Indiana Jones and the Raiders of the Lost Ark",
		year: 1981,
		genres: ["action", "adventure"],
	},
	{
		title: "Star Wars: Episode IV - A New Hope",
		year: 1977,
		genres: ["action", "adventure", "fantasy", "sci-fi"],
	},
	{
		title: "Total Recall",
		year: 1990,
		genres: ["action", "sci-fi", "thriller"],
	},
	{
		title: "Mrs. Doubtfire",
		year: 1993,
		genres: ["comedy", "drama", "family"],
	},
	{
		title: "Hook",
		year: 1991,
		genres: ["adventure", "comedy", "family"],
	},
	{
		title: "Princess Mononoke",
		year: 1997,
		genres: ["animation", "action", "adventure"],
	},
	{
		title: "The Matrix",
		year: 1999,
		genres: ["action", "sci-fi"],
	},
	{
		title: "Star Trek II: The Wrath of Khan",
		year: 1982,
		genres: ["action", "adventure", "sci-fi"],
	},
	{
		title: "Toy Story",
		year: 1995,
		genres: ["animation", "adventure", "comedy"],
	},
	{
		title: "I am Legend",
		year: 2007,
		genres: ["action", "adventure", "drama"],
	},
];

// inspect movies array
console.table(movies);

// Step 1
// Function defiinition
function arrayForEach(arrayInput, callbackFunction) {
	// More code will go here later (in step 3)...
	for (let i = 0; i < arrayInput.length; i++) {
		console.log(arrayInput[i]);
		callbackFunction(arrayInput[i]);
	}
}

// Step 2
// Invoke
arrayForEach(movies, (element) => {
	// More code will go here later (in step 5)...
	if (element.title === "Jurassic Park") {
		console.log(element);
	}
});

// Part 2
movies.forEach(function (element) {
	console.log(element);
});

movies.forEach((element) => console.log(element));

let movie = movies.find(function (element) {
	if (element === "Total Recall") return element;
});
console.log(movie);

let ninetiesMovies = movies.filter(function (element) {
	let temp = [];
	if (element.year >= 1990 && element.year <= 1999) temp.push(element);
	return temp;
});
console.log("Nnties");
console.log(ninetiesMovies);

let moviesWithMappedIds = movies.map(function (element, id) {
	return Object.assign({ id: id }, element);
});
console.log("Part 4");
console.log(moviesWithMappedIds);
