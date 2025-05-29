// Using dot notation for accessing object properties
//  => letters, _, $, unicode chars

// for numbers and special chars or empty string
// => [] (bracket) notation

const obj = {
  $abc: "$abc",
  "122v": "122v",
  _abdjs: "_abdjs",
  absdhj: "absdhj",
  "": "empty string",
  "@char": "@splChar",
  2: "Pure number",
};

console.log(obj.$abc);
console.log(obj["122v"]);
console.log(obj._abdjs);
console.log(obj[""]);
console.log(obj["@char"]);
console.log(obj[2]);
