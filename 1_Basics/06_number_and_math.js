const score = 400 // by default type is number
console.log(typeof score);
// but suppose we want to explicitely define it
const balance = new Number(100);
console.log(balance); // by creating this is object.
console.log(typeof balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2)); // it helps to decide the precision value after the decimal.
// console.log(typeof balance);


const otherNumber = 1123.5734
console.log(otherNumber.toPrecision(3)); // precision takes i/p a number between 0-21 and returns a string.

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // by default value is indian standards

console.log(Number.MAX_VALUE, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);

// ++++++++++++++++MATHS+++++++++++++++++++++
// math liabrary is by default included in js 
console.log(Math);
console.log(Math.abs(-4324));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.1));
console.log(Math.pow(2,3));
console.log(Math.min(4,5,3,6)); // return min from the array
console.log(Math.max(4,5,3,6)); // return max from the array.
console.log(Math.random()); // math.random() gives random value from 0 to 1.
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)