const name = "Ankita"

const repoCount = 50

// console.log(name + repoCount + " Value") outdated syntax

// use backtick - modern
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // string interpossession


// another method to declare string
const gameName = new String ('Ankita-Suttar') // string - object type

console.log(gameName[0])
console.log(gameName.__proto__)  
// `gameName.__proto__` contains all built-in string methods. (optional to use)
// Every string object can access these methods.

// String Prototype Methods ->  f stands for funtion/method
// anchor : ƒ anchor()               // Creates an HTML anchor
// at : ƒ at()                       // Returns character at the given index
// big : ƒ big()                     // Displays string in big font (HTML)
// blink : ƒ blink()                 // Makes text blink (HTML - obsolete)
// bold : ƒ bold()                   // Displays string in bold (HTML)
// charAt : ƒ charAt()               // Returns character at a specified index
// charCodeAt : ƒ charCodeAt()       // Returns Unicode of character at a specified index
// codePointAt : ƒ codePointAt()     // Returns Unicode code point at a specified index
// concat : ƒ concat()               // Joins two or more strings
// constructor : ƒ String()          // Returns the String constructor
// endsWith : ƒ endsWith()           // Checks if string ends with given text
// fixed : ƒ fixed()                 // Displays string in fixed-width font (HTML)
// fontcolor : ƒ fontcolor()         // Changes font color (HTML)
// fontsize : ƒ fontsize()           // Changes font size (HTML)
// includes : ƒ includes()           // Checks if string contains given text
// indexOf : ƒ indexOf()             // Returns first occurrence of a value
// isWellFormed : ƒ isWellFormed()   // Checks if string is well-formed Unicode
// italics : ƒ italics()             // Displays string in italic (HTML)
// lastIndexOf : ƒ lastIndexOf()     // Returns last occurrence of a value
// length : 0                        // Returns the number of characters
// link : ƒ link()                   // Creates an HTML hyperlink
// localeCompare : ƒ localeCompare() // Compares two strings based on locale
// match : ƒ match()                 // Matches string against a regular expression
// matchAll : ƒ matchAll()           // Returns all regex matches
// normalize : ƒ normalize()         // Normalizes Unicode characters
// padEnd : ƒ padEnd()               // Pads string at the end
// padStart : ƒ padStart()           // Pads string at the beginning
// repeat : ƒ repeat()               // Repeats the string specified number of times
// replace : ƒ replace()             // Replaces first matching value
// replaceAll : ƒ replaceAll()       // Replaces all matching values
// search : ƒ search()               // Searches string using a regular expression
// slice : ƒ slice()                 // Extracts part of a string
// small : ƒ small()                 // Displays string in small font (HTML)
// split : ƒ split()                 // Splits string into an array
// startsWith : ƒ startsWith()       // Checks if string starts with given text
// strike : ƒ strike()               // Displays string with strikethrough (HTML)
// sub : ƒ sub()                     // Displays string as subscript (HTML)
// substr : ƒ substr()               // Extracts characters from a start index (deprecated)
// substring : ƒ substring()         // Extracts characters between two indices
// sup : ƒ sup()                     // Displays string as superscript (HTML)
// toLocaleLowerCase : ƒ toLocaleLowerCase() // Converts string to lowercase using locale
// toLocaleUpperCase : ƒ toLocaleUpperCase() // Converts string to uppercase using locale
// toLowerCase : ƒ toLowerCase()     // Converts string to lowercase
// toString : ƒ toString()           // Converts value to a string
// toUpperCase : ƒ toUpperCase()     // Converts string to uppercase
// toWellFormed : ƒ toWellFormed()   // Converts to a well-formed Unicode string
// trim : ƒ trim()                   // Removes whitespace from both ends
// trimEnd : ƒ trimEnd()             // Removes whitespace from the end
// trimLeft : ƒ trimStart()          // Alias of trimStart()
// trimRight : ƒ trimEnd()           // Alias of trimEnd()
// trimStart : ƒ trimStart()         // Removes whitespace from the beginning
// valueOf : ƒ valueOf()             // Returns the primitive string value
// Symbol(Symbol.iterator) : ƒ [Symbol.iterator]() // Returns an iterator for the string


// few eg : method accessing 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // index at char
console.log(gameName.indexOf('i')); // position at char 

// substring()
const newString = gameName.substring(0,6) // last value will not be included
console.log(newString);
// const newString = gameName.substring(-12,6) -> substring() does not support negative indices; negative values are converted to 0.

// slice()
const anotherString = gameName.slice(-12, 6) // negative input allowed
console.log(anotherString); // Negative index = string.length + negativeIndex (e.g., 13 + (-12) = 1)

// trim()
const newStringOne = "     Ankita     "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove extra spaces [trimend -> removes end extra spaces/ trimstart -> removes start extra spaces]

// replace() 
const url = "https://ankita.com/ankita%20suttar"
console.log(url.replace('%20', '-'));

// includes()
console.log(url.includes('ankita'));
console.log(url.includes('20'));

// split() 
// converts a string into an array by splitting it based on a separator
const newStringTwo = 'web-dev-tutorial'
console.log(newStringTwo.split('-')); // separator -> -

// small()
// returns the string wrapped in <small> HTML tags (legacy method).
console.log(newStringTwo.small())
