// type guard : typeof, in operator and instanceof

// typeof Type Guard
// TODO we use typeof to the premetive data types

function display(value: string | number): void {
  if (typeof value === "string") {
    console.log(`It's a String ${value.toUpperCase()}`);
  } else {
    console.log(`It's a Number ${value.toFixed(2)}`);
  }
}
display("Hello and Welcome");
display(493.456912359);

// in operator Type Guard
// TODO we use in operator for object

type Car = {
  drive: () => void;
};

type Boat = {
  seil: () => void;
};

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.seil();
  }
}

const car: Car = {
  drive: () => {
    console.log("Car is driving");
  },
};

const boat: Boat = {
  seil: () => {
    console.log("Boat is seiling");
  },
};

move(car);
move(boat);

// instanceof Type Guard
// TODO when we work with OOP that time we use instanceof

class Dog {
  bark() {
    console.log("Woof Woof");
  }
}

class Cat {
  meow() {
    console.log("meow meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog = new Dog();
const cat = new Cat();
makeSound(dog);
makeSound(cat);
