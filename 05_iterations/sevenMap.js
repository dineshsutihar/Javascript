const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNumbers = myNumbers.map((num) => num * 2); // map returns an array

// Method Chaining
const newNums = myNumbers
                        .map((num) => num *10) // its result will be passed to the next method
                        .map((num)=>num + 1 )
                        .filter((num)=> n>=20); // filter will only get the numbers that are greater than 20
console.log(newNums); 

// 