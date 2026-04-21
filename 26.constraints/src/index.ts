// Constraints

function printData<T extends { length: number }>(data: T) {
  console.log(data.length);
}
printData<string>("Hello People");
printData<number[]>([1, 2, 3, 44, 89, 125]);

interface HasId {
  id: number;
  name: string;
}

function getId<T extends HasId>(item: T): number | string {
  return (item.id, item.name);
}
const result = getId({ name: "product", id: 125 });
console.log(result);
