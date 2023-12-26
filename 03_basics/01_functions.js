// functions in javascript

function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("N");
    console.log("E");
    console.log("S");
    console.log("H");

}

sayMyName();


// function with parameters
function addTwoNumbers(num1,num2){
    // console.log(num1+num2);
    let result = num1+num2;
    return result;
}

addTwoNumbers(10,20);
const result = addTwoNumbers(10,20); // undefined is there is no return statement in the function
console.log("Result: ",result);

function loginUserMessage(username="Guest"){ // default value for username
    if(username === undefined || !username){ // if username is not passed
        console.log("Please enter your username");
        return;
    }

    return `Welcome ${username}`;

}
console.log(loginUserMessage("Dinesh"));


// Shopping cart arguiements where we dont know how many arguments will be passed

function shoppingCart(...items){ // ...items is called rest operator here it is rest but other place it is called spread operator
    return items; // returns an array
}

console.log(shoppingCart("Milk","Bread","Eggs","Butter"));


const user={
    name:"Dinesh",
    age:30,
    address:"Bangalore"
}

function handleObject(anyObject){
    console.log(`Name: ${anyObject.name} and his age is ${anyObject.age}`);
}

handleObject(user); // passing object as an argument
handleObject({
    name:"umesh",
    age:20,
    address:"Nepal"
})

const myNewArray = ["Dinesh","Umesh","Ramesh","Suresh"];

function returnSecondValue(array){
    return array[1];
}

console.log(returnSecondValue(myNewArray));// passing array as an argument