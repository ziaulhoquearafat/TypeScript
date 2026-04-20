// constructor

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello i am ${this.name}. I am ${this.age} Years Old`);
  }
}

const user = new Person("Hablu", 45);
user.greet();

const user2 = new Person("Bablu", 49);
console.log(user2.name);
user2.greet();
