const arr = [, 23, , 44];

const newArray = [...arr].map((item) => (item !== undefined ? 2 * item : 0));

console.log(newArray); // [0, 46, 0, 88]

const newArray2 = Array.from(arr, (item) =>
  item !== undefined ? 2 * item : 0
);

console.log(newArray2); // [0, 46, 0, 88]
