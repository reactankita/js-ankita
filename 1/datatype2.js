"use strict"; // treak all JS code as newer version (automatically)

// alert( 3 + 3) // we are using node.js not browser (JS engine is hidden in browser) -> this will work on browser but here will show error

// console.log(3 + 3); console.log("Ankita") -> poor code readability

// hence code systematically 

console.log(3 + 3); 
console.log("Ankita")

// alert mdn domumentation -> this is not the orginal documentation
// ECMAScript® 2027 Language Specification -> Defines the syntax, rules, and constraints of JavaScript.

let name = "Ankita" // string datatype
let age = 18 // number datatype
let isLoogedIn = false // boolean datatype
let city; // undefined
let state = null; // not undefined , its empty. eg.if a server cannot send a "temperture"


// types of primitive datatypes
// number => 2 to power 53
// bigint => for big data
// string => "" / ''
// boolean => true / false
// null => standalone value (representation of empty value) (datatype : object)
// undefined => variable declared but value not defined/assigned 
// symbol => unique 

// object 

// typeof => know the datatype of any variable/value
console.log(typeof "Ankita");
console.log(typeof name);
console.log(typeof 18);
console.log(typeof age);
console.log(typeof null); // output : object
console.log(typeof undefined); // output : undefined