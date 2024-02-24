// immediately invoked function expressions (IIFE).
// to immediately execute anything and the globar variables shouldn't pollute/disturb the scope of function scope;


// below iife is named iife
(function func() {
    console.log(`DB CONNECTED`);
})();
// first () to wrap the function
// second () is used to call the function;
// after writing iife we should end it with semicolon the compiler by default doesn't put semicolon here

((name)=>{
    console.log(`DB COONECTED TWO ${name}`);
})('Anubhav');