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

// cosnt enum

const enum Size {
  Small,
  Medium,
  Large,
}

let s1 = Size.Medium;
console.log(s1);

// Use-Cases
// 1. Direction or Position: enum Direction (Up, Down, Left, Right}
// 2. Roles or permissions: enum Role {Guest, User, Admin}
// 3. HTTP Status or APIs: enum HttpStatus (0K = 2øø, NotFound)
// 4. Days of week or months: enum Days {Mon, Tue, Wed, Thu, Fri}
// 5. Toggle states or modes: enum Mode { Dark, Light)
