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

// let name = "Hablu";
// let age = 50;
// let isEnrolled = true;

type Student = {
  name: string;
  age: number;
  isEnrolled: boolean;
  courses: string[];
  scores: number[];
  info: [string, number, boolean];
};

const student1: Student = {
  name: "Hablu",
  age: 27,
  isEnrolled: true,
  courses: ["JavaScript", "TypeScript", "React", "NextJs"],
  scores: [79, 95, 82, 98],
  info: ["Hablu", 27, true],
};

const student2: Student = {
  name: "Bablu",
  age: 24,
  isEnrolled: true,
  courses: ["JavaScript", "TypeScript", "React", "NextJs"],
  scores: [87, 95, 92, 98],
  info: ["Bablu", 24, true],
};

function studentData(student: Student): void {
  console.log(`Name: ${student.name}`);
  console.log(`Name: ${student.age}`);
  console.log(`Name: ${student.courses.join("+")}`);
  console.log(student2);
}
studentData(student1);
studentData(student2);
