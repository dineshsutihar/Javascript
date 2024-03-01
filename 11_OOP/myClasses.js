// ES6

// class User {
//     constructor(username, email,password){
//         this.username=username; 
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const dinesh = new User("dineshsutihar","dineshsutihar9@gmail.com","123")

// console.log(dinesh.encryptPassword())
// console.log(dinesh.changeUsername())



// without class keyword under the hood

function User(username,email,password){
    this.password=password
    this.email=email
    this.username=username
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const umesh = new User("umesh","umeshsutihar@2334","123")

console.log(umesh.changeUsername())
console.log(umesh.encryptPassword());