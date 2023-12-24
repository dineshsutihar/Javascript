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


console.log("*******************************************************");
// **************** Operaions ******************************

let value = 3;
let negValue =-value;
console.log(negValue);

console.log(2+2); // addition
console.log(2-2); // subtraction
console.log(2*2); // multiplication
console.log(2/2); // division
console.log(2%2); // modulus
console.log(2**2); // exponentiation

console.log("*******************************************************");

let str1 = "Hello ";
let str2 = "Dinesh";
let str3 = str1 + str2;
console.log(str3);

console.log("1"+2); // concatenation : output => 12
console.log(1+"2"); // addition  : output => 12
console.log(1+2+"3"); // addition  : output => 33
console.log("1"+2+3); // concatenation : output => 123


console.log("*******************************************************");

console.log(+true); // unary plus operator : output => 1
console.log(+false); // unary plus operator : output => 0
console.log(-true); // unary minus operator : output => -1
console.log(-false); // unary minus operator : output => -0

let num1, num2, num3;
num1 =num2 =num3 = 3; // dont do this in real time

let gameCounter =100;
gameCounter++;
console.log(gameCounter); // output => 101

gameCounter--;
console.log(gameCounter); // output => 100

console.log("*******************************************************");

// link to study form MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence