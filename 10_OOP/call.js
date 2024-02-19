function SetUserName(username){
    // complex DB calls
    this.username=username
    console.log("Called");
}

function createUser(username,email, password){
    // SetUserName(username) //this is not working it not getting called

    // explicetly calls 
    SetUserName.call(this,username) //sending the this to upper function so that the upper function will use this "this" so that data will be saved to current context of currentUser.
    this.email = email
    this.password = password
}

const chai = new createUser("Dinesh","dinesh@fb.com","123")
console.log(chai);