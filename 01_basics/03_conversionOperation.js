let score = "3a";

console.log(typeof score);
console.log(typeof (score)); // same as above

let valueInNumber = Number(score); // Number() => converts a value to number

console.log(typeof valueInNumber); // returns number if the value can be converted to number else returns NaN (Not a Number)

console.log(valueInNumber); // returns NaN (Not a Number) if the value cannot be converted to number

// "33" => 33
// "3a" => NaN but type is number

// null

let valueInNull = null;
console.log(typeof valueInNull); // returns object which is a bug in JS
console.log(valueInNull); // returns null

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn); // Boolean() => converts a value to boolean
console.log(typeof booleanIsLoggedIn); // returns boolean if the value can be converted to boolean else returns false

// 1 => true
// 0 => false
// "a" => true
// "" => false
// null => false
// undefined => false
// NaN => false


// lets try to convert a string to boolean

let someNumber = 33;
let stringNumber = String(someNumber); // String() => converts a value to string
console.log(typeof stringNumber); // returns string if the value can be converted to string else returns false
console.log(stringNumber); // returns string
