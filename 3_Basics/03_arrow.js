const user = {
    username: "Anubhav",
    price: 199,
    // to refer our current context i.e it will access all the variables or methods that are in the current scope.
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // shows current context of the object.
    }
}
// user.welcomeMessage()
// user.username = "bye";
// user.welcomeMessage()
console.log(this);
// agar hum browser me log(this) krenge to current window milega but node me run krne par vo {} empty parenthesis dega bcoz phle js sirf browser me run krti thi to uske kch predefined function the.

function func() {
    let username = 'anubhav';
    console.log(this.username); // this can only be used with objects but not functions.
    console.log(this); // this will print many things in this
}
// func()

// creating arrow function
const func2 = () => {
    let username = 'hitesh';
    console.log(this.username);
    console.log(this);
}
// func2()

const addTwo = (num1,num2) => {
    return num1+num2;
}
// explicit functions are those where return keyword is used.
const add2 = (num1,num2) => (num1+num2); // this are called implicit arrow function in which there is no return statement and the body is in the same line of declaration of arrow function;
// to return objects in arrow function;
const add3 = (num1,num2) => ({username:"Anubhav"})
console.log(add3(3,4));
console.log(add2(5,6));

const myArray = [1,2,3,4,5];
myArray.forEach(()=>{
    console.log(myArray);
})