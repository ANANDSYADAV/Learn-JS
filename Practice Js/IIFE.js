// IIFE => Immediately Invoked function Expression
(function (name, age) {
  console.log(`name: ${name} and age: ${age}`);
})("Anand", 21);

((name, age) => {
  console.log(`name: ${name} and age: ${age}`);
})("Anand", 21);

// creating private variable using IIFE
const privateVar = (function () {
  let count = 0;
  return {
    print: () => count,
    inc: () => ++count,
    dec: () => --count,
  };
})();

console.log(privateVar.count); // undefined

console.log(privateVar.print());
console.log(privateVar.inc());
console.log(privateVar.print());
console.log(privateVar.dec());
console.log(privateVar.print());
