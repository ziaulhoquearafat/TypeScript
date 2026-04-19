// how to use interfaces

// 1. create interfaces for animal

interface Animal {
  breed: string;
  age?: number;
}

interface Dog extends Animal {
  name: string;
  veccinated: boolean;
}

const myDog: Dog = {
  name: "Tommy",
  breed: "German",
  veccinated: true,
};

console.log(myDog);
