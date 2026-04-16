"use strict";
// ! arrow function
// const functionName = (parameter:type): returntype =>{
// logic
// }
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => a + b;
console.log(add(5, 8));
const multiply = (a, b) => {
    const c = a * b;
    return c;
};
console.log(multiply(5, 10));
const square = (x) => x * x; // ? its calles implicit return
console.log(square(5));
//# sourceMappingURL=index.js.map