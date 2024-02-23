// syntax of function
function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("B");
}

sayMyName // with this the function will not execute it only tells the reference of the function
// sayMyName()
                // parameters
// function addNum (num1, num2) {
//     console.log(num1+num2);
// }
function addNum (num1, num2) {
    let result = num1+num2;
    return result;
    console.log("Anubhav"); // this line is unreachable code because written after result;
}
// arguments;
addNum(3,4) // if no arguments will be provided then NaN will be printed.

// variables can also store function
const result = addNum(5,6);
console.log(result);

// function loginUserMsg(username) {
//     return `${username} just logged in`;
// }
let r1 = loginUserMsg("Bye") // if nothing is passed as argument inside it then undefined will be return/printed;
console.log(r1);

// default parameter in js;
function loginUserMsg(username="Anubhav") {
    return `${username} just logged in`;
}

                        // ... is rest operator to handle multiple parameters. returns the array of values.
function calculateCartPrice(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrice(200,400,600));

const user = {
    username: "Anubhav",
    price: 199
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
handleObject(user);

handleObject({
    username:"Anubhav",
    price: 399
}) // object can be passed directly in the function.

const myNewArray = [200,300,400,500];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
// another way of doing it.
console.log(returnSecondValue([1,2,3,4,5]));