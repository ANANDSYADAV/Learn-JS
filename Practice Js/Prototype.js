class Parent {
  greet() {
    console.log("Hello from parent");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from child");
  }
}

class Grandchild extends Child {
  greet() {
    console.log("Hello from grandchild");
  }
}

const obj = new Grandchild();

console.log(obj.__proto__ === Grandchild.prototype);
console.log(obj.__proto__.__proto__ === Child.prototype);
console.log(obj.__proto__.__proto__.__proto__ === Parent.prototype);

function Parent() {}
Parent.prototype.greet = function () {
  console.log("Hello");
};

const newObj = new Parent();
console.log(newObj.__proto__ === Parent.prototype);
console.log(Parent.prototype);
console.log(newObj.__proto__);

const nullObj = Object.create(null);
console.log(nullObj.__proto__);
console.log(nullObj);

const parentObj = {
  greet: () => {
    console.log("Hello");
  },
};

const protoObject = {
  name: "Anand",
  age: 21,
};

const protoObject2 = {
  name: "Raj",
  age: 24,
};

Object.setPrototypeOf(protoObject, parentObj);
protoObject2.__proto__ = parentObj;
console.log("Obj1:", protoObject.greet);
console.log("Obj2:", protoObject2.greet);

console.log("Obj1:", Object.getPrototypeOf(protoObject));
console.log("Obj2:", protoObject2.__proto__);
