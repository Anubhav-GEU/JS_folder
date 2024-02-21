// can denote string with single and double quote both

const name = "Anubhav";
// this also creates a object
const title = 'Singh';
const repoCount = 50;
// console.log(name+" "+title+" "+repoCount); this syntax is not preferred nowadays.

// now a days we use backtick. using backtick string interpolation occurs i.e we create placeholders here and can inject value at place


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare a string.
// below also creates a object and many methods are also provided
const gameName = new String('PUBG')
console.log(gameName[0], gameName[1], gameName[2], gameName[3]);
// the above looks like that string is array but string is object.

// console.log(gameName.__proto__.toLowerCase());

console.log(gameName.length);
console.log(gameName.toUpperCase()); // if we not assign it , it doesn't changes the original object we have to reassign it to change.

// to get character at particular index.
console.log(gameName.charAt(2));


// to get index of particular character.
console.log(`Index of U is ${gameName.indexOf('U')}`);

// create a new string from existing string.

const newString = gameName.substring(0,2);
// 0 is inclusive and 2 is exclusive so 0,1 index character is taken can use -ve val in substring but it will start from 0 whether u provide or not.
// console.log(newString);

// in js negative indexing also occurs while slicing. // study more
const new2 = gameName.slice(-1,2);
console.log(new2);


let newStringOne = "   Anubhav    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim removes starting and end spaces and it only works and white spaces and new line terminator.

const url = "https://anubhav.com/anubhav%20singh"
console.log(url);
//replace(,) -->1st kya search krna hai aur phir usko kaise replace krna hai
console.log(url.replace('%20','-'));
console.log(url.includes('anubhav')); // includes return true if the string/char is present else return false.

const str = new String("Anubhav-narayan-singh");
//suppose we want to split string on basis of - we can also split on spaces ' '. the char on basis which we split is called seperator.
console.log(str.split('-'));
// split returns the array of number of parts the string is divided.

