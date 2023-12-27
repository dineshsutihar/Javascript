// 
const myObject = {
    js: "Javascript",
    py: "Python",
    rb: "Ruby",
    php: "PHP"
}

for(let key in myObject) { //in operator is used to loop through an object
    console.log(`${key} is short for ${myObject[key]}`)
}


// trying for in on an array

let myArray= ["Dinesh", "Ramesh", "Suresh", "Rajesh"]
for(let key in myArray) { //in operator is used to loop through an object
    console.log(key, myArray[key]) // prints index and value
}


// difference between for in and for of

// for in: used to loop through an object and array and returns index and value of the array or object 
// for of: used to loop through an array and returns value of the array or object
