// RegExp

// 1. Email
const emailRegex = /^[\w.-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/;

// 2. 10 digit phone Number
const phoneNumRegex = /^\d{10}$/;

// 3. Matching only alphabet
const alphabetOnlyRegex = /^[A-Za-z]+$/;

// 4. Password (min 8 chars, atleast 1 letter & atleast 1 number)
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9]{8,}$/;

// 5. Date YYYY-MM-DD
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// An applications of RegExp
const str = "My number 9876543114 is 9876543210";
const pattern = /\d{10}$/g;

console.log(pattern.test(str)); // true
console.log(str.match(pattern)); // ['9876543210']
