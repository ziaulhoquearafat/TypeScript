// Object Structure Typing

const student = {
  name: "Balbu",
  age: 50,
};

function printData(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age} years Old`);
}

printData(student);

// ------------------------ Type Alias -----------------------------

type User = {
  name: string;
  age?: number; // age is optional
};

const student1: User = {
  name: "Habib",
  age: 42,
};

function showUser(user: User): void {
  console.log(`${user.name}`);
}
showUser(student1);

type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
};

const product1: Product = {
  id: 1,
  name: "MotherBoard",
  price: 10000,
};
const product2: Product = {
  id: 2,
  name: "Laptop",
  description: "hp Laptop",
  price: 20000,
};
