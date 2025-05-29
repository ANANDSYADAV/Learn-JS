// Inner function has the access of the variables in their outer function
// this is called lexical scope

// Example => Lexical Scope
function outer() {
  let outerVar = "Outer variable";
  function inner() {
    console.log(outerVar);
  }
  inner();
}

outer();

// Example => Closure
function parent() {
  let parentVar = "Parent variable";
  return function child() {
    return parentVar;
  };
}

const childFunction = parent();
console.log(childFunction());
