// Union and Intersections

type Value = {
  id: string | number;
  name?: string;
  mobile?: number | string;
};

const student: Value = {
  id: "123456789",
  name: "Babul",
  mobile: 880145678963,
};

const student2: Value = {
  id: 123659754,
  mobile: "880123659845",
};

function idPrint(data: Value): void {
  console.log(`Here is the ID: ${data.id}`);
  console.log(`Here is the MOBILE: ${data.mobile}`);
}

idPrint(student);
idPrint(student2);

// --------------- intersection ---------------------

type User = {
  id: number;
  name: string;
};

type Admin = {
  isAdmin: boolean;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  id: 3216549848,
  name: "Alice",
  isAdmin: true,
};

console.log(admin);
