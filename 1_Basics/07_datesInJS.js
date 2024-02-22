// dates are calculated in ms generally.

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(typeof myDate);
//                          (year,month,date) , jan = 0, feb=1, mar = 2... and so on...
let myCreatedDate = new Date(2024,0,23);
console.log(myCreatedDate.toString());
                    //  (year,month,date,hrs,min,sec)
let newString = new Date(2024,1,22,5,3,48);
console.log(newString.toString());

// another way of creating when we use YYYY-MM-DD then month starts from 1.
// let newString1 = new Date("2024-01-31")
// console.log(newString1.toString());

// let ns2 = new Date("01-14-2023");
// console.log(ns2.toString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(ns2.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getHours());