// data is categorized into 2 types on the basis how data stored and accessed in memmory - Primitive (call by value) & Non Primitive (call by referance)




// Primitive (call by value - changes are done on copy)
// 7 types : string, number, boolean, null, undefined, symbol (to make value unique), bigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // bydefault undefined 

// Symbol (glance)
const id = Symbol('123')
const anotherId = Symbol('123') // result value won't be same even though value is defined same for both the Id's
console.log( id === anotherId );

// BigInt 
const bigNumber = 3590819183273565783n // to store use BigInt 




// Non Primitive (call by reference - reference can be directly allocated)
// Array, Objects, Functions
// datatype : functions
// return type : object 

// Array []
const heros = ["shaktiman", "naagraj", "doga"];

// Objects {}
let myObj = {
    name : "Ankita",
    age : 20,
}

// Functions (){}
const myFunction = function(){
    console.log("Hello world");
}





// Find out datatype of any value
console.log(typeof bigNumber)
console.log(typeof outsideTemp) // output : object
console.log(typeof scoreValue)
console.log(typeof myFunction) // actual : function object




// note : js is a dynamically typed language. This means that the variable types are determined at runtime, and you do not need to explicitly declare the type of variable before using it. Ypu can assign different types of values to a variable during its life time
// language is not defined in JS
