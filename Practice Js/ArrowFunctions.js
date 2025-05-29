// No own this
function print(name) {
  this.name = name;
  setTimeout(function () {
    // take this of global obj
    console.log(this.name);
  });
}
print("Anand");

function print2(name) {
  this.name = name;
  setTimeout(() => {
    console.log(this.name);
  });
}
print2("Anand");

// No own arguments object
function fun() {
  console.log(arguments);
}
fun(1, 2, 3);

const arrow = () => {
  console.log(arguments);
};
arrow(1, 2, 3);

// no own super
class Parent {
  constructor() {
    this.name = "Parent";
  }
  sayName() {
    console.log(this.name);
  }
}

class Child1 extends Parent {
  constructor() {
    super();
    this.name = "Child";
  }
  sayName() {
    setTimeout(() => {
      super.sayName();
    });
  }
}

const childObj = new Child1();
childObj.sayName(); // Child
