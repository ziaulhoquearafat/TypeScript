"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Optional Parameter
function greetings(firstName, lastName, title) {
    return `Hi ${firstName} ${lastName}. He is a ${title ? title : "N/A"}`;
}
console.log(greetings("Mr", "Alice"));
console.log(greetings("Mr", "Hablu", "Doctor"));
//--------------------------------
// Default Parameter
function welcomeMessage(name = "Guest") {
    return `Hello ${name}`;
}
console.log(welcomeMessage());
console.log(welcomeMessage("Bablu"));
//# sourceMappingURL=index.js.map