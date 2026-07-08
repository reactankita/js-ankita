let score;  
let valueInNumber;

// const {score} = req.body // no guarantee what the datatype will be (string, number, boolean or null)

// find out datatype 
score = "33";
console.log(typeof score);
console.log(typeof (score)); // output string 

// simple conversion
score = "33"; // guaranteed datatype of value known
valueInNumber = Number(score); // string converted to number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // output : string

// string + number
score = "33abc"
valueInNumber = Number(score) // string converted to number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // output : NaN, not a number 

// null
score = null;
valueInNumber = Number(score)
console.log(valueInNumber); // output : 0

// undefined
score = undefined;
valueInNumber = Number(score)
console.log(valueInNumber); // output : NaN 

// boolean
score = true;
valueInNumber = Number(score)
console.log(valueInNumber); // output : 1

// String
score = "Ankita";
valueInNumber = Number(score)
console.log(valueInNumber); // output : NaN

// "33" =>33
// "33abc" => NaN
// true => 1; false => 0;






let isLoggedIn;
let booleanIsLoggedIn;

// convert 1
isLoggedIn = 1;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // output : true

// convert empty string
isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // output : false

// convert string
isLoggedIn = "Ankita";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // output : true

//1 => true; 0 => false;
// "" => false; 
// "Ankita" => true
