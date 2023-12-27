const userEmail ="d@dinesh.ai"

if(userEmail){  //we are assuming that userEmail is true
    console.log("Email is valid")
} else {
    console.log("Email is invalid")
}


// falsy values=> false, 0,-0,BigInt0n, "", null, undefined, NaN.
// truthy values=> true, 1, " ", [], {}, "anything",function(){},


if(userEmail.length===0){  
    console.log("Email is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){  
    console.log("Object is empty")
}

// Nullish Coaliescing Operator (??): null undefined

let val1;
// val1= 5 ?? 10;

// val1 = null ?? 10; // check if val1 is null or undefined, if yes then assign 10 to val1

console.log(val1); // 5

var1 = undefined ?? 10; // check if val1 is null or undefined, if yes then assign 10 to val1
// upper line will return underfined


// ternary operator
// condition ? true : false

const iceTeaPrice = 10;
iceTeaPrice>=10 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea")