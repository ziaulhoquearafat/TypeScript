// Type Narrowing

function log(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
log(`Hi, I am a full-stack developer`);
log(3.1416);
