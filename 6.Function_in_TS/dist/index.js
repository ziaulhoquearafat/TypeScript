"use strict";
// ! function in js
// function functionNname (parameter1, parameter2){
//  logic
// }
Object.defineProperty(exports, "__esModule", { value: true });
// ! function is ts
// function functionNname (parameter1:type, parameter2:type): returntype{
// login
// }
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Hablu"));
// ? function type signature
let greetings;
greetings = function (name) {
    return `Hi ${name}`;
};
console.log(greetings("Bob"));
//# sourceMappingURL=index.js.map