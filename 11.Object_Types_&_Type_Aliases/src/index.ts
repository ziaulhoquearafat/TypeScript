// Object Structure Typing

const student = {
  name: "Balbu",
  age: 50,
};

function printData(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age} years Old`);
}

printData(student);
