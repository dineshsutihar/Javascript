//  In this file we will learn about the different data types in JavaScript


"use strict"; // treat all JS code as newer version

//alert("Hello World"); // alert used to display a message in a popup window in the browser and it will not work in nodejs

let name = "John"; // string => sequence of characters surrounded by single or double quotes or backticks range 0 to 2 ^ 53 - 1 characters
let age = 20; // number => ranger 2 ^ 53 - 1 to -2 ^ 53 - 1
let isApproved = true; // boolean => true or false (lowercase)
let firstName = undefined; // undefined => default value of a variable if not assigned any value
let lastName = null; // null => explicitly assigned value of a variable to be empty
//  symbol => used with objects to create unique identifiers
//  object => collection of key-value pairs (properties and methods)
//  typeof operator => used to find the type of a variable


console.log(typeof name); // returns string
console.log(typeof null); // returns object which is a bug in JS
console.log(typeof undefined); // returns undefined

// Primitive data types => these are the data types which are not objects and have no methods
// = 7 data types
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// example of primitive data types
let str = "Hello";
let num = 33;
let bool = true;
let nul = null;
let undef = undefined;
let sym = Symbol("id");
let bigInt = 1234567890123456789012345678901234567890n;


// Non primitive data types => these are the data types which are objects and have methods

// Object
// Array
// Function
// Date
// RegExp => Regular Expression


// example of non primitive data types
let obj = {
    name: "Dinesh",
    skill: "JavaScript"

};

let arr = [ "Dinesh", "JavaScript"];

let func = function () {
    return "Hello";
 };

let date = new Date();
let regExp = /w+/g;


console.log(typeof regExp);
