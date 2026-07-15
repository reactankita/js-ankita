// Dates

let myDate = new Date()
console.log(typeof myDate)

console.log(myDate);
console.log(myDate.toString()); // converted to string 


// more methods 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());


// declare new date
let myCreatedDate = new Date(2026, 0, 23) // month starts from 1 -> will automatically get converted to January (month 1)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());


// format 2
myCreatedDate = new Date(2026, 2, 23, 5, 3) // year - month - date - hour - minute - second
console.log(myCreatedDate.toLocaleString());


// format 3
myCreatedDate = new Date("2026-01-14") // yy/mm/dd -> not prefered much 
console.log(myCreatedDate.toLocaleString());


// format 4
myCreatedDate = new Date("01-14-2026") // mm/dd//yy -> prefered much 
console.log(myCreatedDate.toLocaleString());


// format 5 - TimeStamp
let myTimeStamp = Date.now() // output in milliseconds
console.log(myTimeStamp);

console.log(myCreatedDate.getTime()); // output in milliseconds for object 

// format 6 - conversion
console.log(Date.now()); // output in milliseconds
console.log(Date.now()/1000) // converted to seconds (problem : decimal values)
console.log(Math.floor(Date.now()/1000)) // to remove decimal and get the output in seconds

// format 7 
let newDate = new Date()
console.log(newDate) // year month date time

// get methods
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getMilliseconds())
console.log(newDate.getMinutes())
console.log(newDate.getMonth())
console.log(newDate.getSeconds())
console.log(newDate.getTime())
console.log(newDate.getTimezoneOffset())
console.log(newDate.getUTCDate())
console.log(newDate.getUTCDay()) // more......


// `${newDate.getDay()} and the time`


// toLocaleString() method
newDate.toLocaleString('default',{
    weekday: "long"
}) // The second parameter is an options object. Press Ctrl + Space inside {} to see all available options.



// node 1/date_and_time.js