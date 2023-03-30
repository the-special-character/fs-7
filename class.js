// const user1 = {
//     firstName: "Yagnesh",
//     lastName: "Modh",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const user2 = {
//     firstName: "Virat",
//     lastName: "Kohli",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     age: 33
// }

const str = "Hello";

// encapsulation

// abstration

function nameCase(value) {
  console.log(this.isEmployee);
  return `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`;
}

class User {
  isStudent = true;

  static isEmployee = true;

  // special method which calls only once while create instance
  // to pass infomation from outside of the class
  constructor(firstName, lastName, student) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isStudent = student;
  }

  set firstName(value) {
    this._firstName = nameCase(value);
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(value) {
    this._lastName = nameCase(value);
  }

  get lastName() {
    return this._lastName;
  }

  #fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInfo() {
    return `Hi my name is ${this.#fullName()} and i am ${
      this.isStudent ? "student" : "not Student"
    } `;
  }

  changeFirstName(firstName) {
    this.firstName = firstName;
  }
}

const name = "rohit";

console.log(nameCase(name));

const user1 = new User("yagnesh", "modh", false);
const user2 = new User("virat", "kohli", true);

console.log(user1);

console.log(user1.getInfo());
console.log(user1.getInfo());
console.log(user1.getInfo());

user1.changeFirstName("yag");

console.log(user2);

console.log(user2.getInfo());
