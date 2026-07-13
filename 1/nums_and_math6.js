// Number
// The built-in JavaScript constructor for creating Number objects.

const score = 400
console.log(score);

const balance = new Number(100) // surely number datatype
console.log(balance);

// toString()
console.log(balance.toString().length);

// toFixed
console.log(balance.toFixed(2)); // used in e commerce application

// toPrecision
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // // Returns the number as a string with 3 significant digits.

// toLocaleString 
// Formats the number with commas based on the locale.
const hundreds = 1000000
console.log(hundreds.toLocaleString()) // Uses the US number format by default 
console.log(hundreds.toLocaleString('en-IN')) // Uses the Indian number format 



// These are the methods (functions) available in the Number prototype. Every Number object inherits these methods.

// Method                            	                    Purpose
// constructor             ƒ Number()	                    Refers to the Number constructor that creates Number objects.
// toExponential()         ƒ toExponential()	            Converts a number to exponential (scientific) notation.
// toFixed()               ƒ toFixed()	                    Formats a number with a fixed number of decimal places.
// toLocaleString()        ƒ toLocaleString()	            Formats a number according to the locale (commas, currency, etc.).
// toPrecision()           ƒ toPrecision()	                Formats a number to the specified total number of significant digits.
// toString()              ƒ toString()	                    Converts the number into a string.
// valueOf()               ƒ valueOf()	                    Returns the primitive numeric value stored in the Number object.
// [[Prototype]]           Object	                        Shows that the Number prototype itself inherits from Object.prototype.



// Number.MAX_VALUE
// Returns the largest positive number JavaScript can represent.
// Output: 1.7976931348623157e+308

// Number.MIN_VALUE
// Returns the smallest positive number greater than 0 JavaScript can represent.
// Output: 5e-324











// +++++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Math
// The built-in JavaScript object for performing mathematical operations.

console.log(Math)

console.log(Math.abs(-4)); // abs() -> Returns the positive value of a number.
console.log(Math.round(4.6)); // round() -> Rounds a number to the nearest integer.
console.log(Math.ceil(4.2)); // ceil() -> Rounds a number up to the next integer.
console.log(Math.floor(4.2)); // floor() -> Rounds a number down to the previous integer.
console.log(Math.min(2, 7, 8, 5, 9)); // min() -> Returns the smallest value.
console.log(Math.max(2, 7, 8, 5, 9)); // max() -> Returns the largest value.
console.log(Math.random()); // random() -> Returns a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random() * 10 + 1); // Returns a random number between 1 and 11. (+1 : to avoid 0 case)
console.log(Math.floor(Math.random() * 10) + 1); // Returns a random whole number between 1 and 10.

// important 
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Generates a random number, calculates the range (max - min + 1), and adds min so the result is at least min.



// These are the properties (constants) and methods (functions) available in the Math object.

// Property/Method          Value/Function            Purpose
// E                        2.718281828459045         Euler's number.
// LN2                      0.6931471805599453        Natural logarithm of 2.
// LN10                     2.302585092994046         Natural logarithm of 10.
// LOG2E                    1.4426950408889634        Base-2 logarithm of e.
// LOG10E                   0.4342944819032518        Base-10 logarithm of e.
// PI                       3.141592653589793         Value of π (pi).
// SQRT1_2                  0.7071067811865476        Square root of 1/2.
// SQRT2                    1.4142135623730951        Square root of 2.
//
// abs()                    ƒ abs()                  Returns the absolute value.
// acos()                   ƒ acos()                 Returns the arccosine.
// acosh()                  ƒ acosh()                Returns the inverse hyperbolic cosine.
// asin()                   ƒ asin()                 Returns the arcsine.
// asinh()                  ƒ asinh()                Returns the inverse hyperbolic sine.
// atan()                   ƒ atan()                 Returns the arctangent.
// atan2()                  ƒ atan2()                Returns the angle from x and y coordinates.
// atanh()                  ƒ atanh()                Returns the inverse hyperbolic tangent.
// cbrt()                   ƒ cbrt()                 Returns the cube root.
// ceil()                   ƒ ceil()                 Rounds up to the nearest integer.
// clz32()                  ƒ clz32()                Returns leading zero bits in a 32-bit integer.
// cos()                    ƒ cos()                  Returns the cosine.
// cosh()                   ƒ cosh()                 Returns the hyperbolic cosine.
// exp()                    ƒ exp()                  Returns e raised to a power.
// expm1()                  ƒ expm1()                Returns eˣ - 1.
// f16round()               ƒ f16round()             Rounds to 16-bit floating-point precision.
// floor()                  ƒ floor()                Rounds down to the nearest integer.
// fround()                 ƒ fround()               Rounds to the nearest 32-bit float.
// hypot()                  ƒ hypot()                Returns the square root of the sum of squares.
// imul()                   ƒ imul()                 Performs 32-bit integer multiplication.
// log()                    ƒ log()                  Returns the natural logarithm.
// log1p()                  ƒ log1p()                Returns the natural logarithm of (1 + x).
// log2()                   ƒ log2()                 Returns the base-2 logarithm.
// log10()                  ƒ log10()                Returns the base-10 logarithm.
// max()                    ƒ max()                  Returns the largest value.
// min()                    ƒ min()                  Returns the smallest value.
// pow()                    ƒ pow()                  Returns a number raised to a power.
// random()                 ƒ random()               Returns a random number between 0 and 1.
// round()                  ƒ round()                Rounds to the nearest integer.
// sign()                   ƒ sign()                 Returns the sign of a number.
// sin()                    ƒ sin()                  Returns the sine.
// sinh()                   ƒ sinh()                 Returns the hyperbolic sine.
// sqrt()                   ƒ sqrt()                 Returns the square root.
// sumPrecise()             ƒ sumPrecise()           Returns a precisely summed value.
// tan()                    ƒ tan()                  Returns the tangent.
// tanh()                   ƒ tanh()                 Returns the hyperbolic tangent.
// trunc()                  ƒ trunc()                Removes the decimal part.
//
// Symbol(Symbol.toStringTag) "Math"                  Identifies the object as "Math".
// [[Prototype]]              Object                  Math inherits from Object.


