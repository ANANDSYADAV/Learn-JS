const obj = {
  name: "Anand",
  age: 21,
};

Object.defineProperty(obj, "nonEnum", {
  value: 222,
  enumerable: false,
});

console.log(Object.keys(obj));

for (let key in obj) {
  console.log(key);
}

console.log(Object.getOwnPropertyNames(obj));

const newObj = Object.create(null);
console.log(newObj.prototype);
