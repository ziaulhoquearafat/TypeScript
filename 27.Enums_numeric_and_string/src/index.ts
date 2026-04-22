// Enums: Neumeric and string

// ! Numeric Enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Up;
console.log(dir);

enum Role {
  User = 1,
  Instructor,
  Admin,
  SuperAdmin,
}

// string enum

enum Status {
  Success = "Success",
  Error = "Error",
  Pending = "Pending",
}

const res: Status = Status.Pending;
console.log(res);
