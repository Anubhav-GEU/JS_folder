let score = "33"
console.log(typeof score);
console.log(typeof(score));

// Number is a class based conversion will study later.
let valueInNumber = Number(score);
console.log(typeof valueInNumber, valueInNumber);
// NaN is a type when you try to convert string/char to number then NaN will be assigned
// null to int is 0
// undefined to int is NaN
// true->1 and false->0

// "33" -> 33
// "33abc" -> NaN

// let isLoggedIn = 1;
let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn,booleanIsLoggedIn, typeof booleanIsLoggedIn);

// anubhav -> 1
// "" -> 0
// 43 -> 1
// 0 -> 0

let someNumber = 44
let stringNumber = String(someNumber);
console.log(stringNumber,typeof stringNumber);