/**
 * any type
 * ! this is note recommended type
 * ? When we bypass the type that time it used.
 * TODO If sometimes the value will string, number, or bullean that time we use it
 */

let randomValue: any = "Akib";
randomValue = 10;
randomValue = true;
console.log(randomValue);
//-----------------------

/**
 * unknown
 * ! its a type safety
 * ? its like any but you can safe your type
 *
 */

let value = "Hello World";
if (typeof value === "string") {
  console.log(value.toLocaleUpperCase());
}

/**
 * void type
 * ! when a fucntion has no return that time we use void type
 */

function logMessage(): void {
  console.log("Logged In Successfully");
}
logMessage();

//------------------------------------

/**
 * ! Null => No Value
 */
let number: null = null;
console.log(number);

/**
 * ! Undefined => if a variable has type but no value its called Undefined
 */
let name: undefined;
console.log(name);
