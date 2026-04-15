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
    age: 50,
    isEnrolled: true,
    courses: ["JavaScript", "TypeScript", "React", "NextJs"],
    scores: [80, 85, 79, 98],
    info: ["Hablu", 50, true],
};
const student2 = {
    name: "Bablu",
    age: 45,
    isEnrolled: true,
    courses: ["JavaScript", "TypeScript", "React", "NextJs"],
    scores: [85, 98, 87, 95],
    info: ["Balbu", 45, true],
};
function displayStudentData(student) {
    console.log(student1);
    console.log(student2);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Courses: ${student.courses.join("+")}`);
}
// displayStudentData(student1);
displayStudentData(student2);
//# sourceMappingURL=index.js.map