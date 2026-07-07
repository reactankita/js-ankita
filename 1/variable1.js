const accountId = 15983 // cannot be changed
let accountEmail = "ankitasutar@gmail.com" // let: Can be updated but not redeclared in the same scope, and is block-scoped. 
var accountPassword = "12345" // var: Can be redeclared and updated, and is function-scoped.
accountCity = "Jaipur" // Works without a keyword, but use let or const to declare the variable properly.
let accountState; //variable declared but not defined. If tried to print , output -> undefined 

// accountId = 2 -> not allowed 
accountEmail = "sutarankita@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

// or 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/* 
Prefer not to use "var"
because of issue in block scope and functional scope 
*/

// const, var, let -> keywords to declare variables
// account Id, email, password -> variable 