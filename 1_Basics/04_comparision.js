console.log(2>1);

// comparision operator only gives boolean values.


// comparing different datatypes
console.log("0.5" > 1); // js automatically convert the string to int, in type script we can't compare 2 diff strings.

// study from documentation.
// comparision and equaltiy operators work differently.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 
// we need to avoid above conversions.


// === do strict check, it checks values as well as datatypes of both the values.
console.log(undefined === 0);