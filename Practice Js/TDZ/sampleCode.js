// TDZ = Temporal Dead Zone => for let and const

var x; // x = undefined

// function fun() {
//   let x; // TDZ ends here
//   console.log(x);
//   x = 12;
// }

// fun();

function fun() {
  console.log(x);
  let x = 23; // TDZ ends here
}

fun();
