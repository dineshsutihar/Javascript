// Prototype in JavaScript

// let myName = "Dinesh     "  //
// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dinesh = function(){
    console.log("Dinesh is present in all object");
}

Array.prototype.heyDinesh = function(){
    console.log("Dinesh Says Hey");
}

// console.log(heroPower.dinesh());
// console.log(heroPower.heyDinesh()); // it will throw error becuse Array pass through prototype but you have assigned to buttom level so it cannot be done

console.log(myHeros.dinesh());
console.log(myHeros.heyDinesh());


// inheritance [old type]

const User ={
    name: "Dinesh",
    username: "dineshsutihar"
}

const Teacher = {
    makeVide: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    __proto__: TeachingSupport //inheriting the properties 
}

//we can do same out of object too 
Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

// top problem solving 

let anotherUsername = "DineshSutihar        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()

"Umesh Sutihar".trueLength()