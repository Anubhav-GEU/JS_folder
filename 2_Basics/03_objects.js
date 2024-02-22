// singleton --> constructor se banate hai to singleton bnta hai
const user = Object.create(null,undefined) // by this singleton is created.
// console.log(user);
const sym = Symbol('key1');

// object literals.
const JsUser = {
    name:"Anubhav",
    age:18,
    location:"Jaipur",
    email:"anubhav@geu.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday"],
    [sym]: "mykey1",
    "full name":"Singh"
};
// if therre are space between any key of the object we have to use " " to access this, using . we can't access
console.log(JsUser.email + "\n" + JsUser["email"] + "\n" + JsUser[sym]);
// symbols can be accessed and updated using square brackets.
console.log(typeof sym);

// to freeze the object so that its value can't be changed in future.
// Object.freeze(JsUser);
JsUser.email = "Anubhavhello";
console.log(JsUser);

// adding functions inside a object;
JsUser.greetingTwo = function() {
    console.log("Hello js user");
}
JsUser.greeting = function() {
    console.log(`Hello js usser, ${this.name}`); // this refers to the current object like in cpp.
}

console.log(JsUser.greeting); // it will jjust return reference of the function.
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 