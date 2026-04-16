"use strict";
// Javascript
/**
const student = {
  name: "Hablu",
  age: 50,
  isEnrolled: true,
  courses: ["JavaScript", "TypeScript", "React", "NextJs"],
  scores: [80, 95, 79, 98],
  info: ["Mamun", 50, true],
};
 */
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "Hablu",
    age: 27,
    isEnrolled: true,
    courses: ["JavaScript", "TypeScript", "React", "NextJs"],
    scores: [79, 95, 82, 98],
    info: ["Hablu", 27, true],
};
const student2 = {
    name: "Bablu",
    age: 24,
    isEnrolled: true,
    courses: ["JavaScript", "TypeScript", "React", "NextJs"],
    scores: [87, 95, 92, 98],
    info: ["Bablu", 24, true],
};
function studentData(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Name: ${student.age}`);
    console.log(`Name: ${student.courses.join("+")}`);
    console.log(student2);
}
studentData(student1);
studentData(student2);
//# sourceMappingURL=index.js.map