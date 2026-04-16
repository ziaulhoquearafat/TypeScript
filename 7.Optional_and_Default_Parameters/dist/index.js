"use strict";
// Optional Parameter
Object.defineProperty(exports, "__esModule", { value: true });
function greetings(firstName, lastName, title) {
    return `Hi ${firstName} ${lastName}. He is a ${title ? title : "N/A"}`;
}
console.log(greetings("Mr", "Alice"));
console.log(greetings("Mr", "Hablu", "Doctor"));
//# sourceMappingURL=index.js.map