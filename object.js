const firstName = "Yagnesh";

const lastName = "Modh";

const obj = {
  firstName,
  lastName,
  age: 33,
  gender: "male",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(obj);

const key = "lastName";

const { age, gender, firstName: abc, ...rest } = obj;

console.log(rest);
console.log(age);
console.log(gender);
console.log(abc);

// console.log(age);
// console.log(gender);
// console.log(objFName);
// console.log(objLName);

// const newObj = Object.assign({}, obj, { age: 33, lastName: "modi" });

// spread Operator
const newObj = { ...obj, age: 33, lastName: "modi" };

console.log(newObj);

console.log(obj);
// const key = "lastName"

// // // Dot notation
// console.log(obj.firstName);

// // // Array Notation
// console.log(obj[key]);

// obj["age"] = 33;

// obj["lastName"] = "modi"

// console.log(obj);

// delete obj.fullName

// console.log(obj);
