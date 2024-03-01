// Object Literal 

const user = {
    username: "Dinesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (){
        //console.log("Got user details form database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



// Constructor in JavaScript 
console.log("Constructor:");

// const promisOne = new Promise()  //this is constructor function 
// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this;
} 

const userOne =new User("Dinesh",3,true);
const userTwo =new User("Umesh",5,false); //if we dont want to override the data then we must use new keyword
console.log(userOne); //here userTwo will override the userOne 
console.log(userTwo.constructor);