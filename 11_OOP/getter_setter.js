class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    
    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const dinesh  = new User("dinesh@gmail","123")

console.log(dinesh.password);