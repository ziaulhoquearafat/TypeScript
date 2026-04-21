// inheritance

class Animal {
  constructor(public name: string) {}
  move() {
    console.log(`${this.name} is moving...`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`Wolf Wolf!`);
  }
}

const myPet = new Dog("Tommy");
myPet.move();
myPet.bark();
