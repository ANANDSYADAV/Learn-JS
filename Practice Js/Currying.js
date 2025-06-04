const curried = (a) => {
  return (ab = (b) => {
    return (bc = (c) => {
      return (cd = (d) => {
        return (de = (e) => {
          return a + b + c + d + e;
        });
      });
    });
  });
};
const a = curried(1);
const b = a(2);
const c = b(3);
const deFun = c(4)(5);

console.log(deFun);

// function curry(a) {
//   return function(b) {
//     if (!b) return a;
//     return curry(a + b);
//   };
// }
// let answer = curry(2)(3)(4)()
// console.log(answer)
