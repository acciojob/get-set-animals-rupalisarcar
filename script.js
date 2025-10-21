//complete this code
class Animal {
	constructor(species:string){
		this._species = species;
	}
	get species{
		return this._species;
	}
	makeSound(){
		return `The ${this._species} makes a sound`
	}
}

class Dog extends Animal {
	bark(){
		return `woof`;
	}
}

class Cat extends Animal {
	purr(){
		return `purr`;
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
const myCat = new Cat("Siamese");
console.log(myCat.makeSound());
const species="Golden Retriever";
const myDog = new Dog(species)
console.log(myDog.makeSound());
console.log(myDog.bark());

