// making calculator for better understand the function

// TODO 'Add'
function add(a: number, b: number): number {
  return a + b;
}

// TODO 'Subtract'
const subtract = (a: number, b: number): number => a - b;

// TODO 'Multiply'
function multiply(a: number, b: number): number {
  return a * b;
}

// TODO 'Divide'
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error(`Cannot Divided by 0`);
  }
  return a / b;
};

// TODO 'square'
const power = (base: number, exponent: number = 2): number => {
  return Math.pow(base, exponent);
};

// TODO 'The Calculator'

function calculate(operation: string, a: number, b: number = 1): number {
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
