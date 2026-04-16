// never return type

function throwError(): never {
  throw new Error("Something went wrong");
}
console.log(throwError());
