const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const obj1 = {
  d: 4,
  e: 5,
};

const newObj1 = { ...obj, d: 4, c: 5 };

const newObj2 = { ...obj, ...obj1 };

console.log(newObj2);

console.log(newObj1);

console.log(obj);

const { a, ...rest } = obj;

console.log(a);
console.log(rest);

// Object.assign(obj, obj1)

// console.log(obj);

// obj.d = 4;

// console.log(obj);

// obj.c = 5;

// console.log(obj);

// delete obj.c;

// console.log(obj);

// dot notation

// const key = "c"

// console.log(obj.a);

// console.log(obj[key]);

// // object destructuring
// const {a, b, [key]: objC} = obj;

// console.log(a);
// console.log(b);

// console.log(objC);
