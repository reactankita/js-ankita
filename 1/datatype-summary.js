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


// https://262.ecma-international.org/5.1/#sec-11.4.3



// note : js is a dynamically typed language. This means that the variable types are determined at runtime, and you do not need to explicitly declare the type of variable before using it. Ypu can assign different types of values to a variable during its life time
// language is not defined in JS










// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , heap (Non-Primitive)



// Stack
let Youtubename = "codeaurchai"
let anothername = Youtubename // copy is given not the original data of "Youtubename" variable, hence if updated using another variable the original data won't change
anothername = "codeaurchaiNewVersion" // copy updated
console.log(Youtubename) // no change
console.log(anothername)


// Heap
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne // both userOne and userTwo (in stack) points to the same original data (userOne) stored in heap
userTwo.email = "ankita@gmail.com" // original value updated
console.log(userOne) // changed
console.log(userTwo) 


