const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
};

// below is for in loop generally used to print the objects;
for (const key in myObj) {
    console.log(`${key}->${myObj[key]}`);
}

// forof loops fetches the value from the map,array while for in loop fetches the index of the map array;
//printing array using for in loop
let myArray = [1,2,'Hello',6.78,true];
for (const key in myArray) {
    console.log(`The value at ${Number(key)+1} is ${myArray[key]} and it's type is ${typeof myArray[key]}`);
}

// we cann't iterate map using forin it will not throw any error also it will not show any output; -> because map is not iterable --> see in further classes