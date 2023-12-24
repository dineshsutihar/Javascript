//Comparision operators 
// ==, ===, !=, !==, >, <, >=, <=

// == (equal to)
// === (equal value and equal type)
// != (not equal)
// !== (not equal value or not equal type)
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)

console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(2 != 2); // false
console.log(2 != "2"); // false
console.log(2 !== "2"); // true


console.log(2 > 2); // false
console.log(2 < 2); // false
console.log(2 >= 2); // true


console.log("*******************************************************");

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null != undefined); // false
console.log(null !== undefined); // true

console.log("*******************************************************");

console.log(null == 0); // false
console.log(null === 0); // false
console.log(null != 0); // true
console.log(null !== 0); // true


console.log("*******************************************************");

console.log("02" == 2); // true
console.log("02" === 2); // false
console.log("02" != 2); // false


// Dont use these kind of operators which are not clear and created confusion.


