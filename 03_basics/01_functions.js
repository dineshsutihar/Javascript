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

