const course = {
    coursename: "JavaScript",
    duration: "3 months",
    price: "Free",
    courseInstructor: "Dinesh",
}

const{courseInstructor:Instru} =course; // Shorthand for courseInstructor is Instru

console.log(courseInstructor); // returns string=> Dinesh 
console.log(Instru); // returns string=> Dinesh

// example in react
const navbar = ({Instru}) =>{

}

// API basic concepts:
// JSON 
// {
//     name: "Dinesh",
//     age: 30,
//     courses: ["html","css","js"],
// }

// API in Array Format:
[
    {
        name: "Dinesh",
        age: 30,
        courses: ["html","css","js"],
    },
    {
        name: "Dinesh",
        age: 30,
        courses: ["html","css","js"],
    },
    {
        name: "Dinesh",
        age: 30,
        courses: ["html","css","js"],
    }
]

// JSON.parse() => converts JSON to JS object
// JSON.stringify() => converts JS object to JSON
// Use Jsonformatter to make it readable.. =>https://jsonformatter.org/

