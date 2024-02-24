// for of loop
const arr = [1,2,3,4,5];
for (const i of arr) { // the object can be any thing an object or simple array;
    console.log(`The value is ${i}`);
}

const name = "Anubhav Narayan Singh";
for (const char of name) {
    console.log(`The value is ${char}`);
}

// creating maps

const map = new Map();
// it is key value pair;
map.set('modi','India');
map.set('biden','usa');
map.set('putin','russia');
map.set('modi','bjp');
console.log(map);

// iterating map by destructuring the map
for (const [key, value] of map) {
    console.log(key+'->'+value);
}

const myObj = {
    'g1':'cod',
    'g2':'igi',
    'g3':'black ops'
};
// objects are not iterable using forof loops
// for (const [key, value] of myObj) {
//     console.log(key+'->'+value);
// }

