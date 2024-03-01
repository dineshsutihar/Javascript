// Here prop means properties

class User {
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }   

    //with static keyword other users cannot access the method
    static createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email; 
    }
}



// const dinesh = new User("dinesh")

// console.log(dinesh.createId());


const iphoen = new Teacher("iphone","Iphone@13.con");
iphoen.logMe();
console.log(iphoen.createId());//error