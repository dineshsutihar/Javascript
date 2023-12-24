const score = 40;


const balance = new Number(1000); // Number() => converts a value to number object Explicitly defining the type of the variable

console.log(typeof balance); // returns object
console.log(balance); // [Number: 1000]

console.log(balance.toString()); // returns string

console.log(score.toFixed(2)); // returns string with the specified number of digits after the decimal point

const num = 1000.65434;

console.log(num.toFixed(2)); // returns string with the specified number of digits after the decimal point

console.log(num.toPrecision(2)); // returns string with the specified number of digits

const hundred = 1000000000000;

console.log(hundred.toLocaleString('en-IN')); // returns string with the specified number of digits after the decimal point

console.log(hundred.toLocaleString('en-US')); // returns string with the specified number of digits after the decimal point

console.log(Number.MAX_VALUE) // returns the maximum value of a number
console.log(Number.MIN_VALUE) // returns the minimum value of a number);


// ************* Math Object ******************
console.log(`Math Object`);
console.log(Math.PI); // returns PI value

console.log(Math.round(2.4)); // returns rounded value of the number
console.log(Math.round(2.5)); // returns rounded value of the number

console.log(Math.ceil(2.4)); // returns rounded value of the number
console.log(Math.ceil(2.5)); // returns rounded value of the number

console.log(Math.floor(2.4)); // returns rounded value of the number
console.log(Math.floor(2.5)); // returns rounded value of the number

console.log(Math.trunc(2.4)); // returns truncated value of the number
console.log(Math.trunc(2.5)); // returns truncated value of the number

console.log(Math.abs(-2.4)); // returns absolute value of the number

console.log(Math.pow(2, 3)); // returns the value of the number raised to the specified power

console.log(Math.sqrt(4)); // returns the square root of the number

console.log(Math.min(2, 3, 4, 5, 6, 7, 8, 9)); // returns the minimum value of the numbers

console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9)); // returns the maximum value of the numbers

console.log(Math.random()); // returns a random number between 0 and 1

console.log(Math.floor(Math.random() * 10)); // returns a random number between 0 and 10

console.log(Math.floor(Math.random() * 10) + 1); // returns a random number between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns a random number between 10 and 20