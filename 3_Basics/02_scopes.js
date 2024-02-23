let a=10;
const b=20;
var c=30;
if (true) {
    let a=20;
    console.log("INNER",a);
    const b=20;
    var c=40; // var is available to all the scopes
}
console.log(a,b,c);


function one() {
    const username = 'anubhav';
    function two() {
        const website = 'youtube';
        console.log(username);
    } // child function can access parent function variable.
    two();
    // console.log(website); // it will throw error as website is ended still we are accessing it
}
one();

if (true) {
    const username = 'anubhav';
    if (username === 'anubhav') {
        const website = 'youtube';
        console.log(username + website);
    }
}


function addOne(num) {
    return num+1;
}
addOne(5);
const addTwo = function(num) {
    return num+2;
}
// we can use addOne() anywhere in the program but addTwo is variable so it must be initialized first then only we can use it. this method is also called hoisting.