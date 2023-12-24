//  Details about String

const firstName = "Dinesh";
const repoCount = 20;


console.log(firstName+repoCount + " repositories");  // not modernized way so dont use it

console.log(`${firstName} has ${repoCount} repositories`); // modernized way so use it

// alternaive way to declare stirng

const str = new String("Hello");

console.log(str); // returns String object
console.log(str[0]); // returns H
console.log(str.__proto__); // returns String object

// String methods
console.log(str.length); // returns length of the string, here length is a property not a method
console.log(str.toUpperCase()); // returns string in uppercase 
console.log(str.toLowerCase()); // returns string in lowercase

console.log(str.indexOf("e")); // returns index of the first occurence of the character in the string
console.log(str.lastIndexOf("l")); // returns index of the last occurence of the character in the string
console.log(str.charAt(0)); // returns character at the specified index
console.log(str.charCodeAt(0)); // returns unicode of the character at the specified index

console.log(str.substring(0, 2)); // returns substring from the specified index to the specified index
console.log(str.slice(0, 2)); // returns substring from the specified index to the specified index
console.log(str.slice(-2,3)); // returns substring from the specified index to the specified index

console.log(str.split("e")); //array=>  returns array of substrings splitted by the specified character



console.log(str.replace("e", "a")); // returns a new string with the specified character replaced by the specified character
console.log(str.trim()); // returns a new string with the leading and trailing spaces removed from the string {remove white spaces from the string}

console.log(str.includes("e")); // returns true if the string contains the specified character else returns false
console.log(str.startsWith("H")); // returns true if the string starts with the specified character else returns false
console.log(str.endsWith("o")); // returns true if the string ends with the specified character else returns false

console.log(str.concat(" Dinesh")); // returns a new string with the specified string concatenated to the original string
console.log(str.concat(" Dinesh", " Kumar")); // returns a new string with the specified strings concatenated to the original string

console.log(str.repeat(3)); // returns a new string with the original string repeated the specified number of times

