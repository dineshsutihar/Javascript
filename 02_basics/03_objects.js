// singleton object
Object.create
// object literal

const mySymbol = Symbol('mySymbol');

const JsUser = {
    name: 'John',
    "full name": "John Doe",
    [mySymbol]:"This is my symbol", // Symbol property
    mySymbol: "This is not my symbol", // String property
    age: 30,
    isAdmin: true,
    courses: ['html', 'css', 'js'],
    wife: null
    
};

// Accessing the object properties
console.log(JsUser.name); // returns string=> John 
console.log(JsUser["full name"]); // returns string=> John Doe
console.log(JsUser["age"]); // returns number=> 30

// changing the object properties
JsUser.name = "Dinesh";

// Object.freeze(JsUser); // freezes the object, no changes can be made to the object

JsUser.greet = function(){
    console.log("Hello");
}

console.log(JsUser.greet()); // returns undefined