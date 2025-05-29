"use strict";

// duplicate paramets
function add(a, b, a) {
  return a + b + a;
}

console.log(add(2, 4, 7));

// Accidental global var avoiding
// function outputX() {
//     {
//         var x = 10; // let const var
//     }
//     console.log("X:", x);
// }

// outputX();

// variable declared inside eval not accessible outside
eval("var x = 23");
console.log(x);
