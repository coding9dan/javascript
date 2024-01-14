const myObject = {
  a: 4,
  b: 5,
  c: 7,
  d: 8,
};

const val = Object.keys(myObject).filter((key) => myObject[key] % 2);
console.log(val);
