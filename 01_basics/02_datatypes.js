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

