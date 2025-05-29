// call
const number = { val: 10 };
function sum(a, b) {
  console.log(this.val + a + b);
}
sum.call(number, 2, 3);

// apply
const num = { val: 10 };
function add(a, b) {
  console.log(this.val + a + b);
}
add.apply(num, [2, 3]);

// bind
const numArray = { val: 10 };
function jodo(a, b) {
  console.log(this.val + a + b);
}
const copyJodoFun = jodo.bind(numArray, 2, 3);
copyJodoFun();
