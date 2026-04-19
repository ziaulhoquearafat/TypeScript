// interfaces vs type aliases

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

// ! Type cannot reassign
// type User = {
//   address: string;
// };

interface Profile {
  id: number;
  name: string;
  age: number;
  email: string;
}

// ! Interfaces can reassign
interface Profile {
  address: string;
}

// when to use which
// 1. designing public APIs: interface
// 2. for simple object: use both
// 3. Union and Intersection types. use type
// 4. primitive or functions: use type
// 5. flexibility: interface *extends) and type (union and intersection)
