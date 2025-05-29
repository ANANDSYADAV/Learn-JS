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
