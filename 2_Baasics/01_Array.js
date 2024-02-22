const myArray = [0,1,2,3,4,5,true,"Anubhav"]; // declaration of array it can have different types of array
console.log(myArray);
// js array can be of dynamic length;
// array create shallow copy. i.e copies share same reference point.

const myHeroes = ["ironman","shaktiman"];
const myArr2 = new Array(1,2,3,4);
console.log(myHeroes, myArr2,myArr2.length);


//  Array methods
myArr2.push("Hello"); // push atlast of the array.
console.log(myArr2);
myArr2.pop();
console.log(myArr2); // removes last element from the array.

myArr2.unshift(10);
console.log(myArr2); // adds an element at beginning of the array.
myArr2.shift();
console.log(myArr2); // removes first element;

console.log(myArr2.includes(4));//return true if element is present else false;
console.log(myArr2.indexOf(10)); // return index of element if present else return -1.


const newArray = myArr2.join(); // join converts the array to the string.
console.log(myArr2);
console.log(newArray);

// slice, splice.
console.log("A ", myArr2);

//slice create a copy of the string (including,excluding), while splice takes out the portion of the string such that the original array is manipulated .
                       //(included,excluded)
const na1 = myArr2.slice(1,3);
console.log(na1,myArr2);
                        //(included,included) both the parameters are included.
const na2 = myArr2.splice(1,3);
console.log(na2,myArr2);