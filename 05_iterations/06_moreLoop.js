const coding = ['js','ruby','java','python','cpp'];

// const values = coding.forEach((item)=>{
//     console.log(item);
// })
// for each function by default doesn;t return anything we have to manually use return statement to return anything.
// console.log(values);/

// to return anything from foreach loop.


const myNums = [1,2,3,4,5,6,7,8,9,10];
// filter bhi callback hi leta hai
                        // callback => condition
let newNums = myNums.filter((nums) => nums>4); // agar {} lagadenge condition par to return use krna padega but agar same line pr hi condition h to no use of return discussed in arrow function lectures.
let newNums2 = myNums.filter((nums)=>{
    return nums>5;
})
console.log(newNums2);
console.log(newNums);

// doing above using for each;
let newNums3 = [];
myNums.forEach((nums)=>{
    if (nums>4) {
        newNums3.push(nums);
    }
});
console.log(newNums3);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// same way data is recieved from database.

const userBooks = books.filter((bk)=>(bk.genre==='History'));
// console.log(userBooks);
const userBooks2 = books.filter((bk)=>(bk.publish>=1995 && bk.genre==='History'));
console.log(userBooks2);
