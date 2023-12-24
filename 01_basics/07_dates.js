//  Dates

let myDate = new Date();
console.log(myDate); // returns date=> 2020-12-24T16:43:33.000Z

console.log(myDate.toString()); // returns string=> Sun Dec 24 2023 16:43:33 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // returns string=> Sun Dec 24 2023

console.log(myDate.toTimeString()); // returns string=> 16:43:33 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleString()); // returns string=> 12/24/2023, 10:13:33 PM

console.log(myDate.toLocaleDateString()); // returns string=> 12/24/2023


let myCreatedDate = new Date('2020-12-24');
let myCreatedDate2 = new Date(2020,12,24);
console.log(myCreatedDate.toDateString()); // returns date=> 2020-12-24T00:00:00.000Z
console.log(myCreatedDate2.toDateString()); // returns date=> Sun Jan 24 2021


// TimeStamp

let myTimeStamp = Date.now();
console.log(myTimeStamp); // returns number=> 1608827946224
console.log(new Date(myTimeStamp).toLocaleString()); // returns string=> 12/24/2020, 10:19:06 PM

console.log(myCreatedDate.getFullYear()); // returns number=> 2020
console.log(myCreatedDate.getMonth()); // returns number=> 11
console.log(myCreatedDate.getDate()); // returns number=> 24
console.log(myCreatedDate.getDay()); // returns number=> 4
console.log(myCreatedDate.getHours()); // returns number=> 0
console.log(myCreatedDate.getMinutes()); // returns number=> 0
console.log(myCreatedDate.getSeconds()); // returns number=> 0
console.log(myCreatedDate.getMilliseconds()); // returns number=> 0
console.log(myCreatedDate.getTime()); // returns number=> 1608787200000


newDate.toLocaleString('default', { 
    month: 'long' 
}) // returns string=> December