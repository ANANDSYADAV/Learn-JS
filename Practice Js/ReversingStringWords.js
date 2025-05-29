let str = "Hello from Anand Yadav";
let wordsArray = str.split(" ");

wordsArray = wordsArray.map((word) => {
  return word.split("").reverse().join("");
});

str = wordsArray.join(" ");

console.log(str);
