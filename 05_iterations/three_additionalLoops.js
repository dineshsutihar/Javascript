// for of

// ["", "", "", "", "", "", "", "", "", ""]
// [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const key of arr) {
    console.log(key);  
}


const greeting = "Hello World";
for (const greet of greeting) {
    if(greet===" "){
        continue;
    }
    console.log(`Letter is ${greet}`);  
}


// maps
const myMap = new Map(); // key value pair and does not allow duplicate keys
myMap.set("name", "Dinesh");
myMap.set("age", 30);
myMap.set("city", "Bangalore");

// console.log(myMap);

for (const [key,value ]of myMap) { // destructuring the array using []
    console.log(`${key} :- ${value} `);   // prints key value pair all the values
}

// we cannot iterate over an object using for of loop
// example
const myObject = {
    name: "Dinesh",
    age: 30,
    city: "Bangalore"
}

// for (const data of myObject) { 
//     console.log(data);  
// }

// lets try it to iterate over map 
for (const data in myMap) {  // in for in loop we cannt iterate over an map
    console.log(data);  
}
