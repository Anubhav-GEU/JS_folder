const array = [1,2,3,4,5,6,7,8,9];

let initialVal = 0;
// currVal takes all the elements of the array one by one;
// starting value of accumulator will be value that will be passed in the function i.e initialVal, one it's initialised then it value of accumulator only depends on the sum or what you've returned. so initialVal is used to initialised the accumulator once.
let total = array.reduce((accumulator,currVal)=>{
    console.log(`Current val of accumulator is ${accumulator}, and val of currVal is ${currVal}`);
    return accumulator+currVal;
},initialVal);
// another way
let tot = array.reduce((acc,curr)=>acc+curr,0);
console.log(tot);
console.log(total);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 599
    },
    {
        itemName: "Python Course",
        price: 699
    },
    {
        itemName: "App Dev Course",
        price: 799
    },
    {
        itemName: "Data Science Course",
        price: 999
    }
];
console.log(shoppingCart.reduce((acc,curr) => acc+curr.price,0));