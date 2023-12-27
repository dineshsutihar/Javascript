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