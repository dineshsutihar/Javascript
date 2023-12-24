//  There are 3 ways to declare a variable in JS

// 1. var +> ES5, it is used to declare a variable which can be changed and its scope is limited to the function in which it is declared.
// 2. let => ES6, it is used to declare a variable which can be changed and its scope is limited to the block in which it is declared.
// 3. const => ES6, it is used to declare a variable which cannot be changed and its scope is limited to the block in which it is declared.

// Example 1
var a = 10;
console.log(a);
a = 20;
console.log(a);

// Example 2
let b = 10;
console.log(b);
b = 20;
console.log(b);

// Example 3
const c = 10;
console.log(c);
// c = 20; // Error
console.log(c);

