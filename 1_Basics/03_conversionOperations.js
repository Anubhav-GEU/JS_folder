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

// *******************Operations*********

let value = 4;
let negValue = -value;
console.log(value,negValue);

console.log(2+2, 2-2, 2*2, 2/2, 2**3, 2%4);

let str1 = "hello";
let str2 = " Anubhav";
let str3 = str1+str2;
console.log(str3);


// conversion is mainly from left to right
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log(3+4*5%3);


console.log(true);
console.log(+true);
// console.log(true+); this statement doesn't work
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;
// num1 = num2 = num3 = 4
console.log(num1,num2,num3);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter++);
console.log(gameCounter);

// link to ecma script => https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion