// Blue Print

function Person(name, age, height) {
	this.name = name;
	this.age = age;
	this.height = height;

	this.sayHello = () => {
		return "Hi" + this.name;
	};
}

let person1 = new Person("Ankur", 32, 170);

let person2 = new Person("Alice", 32, 170);

function PizzaPlace(name, age, height) {}
