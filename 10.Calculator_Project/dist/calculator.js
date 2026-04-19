"use strict";
// making calculator for better understand the function
Object.defineProperty(exports, "__esModule", { value: true });
// TODO 'Add'
function add(a, b) {
    return a + b;
}
// TODO 'Subtract'
const subtract = (a, b) => a - b;
// TODO 'Multiply'
function multiply(a, b) {
    return a * b;
}
// TODO 'Divide'
const divide = (a, b) => {
    if (b === 0) {
        throw new Error(`Cannot Divided by 0`);
    }
    return a / b;
};
// TODO 'square'
const power = (base, exponent = 2) => {
    return Math.pow(base, exponent);
};
// TODO 'The Calculator'
function calculate(operation, a, b = 1) {
    switch (operation) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        case "^":
            return power(a, b);
        default:
            throw new Error(`Invalid Operation`);
    }
}
console.log(calculate("+", 5, 2));
console.log(calculate("-", 25, 15));
console.log(calculate("*", 3, 7));
console.log(calculate("/", 50, 2));
console.log(calculate("^", 6, 2));
//# sourceMappingURL=calculator.js.map