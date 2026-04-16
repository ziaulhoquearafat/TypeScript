// Optional Parameter
function greetings(
  firstName: string,
  lastName: string,
  title?: string,
): string {
  return `Hi ${firstName} ${lastName}. He is a ${title ? title : "N/A"}`;
}
console.log(greetings("Mr", "Alice"));
console.log(greetings("Mr", "Hablu", "Doctor"));

//--------------------------------
