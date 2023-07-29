console.log("=== BONUS ROUND ===");

const dogs = [
    { name: "Rufus", age: 5 },
    { name: "Champion", age: 8 },
    { name: "Spot", age: 3 }
];

// Using a function in a loop to display all dogs!
for (let i = 0; i < dogs.length; i++) {
    let text = formatDogAge(dogs[i].name, dogs[i].age);
    console.log(text);
}

// Using the built-in Math.random() function to generate a random number
function getRandomNumber() {
    let number = Math.random() * 10;
    let rounded = Math.floor(number);
    return rounded;
}

console.log(getRandomNumber());
