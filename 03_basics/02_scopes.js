// let a = 10;
// var b = 20;
// const c = 30;

// console.log("a: ", a);
// console.log("b: ", b);
// console.log("c: ", c);

// if (true) {
//   let a = 10;
//   var b = 20;
//   const c = 30;
// }

// console.log("a: ", a);
// console.log("b: ", b);
// console.log("c: ", c);

// {} => block scope

// global scope => global scope is the scope outside of all the functions
// local scope => local scope is the scope inside a function


// Nested scope => scope inside a scope

function one(){
    const username = "Dinesh";
    function two(){
        const username = "Umesh";
        console.log("Username:inner ",username);
    }
    console.log("Username:outer ",username);
    two();
}
one();


if (true) {
  const username = "Dinesh";
  if (username === "Dinesh") {
    const username1 = "Umesh";
    console.log("Username:inner ",username);
    console.log("Username1:inner ",username1);
  }
//   console.log("Username:outer ",username1);
}

// ++++++++++++++++++++++++++ Intersting ++++++++++++++++++++++++++++++++
// Hoisting => hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
function addone(num){
    return num+1;
}
addone(10); // it can be called before the function declaration

const addTwo = function(num){ 
    return num+2;
}
addTwo(20); // it cannot be called before the function declaration
