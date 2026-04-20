// constructor

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello i am ${this.name}. I am ${this.age} Years Old`);
  }
}

const user = new Person("Hablu", 45);
user.greet();

const user2 = new Person("Bablu", 49);
console.log(user2.name);
user2.greet();

// modifires (public, private, protected)
// ? public: access from anywhere
// ? private: only access from classes
// ? protected: access from class and subclasses

class BankAccount {
  public accountName: string;
  private balance: number;
  protected accountType: string;

  constructor(name: string, amount: number) {
    this.accountName = name;
    this.balance = amount;
    this.accountType = "Savings";
  }

  public showBalance() {
    console.log(`Your balance is ${this.balance}`);
  }
}

// create user
const accountOne = new BankAccount("Alice", 5000);
accountOne.showBalance();

console.log(accountOne.accountName);
