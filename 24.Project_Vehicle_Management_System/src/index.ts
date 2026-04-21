// Project: Vehicle Management System

// ! step-1: Create Interfaces
interface Vehicle {
  brand: string;
  speed: number;
  move(): void;
}

// ! step-2: Create Class
class Car implements Vehicle {
  protected year: number = 2025;
  constructor(
    public brand: string,
    public speed: number,
  ) {}

  move(): void {
    console.log(`The ${this.brand} car is running at ${this.speed} km/h`);
  }
}

// ! step-3: Create sub-classes

class ElectricCar extends Car {
  charge(): void {
    console.log(
      `The ${this.brand} brand ${this.year} model is now Charging...`,
    );
  }
}

// ! step-4: Create an object instance
const myCar = new ElectricCar("Toyota", 145);
myCar.move();
myCar.charge();
