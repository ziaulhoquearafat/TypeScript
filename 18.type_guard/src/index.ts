// type guard : typeof, in operator and instanceof

// typeof Type Guard

function display(value: string | number): void {
  if (typeof value === "string") {
    console.log(`It's a String ${value.toUpperCase()}`);
  } else {
    console.log(`It's a Number ${value.toFixed(2)}`);
  }
}
display("Hello and Welcome");
display(493.456912359);
