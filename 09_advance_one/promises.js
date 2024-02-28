const promise1 = new Promise(function(resolve,reject){
    // do an async task;
    // db calls, cryptotask, network calls.
    setTimeout(function(){
        console.log('Async Task is completed');
        resolve(); // it can also contain parameters.
    },1000)
}); // creating instance of promise, it takes a callback function which has 2 parameters resolve aur reject

// after creating promise we have to consume it;

promise1.then(function(){
    console.log('promise consumed');
}) // then-->related to resolve it takes a callback it receives argument automatically, which is the return value of promise fuction defined above

new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function() {
    console.log('async 2 resolved');
});

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // to send the data from settimeour to then we have to send it through resolve as a parameter.
        resolve({username:'Anubhav Narayan Singh', email:'anubhav.geu.2018694@gmail.com'});
    },1000)
})
//catch the send data in the function as a argument.
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({username:"anubhav", password:"1234"});
        }
        else {
            reject('ERROR! something went wrong')
        }
    })
})
// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }) --> fetching data like this will not work it will throw error

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}) // the output of the first chain is passed as input of the second chain so username will be passed as input of second then.
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err); // errow will get catched by this
})
.finally(()=>{
    console.log('The promise is either resolve or rejected.');
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username:"anubhav", password:"1234"});
        }
        else {
            reject('ERROR! something went wrong')
        }
    })
})
async function consumePromiseFive(){
    // in async await we have to handle it in try catch to handle error
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(err) {
        console.log(err);
    }
}
consumePromiseFive();
// promise can also get handed by async and await and also by then catch. async await doesn't catch error by grace.

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // if we will not use await then it will not work bcoz converting string to json also take some time that's why make it await.
        // console.log(data);
    } catch (error) {
        console.log("E.", error);
    }
}

getAllUsers();

// now using then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((value)=>{
    console.log(value);
})
.catch((err)=>{
    console.log("Error occured");
})