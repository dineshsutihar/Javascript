// 

for(let i = 0; i < 10; i++) {
    console.log(i)
}

//  nested for loop
for(let i = 0; i < 10; i++) {
    console.log(i)
    for(let j = 0; j < 10; j++) {
        console.log(i, j)
    }
}


// loop through an array

let myArray= ["Dinesh", "Ramesh", "Suresh", "Rajesh"]
for(let i = 0; i < myArray.length; i++) { 
    console.log(myArray[i])
}

// loop through an object

let myObject= { 
    name: "Dinesh",
    age: 30,
    city: "Bangalore"
}

for(let key in myObject) { //in operator is used to loop through an object
    console.log(key, myObject[key])
}


// break and continue
// break: to break out of a loop
// continue: to skip an iteration

for(let i = 0; i < 10; i++) {
    if(i===5) {
        console.log("I am breaking out of the loop")
        break; // break out of the loop so 5 will not be printed
        console.log("I am not printed");
    }
    console.log(i)
}

for(let i = 0; i < 10; i++) {
    if(i===5) {
        console.log("I am skipping the iteration")
        continue; // skip the iteration so 5 will not be printed
        console.log("I am not printed");
    }
    console.log(i)
}
