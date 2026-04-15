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
  age: 50,
  isEnrolled: true,
  courses: ["JavaScript", "TypeScript", "React", "NextJs"],
  scores: [80, 85, 79, 98],
  info: ["Hablu", 50, true],
};

const student2: Student = {
  name: "Bablu",
  age: 45,
  isEnrolled: true,
  courses: ["JavaScript", "TypeScript", "React", "NextJs"],
  scores: [85, 98, 87, 95],
  info: ["Balbu", 45, true],
};

function displayStudentData(student: Student): void {
  console.log(student1);
  console.log(student2);
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Courses: ${student.courses.join("+")}`);
}
// displayStudentData(student1);
displayStudentData(student2);
