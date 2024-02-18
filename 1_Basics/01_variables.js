const accountId = 1234
let accountEmail = "anubhav@gmail.com";
var accountPass = "12345"
accountCity = "Varanasi";
// variable can be decared,initialised without let,var,const but it is not a good programming practice.

// accountId=2 it is not allowed because 
//accountId is const

// var is a keyword that are scoped to the immediate function body (hence the function scope) while let variable are scoped to immediate enclosing block denoted by { }


console.log(accountEmail+" "+accountEmail+" "+accountPass+" "+accountCity);
console.table([accountEmail,accountId,accountPass,accountCity])

function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo"
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo it is still accessible bcoz of declared as var.
//   console.log(baz); // ReferenceError
}

run();