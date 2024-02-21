// data ko jis trh se memory me rkhte h uske 2 types hai primitive aur non-primitive.

//primitive are of 7 types --> they are call by value that is there copy is provided.
 
// string,boolean,null,undefined,symbol,bigint(increase the range of number),number


// in js we never defined the language , search that js is static or dynamically typed language.

// in js there is generally no concept of float 1002.3 is referred as number and 10023 is number.

const score = 100
const scoreValue = 100.2
const isLoggedIn = false;
const outSideTemo = null;
let userEmail = undefined;

const id = Symbol('123'); // return type is symbol.
const anotherId = Symbol('123');
// even the string passes is same in id and anotherId but they are internally different;

const bigNumber = 7483579824758245402n;

// to convert a number to big int write n at the end of number

console.log(id === anotherId);
// Reference OR Non - primitive --> in memory there reference(address) is passed

// Array, Objects, Functions.

// arrays

const heroes = ["Iron man", "Spiderman", "Captain America"]

let myObj = {
    name: "Anubhav",
    age: 22
};

console.log(myObj);

// function

const myFunction = function() {
    console.log("Hello world");
}
myFunction();

// to get the type of variable

console.log(typeof outSideTemo);
console.log(typeof myFunction); // function is type of object function but the o/p is function but real answer is object function.
console.log(typeof id);

//link:- https://262.ecma-international.org/5.1/#sec-11.4.3