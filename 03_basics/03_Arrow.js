// arrow funcion

const user ={
    name:"Dinesh",
    age:30,
    address:"Bangalore",
    welcomeMessage:function(){
        console.log(`Welcome ${this.name}`);
        console.log(this); // this refers to the object
    }
}

user.welcomeMessage(); // Welcome Dinesh
user.name="Umesh";
user.welcomeMessage(); // Welcome Umesh


console.log(this); // window object in browser and global object in nodejs




// function chai(){
//     console.log(this);
// }
// chai(); // window object in browser and global object in nodejs


// Arrow function

const user1 =() => { // arrow function
    console.log(this);
}

user1(); // window object in browser and global object in nodejs

// syntax of arrow function 
// const addTwoNumbers = (num1,num2) => {
//     return num1+num2;
// }

// addTwoNumbers(10,20);

// implicit return 
const addTwoNumbers = (num1,num2) => (num1+num2); // if there is only one line of code in the function then we can remove the curly braces and return keyword
console.log(addTwoNumbers(10,20));

// what if you want to return object from implicit return

const addTwoNumbers1 = (num1,num2) => ({num1:num1,num2:num2}); // if there is only one line of code in the function then we can remove the curly braces and return keyword
console.log(addTwoNumbers1(10,20));


const myArray = [10,20,30,40,50];
myArray.forEach(() => {}); // Fix: Provide an empty block as a valid expression
