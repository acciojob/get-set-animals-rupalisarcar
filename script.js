//complete this code
class Animal {
	constructor(species:string){
		this._species = species;
	}
	get species{
		return this._species;
	}
	makeSound(){
		return `The ${this.species} makes a sound`
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
const species = "Siamese"
const myCat = new Cat(species);
console.log(myCat.makeSound());
console.log(myCat.purr())
const species="Golden Retriever";
const myDog = new Dog(species)
console.log(myDog.makeSound());
console.log(myDog.bark());

