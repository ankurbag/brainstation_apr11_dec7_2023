/**
 * 
     Alice wants to orderPizza and callBob
 */
class Person {
	// Property
	constructor(name, address, phno) {
		this.name = name;
		this.address = address;
		this.phno = phno;
	}

	// Interactions
	orderPizza = () => {
		return `${this.name} is ordering pizza`;
	};

	callBob = () => {
		return `${this.name} calls Bob`;
	};

	eatPizza = () => {
		return `${this.name} eats pizza`;
	};
}

class PizzaPlace {
	// Property
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}

	// Interactions
	makePizza = () => {
		return `${this.name} is making pizza`;
	};

	deliverPizza = () => {
		return `${this.name} is delivering pizza`;
	};
}

// Create Objects
let person1 = new Person("Alice", "Toronto", "12345689");
let person2 = new Person("Bob", "Toronto", "8989988");

let pizzaPlace = new PizzaPlace("Pizza Hut", "Kitchener");

// Implement the interactions between the objects
// person1 calls pizza and orders pizza
// person1 calls person2
// they wait
console.log(person1.orderPizza());
console.log(person1.callBob());

// pizza place takes the order and starts making pizza
// pizzaplace delivers
console.log(pizzaPlace.makePizza());
console.log(pizzaPlace.deliverPizza());

// Lets wait for 1 hr
console.log(`${person1.name} and ${person2.name} are waiting`);

// both person enjoy pizza
console.log(person1.eatPizza());
console.log(person2.eatPizza());
