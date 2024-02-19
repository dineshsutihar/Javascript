function multiplyBy5(nums){
    return nums*5;
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username=username; 
    this.score = score; 
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Username: ${this.username} \nScore: ${this.score}`);
}

const temp = new createUser("dinesh",25)
const temp1 = new createUser("umesh",49)

temp.printMe()
temp1.printMe()
