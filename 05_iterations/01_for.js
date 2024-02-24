// for

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element === 5) {
        console.log("5 is best number");
        continue;
    }
    console.log(index);   
}
// in js there is not Array out of bound exception there is undefined if you accessed any wrong keyword;

// index is not available out of the loop scope