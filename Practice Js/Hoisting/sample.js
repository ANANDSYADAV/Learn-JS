// Hoisting: JS property of moving variables and functions at the top of teir scope before execution

// fun();
// function fun() {
//     console.log('Fun function');
// }

// fun(); // Error
console.log(fun); // undefined
// arrow function
var fun = () => {
  console.log("functional expression");
};

// functional expression
var fun = function () {
  console.log("functional expression");
};
