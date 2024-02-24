const myNumbers = [1,2,3,4,5,6,7,8,9,10];
// map automatically returns after doing operations;
// const newNums = myNumbers.map((nums)=>(nums+10));

// chaining we can use multiple methods one over the other for ex myNumbers.map().map() or .map().filter();
// result of first chain is passed as the input to the second chain
const newNums = myNumbers.map((num) => (num*10)).map((num)=>(num+1)).filter((num) => num>=40);
console.log(newNums);

