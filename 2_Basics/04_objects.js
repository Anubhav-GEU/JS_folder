// const tinder = new Object();

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Anubhav"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "anubhav@geu.com",
    fullname: {
        userfullname: {
            firstName: "Anubhav",
            lastName: "Singh"
        }
    }
}
console.log(regularUser.fullname.userfullname);

// combining objects

const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}

// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2); 
// in above line {} is the target object and obj1 and obj2 is the source object.
// if {} is not present then obj1 is the target object and obj2 is the source object.
// it is recommended to use {};
// using spread;
const obj4 = {...obj1, ...obj2};
console.log(obj4);
console.log(obj3);
// console.log(tinder);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // use to find all the keys of specified object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // every key value pair is converted to array.
console.log(tinderUser.hasOwnProperty('isLogged')); // return true is object has this property else return false.


// destructuring object
const course = {
    coursename: "Js in hindi",
    price: "99",
    courseInstructor: "Anubhav"
}

const {courseInstructor: instructor} = course;
console.log(instructor);

// {
//     "name": "Anubhav",
//     "coursename": "js in hindi",
//     "price: free"
// }

// sometime api may occur in array form.
