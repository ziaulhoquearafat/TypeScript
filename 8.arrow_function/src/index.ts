// ! arrow function
// const functionName = (parameter:type): returntype =>{
// logic
// }

const add = (a: number, b: number): number => a + b;
console.log(add(5, 8));

const multiply = (a: number, b: number): number => {
  const c = a * b;
  return c;
};
console.log(multiply(5, 10));

const square = (x: number): number => x * x; // ? its calles implicit return
console.log(square(5));
