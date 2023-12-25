// array

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myHeros = ['Ironman', 'Spiderman', 'Captain America', 'Thor'];    
const myArr2= new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);


console.log(myarr[0]); // returns number=> 1

// Array Methods

myarr.push(10);
console.log(myarr); // returns array=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myarr.pop();
console.log(myarr); // returns array=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
myarr.unshift(0);
console.log(myarr); // returns array=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
myarr.shift();
console.log(myarr); // returns array=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(myarr.includes(5)); // returns boolean=> true it checks if the array includes the value or not
console.log(myarr.indexOf(5)); // returns number=> 4 it returns the index of the value


const newArr = myarr.join();
console.log(newArr); // returns string=> 1,2,3,4,5,6,7,8,9 it converts the array into string

// Slice and Splice

console.log("A ", myarr);
const myNewArr = myarr.slice(1, 4); // it returns the elements from the array
console.log("B ", myNewArr); // returns array=> [2, 3, 4] it slices the array from the given index

console.log("C ", myarr);
const myNewArr2 = myarr.splice(1, 4); // it removes the elements from the array, it seperate the elements from the array
console.log("D ", myNewArr2); // returns array=> [2, 3, 4, 5] it splices the array from the given index