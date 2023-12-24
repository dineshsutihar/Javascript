// Stack (Primitive) and Heap(Non-Primitive)

let myName = "Dinesh";

let myNameCopy = myName;
myNameCopy = "Dinesh Kumar";

console.log(myNameCopy);
console.log(myName);

let myNameObj = {
    name: "Dinesh",
    age: 33,
    skill: "JavaScript",
    email: "email.mail.com"
};

let myNameObjCopy = myNameObj;

myNameObjCopy.name = "Dinesh Kumar";

console.log(myNameObjCopy.name);
console.log(myNameObj.name);