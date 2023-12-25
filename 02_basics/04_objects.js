// Singletone object

// const tingerUser = new Object();
const tindeUser = {};

tindeUser.id = "123hrkl";
tindeUser.name = "Tinder User";
tindeUser.age = 30;
tindeUser.isAdmin = false;
tindeUser.courses = ['html', 'css', 'js'];


// console.log(tindeUser); // returns object=> {id: "123hrkl", name: "Tinder User", age: 30, isAdmin: false, courses: Array(3)}

const regularUser = {
    email:"some@gmail.com",
    fullnaem:{
        firstname:"John",
        lastname:"Doe",
        userFullName: {
            firstname:"JohnDoe",
        }
    },
    
};

// console.log(regularUser.fullnaem?.userFullName.firstname); // returns string=> JohnDoe


const obj1 = {
    fname:"John",
    age1:30,
    greet1: function(){
        console.log("Hello");
    }
}

const obj2 = {
    lname:"Doe",
    age2:30,
    greet2: function(){
        console.log("Dear");
    }
}

// Joining two objects
const obj3 = Object.assign(obj1,obj2);
const obj4 = Object.assign({},obj1,obj2); // returns same as obj3 but use this to avoid mutation of the original object
// always use the below method to join two objects
const obj5 = {...obj1,...obj2}; // returns same as obj3 but use this to avoid mutation of the original object

// console.log(obj3); // returns object=> {name: "Doe", age: 30, greet: ƒ}
// console.log(obj4); // returns object=> {name: "Doe", age: 30, greet: ƒ}
console.log(obj5); // returns object=> {name: "Doe", age: 30, greet: ƒ}


// to know the keys of an object
console.log(Object.keys(tindeUser));
console.log(Object.values(tindeUser));

console.log(Object.entries(tindeUser)); // returns array of arrays=> [["id", "123hrkl"], ["name", "Tinder User"], ["age", 30], ["isAdmin", false], ["courses", Array(3)]]

console.log(tindeUser.hasOwnProperty("name")); // returns boolean=> true
