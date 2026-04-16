// ! function in js
// function functionNname (parameter1, parameter2){
//  logic
// }

// ! function is ts
// function functionNname (parameter1:type, parameter2:type): returntype{
// login
// }

function greet(name: string): string {
  return `Hello ${name}`;
}
console.log(greet("Hablu"));

// ? function type signature

let greetings: (name: string) => string;

greetings = function (name: string): string {
  return `Hi ${name}`;
};
console.log(greetings("Bob"));
