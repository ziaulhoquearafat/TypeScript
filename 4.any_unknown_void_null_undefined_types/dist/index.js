"use strict";
/**
 * any type
 * ! this is note recommended type
 * ? When we bypass the type that time it used.
 * TODO If sometimes the value will string, number, or bullean that time we use it
 */
Object.defineProperty(exports, "__esModule", { value: true });
let randomValue = "Akib";
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
function logMessage() {
    console.log("Logged In Successfully");
}
logMessage();
//------------------------------------
/**
 * ! Null => No Value
 */
let number = null;
console.log(number);
/**
 * ! Undefined => if a variable has type but no value its called Undefined
 */
let name;
console.log(name);
//# sourceMappingURL=index.js.map