// defining classes

class Person {
  name: string;
  age: number;

  constructor() {
    this.name = "";
    this.age = 0;
  }

  greet() {
    console.log(`Hello There ${this.name}`);
  }
}

// create object

const user = new Person();

user.name = "Hablu";
user.age = 45;
user.greet();

const user2 = new Person();
user2.name = "Bablu";
user2.age = 37;
user2.greet();
