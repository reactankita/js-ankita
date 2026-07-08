// simple comparisons 
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// automatic conversion 
console.log("2" > 1);   
console.log("02" > 1);
// try to keep same datatype or may cause inconvinence (may not give predictable result)

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true : conversion problem 
// the reason is that an equality check == and comparisons >, <, >=, <= work differently
// comparison (=) does not convert null to a number. comparison (>) convert null to a number, treating it as 0 that's why
// null >= 0 is true 
// null > 0 is false

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// === -> strict check (datatype, conversion)
console.log("2" === 2);