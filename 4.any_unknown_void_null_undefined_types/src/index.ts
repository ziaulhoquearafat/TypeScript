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
