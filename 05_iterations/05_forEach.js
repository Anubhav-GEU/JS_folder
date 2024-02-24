let lang = ['js','python','java','ruby','cpp'];
//callback using normal function
lang.forEach(function(item) {
    console.log(`${item}`);
})
// callback function are high order function
//callback using arrrow function;
// in for each we can also provide a function as a input
lang.forEach((val)=>{
    console.log(val);
})

function printMe(item) {
    console.log(item);
}
// here in for each we have to pass reference so no circular braces() just pass it without it.

// lang.forEach(printMe)

lang.forEach((item,index,arr)=>{
    console.log(item,index,arr);
});

const myCoding = [
    {
        languageName: 'javascript',
        langShortName: 'js'
    },
    {
        languageName: 'python',
        langShortName: 'py'
    },
    {
        languageName: 'java',
        langShortName: 'j'
    }
]
//accessing array of abjects using foreach;
myCoding.forEach((item)=>{ 
    console.log(item.langShortName, item.languageName);
})